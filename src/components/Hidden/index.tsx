import React from 'react';
import { IHidden } from './interface';
import styles from './styles.module.scss';

const Hidden: React.FC<IHidden> = ({
    lg,
    md,
    xs,
    sm,
    xl,
    children
}) => {
  return (
    <div className={`
        ${lg && styles.lg}
        ${md && styles.md}
        ${xs && styles.xs}
        ${sm && styles.sm}
        ${xl && styles.xl}
    `}>
        {children}
    </div>
  );
}

export default Hidden;