import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { ITabs } from './interface';
import styles from './styles.module.scss';

const Tabs: React.FC<ITabs> = ({
  tabs,
  startSelected
}) => {
  const [tabSelected, setTabSelected] = useState(startSelected);

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
          {tabs.map(tab => (
            <div key={v4()} className={styles.tabsContent}
              style={{display: tabSelected === tab.id ? 'flex' : 'none'}}
            >
              {tab.content}
            </div>)
          )}
      </div>
  );
}

export default Tabs;