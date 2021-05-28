import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import useComponentVisible from '../../hooks/useVisible';
import { IModal, IRefModal } from './interface';
import styles from './styles.module.scss';

const Modal: React.ForwardRefRenderFunction<IRefModal, IModal> = ({
    children,
    outsideClick,
    escKey,
    style
}, ref) => {
  const { ref : modalRef, isVisible, setIsVisible } = useComponentVisible({
      visible: false,
      escKey,
      outsideClick
  })

  const closeModal = () => setIsVisible(false);
  
  const openModal = () => setIsVisible(true);

  useImperativeHandle(ref, () => ({
      closeModal,
      openModal
  }));

  if(!isVisible)
    return null;

  return (
      <div className={styles.overlay}>
          <div className={styles.modal} style={style} ref={modalRef}>
              {children}
          </div>
      </div>
  );
}

export default forwardRef(Modal);