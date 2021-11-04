import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import Button from './Button';

const Note: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
   return (
      <div
         className="flex flex-col w-full min-w-0 md:w-4/6 mb-10 mx-4 sm:mx-8 lg:mx-16 border-l border-t dark:border-background-secondary shadow-lg"
         {...props}
      >
         {props.children}
      </div>
   );
};

const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
   return (
      <textarea
         className="flex bg-transparent border-transparent dark:text-foreground focus:border-transparent focus:ring-transparent w-full h-full resize-none px-6 py-4"
         placeholder="Start writing your note..."
         {...props}
      ></textarea>
   );
};

const Title: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
   return (
      <input
         type="text"
         className="flex flex-grow bg-transparent text-center text-3xl border-none focus:ring-transparent dark:text-foreground"
         placeholder="Title"
         {...props}
      ></input>
   );
};

const Save: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
   return (
      <Button.Rounded {...props}>
         <FaSave size="24" />
      </Button.Rounded>
   );
};

const New: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
   return (
      <Button.Rounded {...props}>
         <FaPlus size="24" />
      </Button.Rounded>
   );
};

const ListItem: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
   return (
      <div
         className="text-center dark:text-foreground bg-transparent hover:bg-gray-200 dark:hover:bg-active cursor-pointer py-3 border-t dark:border-active w-full active:scale-110 active:shadow-md"
         {...props}
      >
         {props.children}
      </div>
   );
};
const SidePanel: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
   return (
      <div className="hidden md:flex overflow-scroll flex-col items-center flex-grow border-t dark:border-foreground/20" {...props}>
         <h2 className="dark:text-foreground my-2 text-xl py-0.5">Saved Notes</h2>
         {props.children}
      </div>
   );
};

export default Object.assign(Note, { Textarea, Title, Save, ListItem, SidePanel, New });
