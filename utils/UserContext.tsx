import { createContext, FC, useState } from 'react';
import { User } from './types';
const data: User = {
   id: 'asdasdasd',
   firstName: 'test',
   lastName: 'testerson',
   email: 'test@test.net',
   notes: [
      {
         id: 'asdasdasdasd',
         body: 'body',
         title: 'title',
         date: 123123123,
         user: {
            id: 'asdasdasd',
            firstName: 'test',
            lastName: 'testerson',
            email: 'test@test.net',
         },
      },
   ],
};
const refetchedData: User = {
   id: 'asdasdasd',
   firstName: 'test',
   lastName: 'testerson',
   email: 'test@test.net',
   notes: [
      {
         id: 'asdasdasdasd',
         body: 'body 2',
         title: 'title 2',
         date: 213123132,
         user: {
            id: 'asdasdasd',
            firstName: 'test',
            lastName: 'testerson',
            email: 'test@test.net',
         },
      },
   ],
};

export type UserContextType = {
   user: User | null;
   refetch: () => void;
};

export const UserContext = createContext<UserContextType>({ user: data, refetch: () => {} });

export const UserContextProvider: FC = ({ children }) => {
   const [user, setUser] = useState(data);
   const refetch = () => {
      console.log('refetched');
      setUser(refetchedData);
   };
   return <UserContext.Provider value={{ user, refetch }}>{children}</UserContext.Provider>;
};
