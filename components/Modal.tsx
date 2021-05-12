import * as ReactModal from 'react-modal';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

export interface ModalProps {
  children: any,
  isOpen: boolean,
  setIsOpen: any
}

const useStyles = createUseStyles({
  closebtn: {
    color: "red",
    position: "absolute",
    right: "10px",
    top: "10px",
    fontSize: "23px",
    cursor:"pointer"
  }
})

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  const classes = useStyles()
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{ overlay: { zIndex: "999" } }}
      >
        <div onClick={() => { setIsOpen(false) }} className={classes.closebtn}>✕</div>
        {children}
      </ReactModal>
    </>
  );
}

export default Modal;