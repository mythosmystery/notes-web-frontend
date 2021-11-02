import { createContext } from 'react';
import { User } from './types';

export type UserContextType = {
   user: User | null;
   refetch: () => void;
};

export const UserContext = createContext<UserContextType>({ user: null, refetch: () => {} });
