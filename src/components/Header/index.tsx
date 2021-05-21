import React from 'react';
import {BiPlusMedical} from 'react-icons/bi';
import {ImSearch} from 'react-icons/im';
import {IoMdArrowDropleft} from 'react-icons/io';
import { useRouter } from 'next/router';
import { useHeader } from '../../context/HeaderContext';
import Frame from '../Frame';
import { IHeader } from './interface';
import styles from './styles.module.scss';

const Header: React.FC<IHeader> = ({
    style
}) => {
  const {backArrow, hideBackArrow} = useHeader();
  const router = useRouter();
  return (
      <div className={styles.header} style={style} >
          <div className={styles.logo}>
            {backArrow && (
                <div className={styles.backArrow}
                    onClick={() => {
                        router.back();
                        hideBackArrow();
                    }}
                >
                    <IoMdArrowDropleft color="var(--primary)" size={42} />
                </div>
            )}
            <img 
                src="/logo.png" 
                alt="Smite" 
              />
          </div>
          <div className={styles.info}>
            <div className={styles.square}>
                <BiPlusMedical size={40} color="rgba(255,255,255,0.5)"/>
            </div>
            <div className={styles.square}>
                <BiPlusMedical size={40} color="rgba(255,255,255,0.5)"/>
            </div>
            <div className={styles.square}>
                <BiPlusMedical size={40} color="rgba(255,255,255,0.5)"/>
            </div>
            <div className={styles.square}>
                <BiPlusMedical size={40} color="rgba(255,255,255,0.5)"/>
            </div>
            <Frame style={{padding: '2px', minWidth: '450px'}}
                layout="no-border-right"
            >
                <div className={styles.profilePic}>
                    <img src="/profilepic.png" alt="Avatar"/>
                    <ImSearch size={40} color="rgba(255,255,255,0.5)" />
                </div>
                <div className={styles.profileInfos}>
                    <h4 className={styles.name}>THecatonquiro</h4>
                    <div className={styles.purchaseStats}>
                        <div className={styles.imagePurchase}>
                            <img src="/gem.svg" alt="Gems"/>
                            <span>75</span>
                        </div>
                        <div className={styles.imagePurchase}>
                            <img src="/favor.png" alt="Favors"/>
                            <span>28,764</span>
                        </div>
                    </div>
                    <div className={styles.xp}>
                        <div>
                            <div className={styles.progress} style={{width: '50%'}}/>
                        </div>
                        <div>86</div>  
                    </div>
                </div>
            </Frame>
          </div>
      </div>
  );
}

export default Header;