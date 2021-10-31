export interface User {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   notes?: [Note];
}
export interface Note {
   id: string;
   title: string;
   body: string;
   date: number;
   user?: User;
}
