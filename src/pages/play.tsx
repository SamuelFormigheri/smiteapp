import { useEffect } from 'react';
import { GiLaurelCrown } from 'react-icons/gi';
import { IoMdTrophy } from 'react-icons/io';
import CardList from '../components/CardList';
import CardMode from '../components/CardMode';
import Frame from '../components/Frame';
import Tabs from '../components/Tabs';
import { useHeader } from '../context/HeaderContext';
import styles from '../styles/play.module.scss';

export default function Play(){
    const { showBackArrow } = useHeader();

    useEffect(() => {
        showBackArrow();
    },[]);

    // Catch data from normal modes and do the logic to change 

    return(
        <div className={styles.content}>
            <div style={{ 
                display: 'flex', 
                width: '82%', 
                height: '100%'
            }}>
                <Tabs 
                    tabs={[
                      {
                        id: 1,
                        title: "DESTAQUE",
                        content: <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                        }}> 
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                <CardMode 
                                    img={{
                                        src: "/arena.png",
                                        alt: "Arena"
                                    }}
                                    mode="ARENA"
                                    details="NORMAL"
                                    playerCount="5X5"
                                    description="Uma batalha eletrizante em uma arena aberta"
                                />
                                <CardMode 
                                    img={{
                                        src: "/joust.png",
                                        alt: "Justa"
                                    }}
                                    mode="JUSTA"
                                    details="NORMAL"
                                    playerCount="3X3"
                                    description="Subjugue seus inimigos em um mapa com uma rota para equipes reduzidas"
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                <CardMode 
                                    img={{
                                        src: "/assault.png",
                                        alt: "Assalto"
                                    }}
                                    mode="ASSALTO"
                                    details="NORMAL"
                                    playerCount="5X5"
                                    description="Deuses escolhidos aleatoriamente, um mapa com uma rota. Lute até a morte!"
                                />
                                <CardMode 
                                    img={{
                                        src: "/siege.png",
                                        alt: "Cerco"
                                    }}
                                    mode="CERCO"
                                    details="NORMAL"
                                    playerCount="4X4"
                                    description="Uma batalha épica em um mapa com 2 rotas e uma selva."
                                />
                            </div>
                        </div>
                      },{
                        id: 2,
                        title: "NORMAL",
                        content: <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                alignItems:'center',
                                justifyContent: 'center'
                            }}
                        > 
                            <Frame 
                                style={{
                                    width: '55%',
                                    height: '100%',
                                    margin: '4px',
                                    flexDirection: 'column'
                                }}
                            >
                                <CardList 
                                    title="CONQUISTA"
                                    firstWinOfDay
                                />
                                <CardList 
                                    title="ARENA"
                                    firstWinOfDay
                                />
                                <CardList 
                                    title="COLISÃO"
                                    firstWinOfDay
                                />
                                <CardList 
                                    title="JUSTA"
                                    firstWinOfDay
                                />
                                <CardList 
                                    title="ASSALTO"
                                    firstWinOfDay
                                />
                                <CardList 
                                    title="CERCO"
                                    firstWinOfDay
                                />
                                <CardList 
                                    title="DUEL SIEGE"
                                    firstWinOfDay
                                />
                            </Frame>
                            
                            <Frame
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    margin: '4px',
                                    flexDirection: 'column'    
                                }}
                            >
                                <div className={styles.square}>
                                    <img 
                                        src='./assault.png'
                                        alt="ASSALTO"
                                    />
                                </div>
                                <span className={styles.title}>
                                    ASSALTO
                                </span>
                                <span className={styles.subtitle}>
                                    5X5
                                </span>
                                <span className={styles.text}>
                                    Lorem ipsum dolor sit amet 
                                    consectetur adipisicing elit.
                                     Id quis maiores, ex eveniet 
                                     nulla eius nostrum corrupti iusto 
                                     impedit laudantium fuga, amet eum? 
                                     Adipisci molestiae et accusamus porro 
                                     facere quibusdam?
                                </span>

                                <span className={styles.subtitle}>
                                    DISPONÍVEL PARA
                                </span>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '10px'
                                }}>
                                    <IoMdTrophy  size={30} color="var(--yellow)"/>
                                    <span className={styles.text}>
                                        Mérito
                                    </span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '10px'
                                }}>
                                    <GiLaurelCrown size={30} color="var(--green)"/>
                                    <span className={styles.text}>
                                        Primeira Vitória do Dia
                                    </span>
                                </div>
                            </Frame>
                        </div>
                      }
                    ]} 
                    startSelected={1}
                />
            </div>
        </div>
    )
}