import { createContext, FC, useState } from 'react';

export type ThemeContextType = {
   dark: boolean;
   toggleDark: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({ dark: true, toggleDark: () => {} });

export const ThemeProvider: FC = ({ children }) => {
   const [dark, setDark] = useState(true);
   const toggleDark = () => {
      setDark(!dark);
   };
   return <ThemeContext.Provider value={{ dark, toggleDark }}>{children}</ThemeContext.Provider>;
};
