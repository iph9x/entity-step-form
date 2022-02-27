import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  closeModal: VoidFunction;
};

const modalRoot = document.getElementById('modal-root')!;

const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.modal}>{children}</div>
    </>,
    modalRoot
  );
};

export default Modal;
