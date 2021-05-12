import React from 'react';
import { IInput } from './interface';
import styles from './styles.module.scss';

const Input: React.FC<IInput> = ({
    style,
    ref,
    ...rest
}) => {
  return <input ref={ref} className={styles.input} {...rest} style={style} />;
}

export default Input;