import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { IModal, IRefModal } from './interface';
import styles from './styles.module.scss';

const Modal: React.ForwardRefRenderFunction<IRefModal, IModal> = ({
    children
}, ref) => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => setVisible(false);
  
  const openModal = () => setVisible(true);

  useImperativeHandle(ref, () => ({
      closeModal,
      openModal
  }));

  if(!visible)
    return null;

  return (
      <div className={styles.overlay}>
          <div className={styles.modal}>
              {children}
          </div>
      </div>
  );
}

export default forwardRef(Modal);