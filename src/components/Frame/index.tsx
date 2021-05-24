import React from 'react';
import { IFrame } from './interface';
import styles from './styles.module.scss';

const Frame: React.FC<IFrame> = ({style, layout, children}) => {
  return <div 
      className={`
        ${styles.frame} 
        ${layout === 'no-border-right' && styles.noBorderRight}
        ${layout !== 'no-sharp-edges' && styles.sharpEdges}
      `} 
      style={style}
    >{children}</div>;
}

export default Frame;