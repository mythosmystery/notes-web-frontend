const NoteInput: React.FC = () => {
   return (
      <input
         type="text"
         className="bg-transparent border-none border-b border-active focus:border-b focus:border-accent focus:ring-transparent text-foreground h-12"
         placeholder="Enter the title of your note"
      ></input>
   );
};
export default NoteInput;
