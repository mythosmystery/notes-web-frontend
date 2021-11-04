import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDeleteNoteMutation } from '../generated/graphql';

interface Props {
   noteId: string;
   refetch: () => void;
}

const DeleteButton: FC<Props> = ({ noteId, refetch }) => {
   const [, deleteNote] = useDeleteNoteMutation();

   const handleDelete = async () => {
      const result = await deleteNote({ id: noteId });
      console.log(result);
      refetch();
   };
   return (
      <button onClick={handleDelete} className="p-3 hover:text-orange text-foreground hover:bg-selection active:scale-125 active:shadow-lg">
         <FaTrash />
      </button>
   );
};
export default DeleteButton;
