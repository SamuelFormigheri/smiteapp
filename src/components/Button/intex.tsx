import React from 'react';
import { IButton } from './interface';
import styles from './styles.module.scss';

const Button: React.FC<IButton> = ({
    style,
    children,
    type,
    ...rest
}) => {
  return <button className={styles.button} type={type || "button"} {...rest} style={style}>{children}</button>;
}

export default Button;