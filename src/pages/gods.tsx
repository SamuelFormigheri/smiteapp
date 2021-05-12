import { useEffect } from 'react'
import { v4 } from 'uuid';
import { characters } from '../../public/characters/charList';
import Frame from '../components/Frame';
import Input from '../components/Input';
import { useHeader } from '../context/HeaderContext';
import styles from '../styles/gods.module.scss';

export default function Gods() {
    const { showBackArrow } = useHeader();

    useEffect(() => {
        showBackArrow();
    },[]);

    return(
        <div className={styles.gods}>
            <Frame style={{
                width: '82%',
                height: '90%',
                maxHeight: '600px',
                borderRight: '2px solid var(--secondary)',
                flexDirection: 'column'
            }}>
                <div className={styles.controls}>
                    <Input 
                        type="text"
                        placeholder="Procurar"
                        style={{width: '300px'}}
                    />
                </div>
                <div className={styles.list}>
                    {characters.map((char) => {
                        return(
                            <div key={v4()} className={styles.square}>
                                <img 
                                    src={`/characters/${char.src}`}
                                    alt={char.name}
                                />
                                <span>{char.name}</span>
                            </div>
                        )
                    })}

                </div>
            </Frame>
        </div>
    )
}