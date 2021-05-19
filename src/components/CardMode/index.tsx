import React from 'react';
import { GiLaurelCrown } from 'react-icons/gi';
import { IoMdTrophy } from 'react-icons/io';
import { ICardMode } from './interface';
import styles from './styles.module.scss';

const CardMode: React.FC<ICardMode> = ({
    img,
    mode,
    details,
    playerCount,
    description
}) => {
  return (
      <div className={styles.content}>
          <img src={img.src} alt={img.alt}/>
          <div className={styles.header}>
            <GiLaurelCrown size={26} color="var(--green)"/>
            <IoMdTrophy  size={26} color="var(--yellow)"/>
          </div>

          <div className={styles.body}>
              <span>
                {mode}
              </span>
              <span>
                {details}
              </span>
              <span>
                {playerCount}
              </span>
          </div>

          <div className={styles.footer}>
            {description}
          </div>
      </div>
  );
}

export default CardMode;