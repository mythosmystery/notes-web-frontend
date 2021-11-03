export type User = {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   notes?: NoteType[];
};
export type NoteType = {
   id: string;
   title: string;
   body: string;
   date: number;
   user?: User;
};
