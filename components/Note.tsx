import { useContext } from 'react';
import { FaSave } from 'react-icons/fa';
import { UserContext, UserContextType } from '../utils/UserContext';
import Button from './Button';

const Note: React.FC = ({ children }) => {
   return (
      <div className="flex flex-col w-full min-w-0 md:w-4/6 mb-10 mx-4 sm:mx-8 lg:mx-20 border-l border-t dark:border-background-secondary shadow-lg">
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
         className="flex flex-grow bg-transparent text-center text-3xl border-none focus:ring-transparent text-foreground"
         placeholder="Title"
      ></input>
   );
};

const Save: React.FC = () => {
   const { refetch } = useContext(UserContext) as UserContextType;
   return (
      <div className="">
         <Button.Rounded onClick={refetch}>
            <FaSave size="24" />
         </Button.Rounded>
      </div>
   );
};

const ListItem: React.FC = ({ children }) => {
   return (
      <div className="text-center dark:text-foreground bg-transparent hover:bg-gray-200 dark:hover:bg-active cursor-pointer py-3 border-t dark:border-active w-full active:scale-110 active:shadow-md">
         {children}
      </div>
   );
};
export default Object.assign(Note, { Textarea, Title, Save, ListItem });
