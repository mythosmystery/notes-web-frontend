import Note from '../components/Note';

export default function Notes() {
   return (
      <>
         <h1 className="dark:text-foreground text-center py-8 text-4xl">Notes</h1>
         <div className="flex justify-end h-screen">
            <div className="hidden md:flex flex-col items-center flex-grow border-t dark:border-foreground/20 w-1/6">
               <h2 className="dark:text-foreground my-2 text-xl py-0.5">Saved Notes</h2>
               {/* {user.notes.map(note => {
                  return <Note.ListItem key={note.id}>{note.title}</Note.ListItem>;
               })} */}
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
