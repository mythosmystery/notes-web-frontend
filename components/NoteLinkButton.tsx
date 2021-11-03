import { Dispatch, FC, MouseEventHandler, ReactNode, SetStateAction } from 'react';
import { NoteType } from '../utils/types';
import Note from './ui-components/Note';

interface Props {
   children: ReactNode;
   note: NoteType;
   setCurrentNote: Dispatch<SetStateAction<NoteType | null>>;
}
const NoteLinkButton: FC<Props> = ({ children, note, setCurrentNote }) => {
   const handleClick: MouseEventHandler = () => {
      setCurrentNote(note);
   };
   return <Note.ListItem onClick={handleClick}>{children}</Note.ListItem>;
};
export default NoteLinkButton;
