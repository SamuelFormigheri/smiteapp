import React, { useMemo, useState } from 'react';
import { v4 } from 'uuid';
import { ITabs } from './interface';
import styles from './styles.module.scss';

const Tabs: React.FC<ITabs> = ({
  tabs,
  startSelected
}) => {
  const [tabSelected, setTabSelected] = useState(startSelected);

  const tabContent = useMemo(() => {
    const {content} = tabs.find(x => x.id === tabSelected);
    return (
      <div className={styles.tabsContent}>
        {content}
      </div>
    )
  },[tabSelected]);

  return (
      <div className={styles.tabsContainer}>
          <div className={styles.tabsHeader}>
            {tabs.map(tab => {
              return (
                <div key={v4()} className={`${styles.tabs} ${tabSelected === tab.id ? styles.selected : ''}`} onClick={() => setTabSelected(tab.id)}>
                  {tab.title}
                </div>
              )
            })}
          </div>
          {tabContent}
      </div>
  );
}

export default Tabs;