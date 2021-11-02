import { FC, FormEventHandler, useState } from 'react';
import TextInput from './TextInput';

declare module 'react' {
   interface EventTarget {
      value: string;
      name: string;
   }
}

const LoginForm: FC = () => {
   const [formState, setFormState] = useState({ email: '', password: '' });

   const onSubmit: FormEventHandler = event => {
      event.preventDefault();
      console.log(formState);
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
