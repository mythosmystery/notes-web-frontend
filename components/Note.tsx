import { FaSave } from 'react-icons/fa';
import Button from './Button';

const Note: React.FC = ({ children }) => {
   return (
      <div className="flex flex-col h-3/4 w-full sm:w-4/6 my-10 mx-4 sm:mx-20 border-l border-t dark:border-background-secondary shadow-lg">
         {children}
      </div>
   );
};

const Textarea: React.FC = () => {
   return (
      <textarea
         className="flex bg-transparent border-transparent dark:text-foreground focus:border-transparent focus:ring-transparent w-full h-full resize-none px-6 py-4"
         placeholder="Start writing your note..."
      ></textarea>
   );
};

const Title: React.FC = () => {
   return (
      <input
         type="text"
         className="flex flex-grow bg-transparent text-center text-3xl border-none focus:ring-transparent text-foreground my-2"
         placeholder="Title"
      ></input>
   );
};

const Save: React.FC = () => {
   return (
      <div className="flex my-2">
         <Button.Rounded>
            <FaSave size="24" />
         </Button.Rounded>
      </div>
   );
};

const ListItem: React.FC = ({ children }) => {
   return (
      <div className="text-center dark:text-foreground bg-transparent hover:bg-gray-200 dark:hover:bg-active cursor-pointer py-3 border-t dark:border-active w-full">
         {children}
      </div>
   );
};
export default Object.assign(Note, { Textarea, Title, Save, ListItem });
