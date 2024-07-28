import React, { ReactNode } from 'react';
import classes from "./Modal.module.css";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <button className={classes.modalClose} onClick={onClose}>
          &times;
        </button>
        <div className={classes.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
