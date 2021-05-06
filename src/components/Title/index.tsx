import React from 'react';
import { ITitle } from './interface';
import styles from './styles.module.scss';

const Title: React.FC<ITitle> = ({
    size = 'default',
    children
}) => {
  return <span className={size === 'default' ? styles.title : styles.titleBig}>{children}</span>;
}

export default Title;