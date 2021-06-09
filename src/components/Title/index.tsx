import React from 'react';
import { ITitle } from './interface';
import styles from './styles.module.scss';

const Title: React.FC<ITitle> = ({
    size = 'default',
    children,
    style
}) => {
  return <span className={size === 'default' ? styles.title : styles.titleBig} style={style}>{children}</span>;
}

export default Title;