import React from 'react';
import { IFrame } from './interface';
import styles from './styles.module.scss';

const Frame: React.FC<IFrame> = ({style, layout, children}) => {
  return <div 
      className={`
        ${layout?.square ? styles.square : styles.frame} 
        ${layout?.noBorderRight && styles.noBorderRight}
        ${!layout?.noSharpEdges && styles.sharpEdges}
      `} 
      style={style}
    >{children}</div>;
}

export default Frame;