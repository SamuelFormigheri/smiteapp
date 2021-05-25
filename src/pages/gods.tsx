import { FormEvent, useEffect, useRef, useState } from 'react'
import { v4 } from 'uuid';
import { characters } from '../../public/characters/charList';
import Frame from '../components/Frame';
import inputStyles from '../components/Input/input.module.scss';
import { useHeader } from '../context/HeaderContext';
import styles from '../styles/gods.module.scss';

export default function Gods() {
    const [gods, setGods] = useState(characters);
    const inputRef = useRef<HTMLInputElement>();
    const { showBackArrow } = useHeader();

    const handleSubmitFilter = (e: FormEvent) => {
        e.preventDefault();
        if(!inputRef || !inputRef.current || inputRef.current.value === ""){
            setGods(characters);
            return;
        }

        setGods(characters.filter((char) => char.name.includes(inputRef.current.value)));
    };

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
            }}
                layout={{
                    noSharpEdges: true
                }}
            >
                <form onSubmit={handleSubmitFilter} className={styles.controls}>
                    <input 
                        ref={inputRef}
                        type="text"
                        placeholder="Procurar"
                        style={{width: '300px'}}
                        className={inputStyles.input}
                    />
                </form>
                <div className={styles.list}>
                    {gods.map((char) => {
                        return(
                            <Frame
                                key={v4()}
                                layout={{
                                    square: true,
                                    noSharpEdges: true
                                }}
                            >
                                <img 
                                    src={`/characters/${char.src}`}
                                    alt={char.name}
                                />
                                <span>{char.name}</span>
                            </Frame>
                        )
                    })}

                </div>
            </Frame>
        </div>
    )
}