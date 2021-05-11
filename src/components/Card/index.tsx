import React from 'react';
import { ICard } from './interface';
import styles from './styles.module.scss';

const Card: React.FC<ICard> = ({
    title,
    text,
    style
}) => {
  return (
      <div className={styles.cardContainer} style={style}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={styles.cardText}>{text}</span>
      </div>
  );
}

export default Card;