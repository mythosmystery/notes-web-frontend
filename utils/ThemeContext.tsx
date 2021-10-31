import { createContext, FC, useState } from 'react';

export type ThemeContextType = {
   dark: boolean;
   toggleDark: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({ dark: false, toggleDark: () => {} });

export const ThemeProvider: FC = ({ children }) => {
   const [dark, setDark] = useState(false);
   const toggleDark = () => {
      setDark(!dark);
   };
   return <ThemeContext.Provider value={{ dark, toggleDark }}>{children}</ThemeContext.Provider>;
};
