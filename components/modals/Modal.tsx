import React, { Dispatch, SetStateAction } from 'react'
import Dialog from '@mui/material/Dialog';
import {DialogContent, DialogTitle} from '@mui/material';

interface ModalProps{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  children: JSX.Element;
}
// el modal de material tiene el onclose que me setea la variable a false, para poder cerrar el dialogo
const Modal = ({open, setOpen, modalTitle, children}: ModalProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;