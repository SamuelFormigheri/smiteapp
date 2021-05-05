import React from 'react';
import {AiFillThunderbolt} from 'react-icons/ai';
import styles from './styles.module.scss';

const Loader: React.FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <AiFillThunderbolt size={20} color="var(--secondary)" />
    </div>
  );
}

export default Loader;