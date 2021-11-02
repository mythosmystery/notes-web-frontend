import { FC, useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Button from './Button';
import { ThemeContext, ThemeContextType } from '../utils/ThemeContext';

const ThemeWrapper: FC = ({ children }) => {
   const { dark, toggleDark } = useContext(ThemeContext) as ThemeContextType;
   return (
      <div className={dark ? 'dark' : ''}>
         <div className="min-h-screen w-screen dark:bg-background font-mono">
            <div className="absolute">
               <Button.Rounded onClick={toggleDark}>{dark ? <FaSun size="22" /> : <FaMoon size="22" />}</Button.Rounded>
            </div>
            {children}
         </div>
      </div>
   );
};
export default ThemeWrapper;
