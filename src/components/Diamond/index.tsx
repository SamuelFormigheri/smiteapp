import React from 'react';
import { ImDiamonds } from 'react-icons/im';
import { IDiamond } from './interface';
import styles from './styles.module.scss';

const Diamond: React.FC<IDiamond> = ({
    size = 16,
    color= "var(--primary)",
    ...rest
}) => {
  return (
    <ImDiamonds 
      className={styles.diamond} 
      size={size} 
      color={color}
      {...rest}
    />
  );
}

export default Diamond;