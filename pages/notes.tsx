import Note from '../components/Note';
import NoteLinkButton from '../components/NoteLinkButton';
import { useGetMyNotesQuery } from '../generated/graphql';

export default function Notes() {
   const [result] = useGetMyNotesQuery();
   const { data, fetching } = result;
   if (fetching) {
      return null;
   }
   return (
      <>
         <h1 className="dark:text-foreground text-center py-8 text-4xl">Notes</h1>
         <div className="flex justify-end h-screen">
            <div className="hidden md:flex flex-col items-center flex-grow border-t dark:border-foreground/20 w-1/6">
               <h2 className="dark:text-foreground my-2 text-xl py-0.5">Saved Notes</h2>
               {data?.me?.notes.map(note => {
                  return (
                     <NoteLinkButton key={note.id} note={note}>
                        {note.title}
                     </NoteLinkButton>
                  );
               })}
            </div>
            <Note>
               <Note.Save />
               <Note.Title></Note.Title>
               <Note.Textarea />
            </Note>
         </div>
      </>
   );
}
