import React from 'react';
import {GiCrackedHelm} from 'react-icons/gi';
import {FaExclamation} from 'react-icons/fa';
import Frame from '../Frame';
import styles from './styles.module.scss';
import { IFrameQuest } from './interface';

const FrameQuest: React.FC<IFrameQuest> = ({
    title,
    description,
    points
}) => {
  return (
    <Frame style={{width: '400px', minHeight: '65px'}}>
        <div className={styles.quests}>
            <div className={styles.questExclamation}>
                <FaExclamation size={26} color="var(--secondary)" />
            </div>
            <div className={styles.questDescription}>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            <div className={styles.questPoints}>
                <GiCrackedHelm size={26} color="var(--yellow)" />
                <span>{points}</span>
            </div>
            <div className={styles.progressBar} style={{width: '50%'}} />
        </div>
    </Frame>
  );
}

export default FrameQuest;