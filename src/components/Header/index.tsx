import React from 'react';
import Image from 'next/image';
import {BiPlusMedical} from 'react-icons/bi';
import {ImSearch} from 'react-icons/im';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
      <div className={styles.header}>
          <div className={styles.logo}>
            <Image 
                width={1000} 
                height={500} 
                src="/logo.png" 
                alt="Smite" 
                objectFit="cover"
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
            <div className={styles.character}>
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
            </div>
          </div>
      </div>
  );
}

export default Header;