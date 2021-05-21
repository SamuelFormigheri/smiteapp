import React from 'react';
import { IFrame } from './interface';
import styles from './styles.module.scss';

const Frame: React.FC<IFrame> = ({style, layout, children}) => {
  return <div 
      className={`
        ${styles.frame} 
        ${layout === 'no-border-right' && styles.noBorderRight}
      `} 
      style={style}
    >{children}</div>;
}

export default Frame;