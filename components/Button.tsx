interface Props {
   children: React.ReactNode;
   onClick?: () => void;
}
const Button: React.FC<Props> = ({ children, onClick }) => {
   return (
      <button className="border dark:border-active dark:text-foreground m-2 dark:hover:bg-active hover:bg-gray-200 p-3" onClick={onClick}>
         {children}
      </button>
   );
};

const Rounded: React.FC<Props> = ({ children, onClick }) => {
   return (
      <button
         onClick={onClick}
         className="dark:bg-active bg-selection rounded-full m-2 p-2 shadow-lg dark:hover:bg-foreground hover:bg-background dark:hover:text-accent hover:text-accent active:scale-125"
      >
         {children}
      </button>
   );
};
export default Object.assign(Button, { Rounded });
