import { FC, FormEventHandler, useState } from 'react';
import { useMutation, gql } from 'urql';
import TextInput from './TextInput';

declare module 'react' {
   interface EventTarget {
      value: string;
      name: string;
   }
}
const Login = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         id
         email
         firstName
         lastName
      }
   }
`;

const LoginForm: FC = () => {
   const [formState, setFormState] = useState({ email: '', password: '' });
   const [loginResult, login] = useMutation(Login);
   const onSubmit: FormEventHandler = async event => {
      event.preventDefault();
      const newLogin = await login({
         variables: {
            email: 'test@test.net',
            password: 'password',
         },
      });
      console.log(newLogin);
   };
   const onChange: FormEventHandler = ({ target }) => {
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <form onSubmit={onSubmit} onChange={onChange}>
         <div className="flex flex-col dark:bg-background-secondary shadow-md p-2">
            <TextInput type="text" placeholder="Email..." name="email" />
            <TextInput type="password" placeholder="Password..." name="password" />
            <button type="submit" className="p-1 dark:hover:text-accent hover:text-background dark:text-foreground text-lg ">
               Login
            </button>
         </div>
      </form>
   );
};
export default LoginForm;
