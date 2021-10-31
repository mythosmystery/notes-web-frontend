import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Button from '../components/Button';
import Note from '../components/Note';
import { ThemeContext, ThemeContextType } from '../utils/ThemeContext';
import { UserContext, UserContextType } from '../utils/UserContext';

export default function Notes() {
   const { dark, toggleDark } = useContext(ThemeContext) as ThemeContextType;
   const { user } = useContext(UserContext) as UserContextType;
   return (
      <div className={dark ? 'dark' : ''}>
         <div className="min-h-screen w-min-screen dark:bg-background z-0 font-mono">
            <div className="absolute">
               <Button.Rounded onClick={toggleDark}>{dark ? <FaSun size="22" /> : <FaMoon size="22" />}</Button.Rounded>
            </div>
            <h1 className="dark:text-foreground text-center py-8 text-4xl">Notes</h1>
            <div className="flex justify-end h-screen">
               <div className="hidden md:flex flex-col items-center flex-grow border-t dark:border-foreground/20 w-1/6">
                  <h2 className="dark:text-foreground my-2 text-xl py-0.5">Saved Notes</h2>
                  {user?.notes?.map(note => {
                     return <Note.ListItem key={note.id}>{note.title}</Note.ListItem>;
                  })}
               </div>
               <Note>
                  <Note.Save />
                  <Note.Title></Note.Title>
                  <Note.Textarea />
               </Note>
            </div>
         </div>
      </div>
   );
}
