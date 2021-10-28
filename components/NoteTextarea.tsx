const NoteTextarea: React.FC = () => {
   return (
      <textarea
         className="bg-transparent border-transparent dark:text-foreground focus:border-transparent focus:ring-transparent w-full h-full resize-none px-6 py-4"
         placeholder="Start writing your notes..."
      ></textarea>
   );
};
export default NoteTextarea;
