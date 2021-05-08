import React from 'react';
import { IFrame } from './interface';
import styles from './styles.module.scss';

const Frame: React.FC<IFrame> = ({style, children}) => {
  return <div className={styles.frame} style={style}>{children}</div>;
}

export default Frame;