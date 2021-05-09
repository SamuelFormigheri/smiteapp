import React from 'react';
import { ITooltip } from './interface';
import styles from './styles.module.scss';

const Tooltip: React.FC<ITooltip> = ({title, style, children}) => {
  return (
    <div className={styles.tooltip}>
        {children}
        <span className={styles.tooltipSpan} style={style}>{title}</span>
    </div>
  );
}

export default Tooltip;