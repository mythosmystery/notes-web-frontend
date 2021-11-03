import { useRouter } from 'next/dist/client/router';
import { FC, FormEventHandler, useState } from 'react';
import { useLoginMutation } from '../generated/graphql';
import TextInput from './TextInput';

declare module 'react' {
   interface EventTarget {
      value: string;
      name: string;
      innerText: string;
   }
}

const LoginForm: FC = () => {
   const router = useRouter();
   const [formState, setFormState] = useState({ email: '', password: '' });
   const [, login] = useLoginMutation();
   const onSubmit: FormEventHandler = async event => {
      event.preventDefault();
      const response = await login({
         email: formState.email,
         password: formState.password,
      });
      if (response.data) {
         setFormState({ email: '', password: '' });
         router.push('/notes');
      }
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
         <div className="flex flex-col dark:bg-background-secondary bg-gray-200 shadow-md p-2">
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
