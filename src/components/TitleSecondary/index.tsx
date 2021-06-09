import React from 'react';
import { ITitle } from './interface';
import styles from './styles.module.scss';

const TitleSecondary: React.FC<ITitle> = ({
    type = 'title',
    children,
    style
}) => {
  return <span className={type === 'title' ? styles.title : styles.subtitle} style={style}>{children}</span>;
}

export default TitleSecondary;