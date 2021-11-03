import { MouseEventHandler, ReactNode } from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';

interface Props {
   children?: ReactNode;
   onClick?: MouseEventHandler;
   value?: string;
}

const Note: React.FC = ({ children }) => {
   return (
      <div className="flex flex-col w-full min-w-0 md:w-4/6 mb-10 mx-4 sm:mx-8 lg:mx-20 border-l border-t dark:border-background-secondary shadow-lg">
         {children}
      </div>
   );
};

const Textarea: React.FC<Props> = ({ value }) => {
   return (
      <textarea
         className="flex bg-transparent border-transparent dark:text-foreground focus:border-transparent focus:ring-transparent w-full h-full resize-none px-6 py-4"
         placeholder="Start writing your note..."
         value={value}
      ></textarea>
   );
};

const Title: React.FC<Props> = ({ value }) => {
   return (
      <input
         type="text"
         className="flex flex-grow bg-transparent text-center text-3xl border-none focus:ring-transparent text-foreground"
         placeholder="Title"
         value={value}
      ></input>
   );
};

const Save: React.FC = () => {
   return (
      <div className="">
         <Button.Rounded>
            <FaSave size="24" />
         </Button.Rounded>
      </div>
   );
};

const ListItem: React.FC<Props> = ({ children, onClick }) => {
   return (
      <div
         onClick={onClick}
         className="text-center dark:text-foreground bg-transparent hover:bg-gray-200 dark:hover:bg-active cursor-pointer py-3 border-t dark:border-active w-full active:scale-110 active:shadow-md"
      >
         {children}
      </div>
   );
};
export default Object.assign(Note, { Textarea, Title, Save, ListItem });
