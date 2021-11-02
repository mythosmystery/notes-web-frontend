import { FC } from 'react';

interface Props {
   placeholder: string;
   type: string;
   name: string;
}

const TextInput: FC<Props> = ({ placeholder, type, name }) => {
   return (
      <input
         type={type}
         placeholder={placeholder}
         name={name}
         className="my-1 bg-transparent border-transparent dark:text-foreground focus:border-transparent focus:ring-transparent active:bg-transparent"
      />
   );
};
export default TextInput;
