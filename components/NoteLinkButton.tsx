import { FC, MouseEventHandler, ReactNode } from 'react';
import { NoteType } from '../utils/types';
import Note from './Note';

interface Props {
   children: ReactNode;
   note: NoteType;
}
const NoteLinkButton: FC<Props> = ({ children, note }) => {
   const handleClick: MouseEventHandler = ({ target }) => {};
   return <Note.ListItem onClick={handleClick}>{children}</Note.ListItem>;
};
export default NoteLinkButton;
