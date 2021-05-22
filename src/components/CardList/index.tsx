import React from 'react';
import { GiLaurelCrown } from 'react-icons/gi';
import styles from './styles.module.scss';
import { ICardList } from './interface';

const CardList: React.FC<ICardList> = ({
    title,
    firstWinOfDay,
    onClick,
    selected
}) => {
  return <div className={`${styles.cardListContent} ${ selected && styles.selected}`} onClick={() => onClick()}>
      <div style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        {firstWinOfDay && (
            <GiLaurelCrown size={30} color="var(--green)"
                style={{
                    marginRight: '10px'
                }}
            />
        )}
        {title}
      </div>
  </div>;
}

export default CardList;