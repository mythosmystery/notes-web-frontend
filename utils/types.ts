export type User = {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   notes?: Note[];
};
export type Note = {
   id: string;
   title: string;
   body: string;
   date: number;
   user?: User;
};
