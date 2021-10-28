interface Props {
   children: React.ReactNode;
   onClick: () => void;
}
const Button: React.FC<Props> = ({ children, onClick }) => {
   return (
      <button className="border dark:border-active dark:text-foreground m-2 p-3" onClick={onClick}>
         {children}
      </button>
   );
};
export default Button;
