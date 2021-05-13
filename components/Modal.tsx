import * as ReactModal from 'react-modal';
import { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { ITheme } from '../styles/theme';

export interface ModalProps {
  children: any,
  isOpen: boolean,
  setIsOpen: any
}

const useStyles = createUseStyles((theme: ITheme) => ({
  closebtn: {
    // color: "red",
    position: "absolute",
    right: "10px",
    top: "10px",
    fontSize: "23px",
    cursor: "pointer",
    color: theme.alternativeText,
    "&:hover": {
      color: "red"
    }
  }
}))

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  const theme: ITheme = useTheme()
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
        ariaHideApp={false}
        style={{ overlay: { zIndex: "999", background: "rgba(0,0,0,0.5)" }, content: { background: theme.background } }}
      >
        <div onClick={() => { setIsOpen(false) }} className={classes.closebtn}>✕</div>
        {children}
      </ReactModal>
    </>
  );
}

export default Modal;