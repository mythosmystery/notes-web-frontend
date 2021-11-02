import { FC, FormEventHandler, useState } from 'react';
import TextInput from './TextInput';

const RegisterForm: FC = () => {
   const [formState, setFormState] = useState({ email: '', firstName: '', lastName: '', password: '' });

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
         <div className="flex flex-col bg-background-secondary shadow-md p-2">
            <TextInput type="text" placeholder="Email..." name="email" />
            <TextInput type="text" placeholder="First name..." name="firstName" />
            <TextInput type="text" placeholder="Last name..." name="lastName" />
            <TextInput type="password" placeholder="Password..." name="password" />
            <button type="submit" className="p-1 dark:hover:text-accent hover:text-background dark:text-foreground text-lg active:scale-110">
               Register
            </button>
         </div>
      </form>
   );
};
export default RegisterForm;
