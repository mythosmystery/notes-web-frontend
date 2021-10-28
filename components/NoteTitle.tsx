const NoteTitle: React.FC = ({ children }) => {
   return (
      <div className="text-center dark:text-foreground bg-transparent hover:bg-gray-200 dark:hover:bg-active cursor-pointer py-3 border-t dark:border-active w-full">
         {children}
      </div>
   );
};
export default NoteTitle;
