import { useEffect } from 'react';
import CardMode from '../components/CardMode';
import Tabs from '../components/Tabs';
import { useHeader } from '../context/HeaderContext';
import styles from '../styles/play.module.scss';

export default function Play(){
    const { showBackArrow } = useHeader();

    useEffect(() => {
        showBackArrow();
    },[]);

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
                        content: <> 
                          <div>
                            Normal
                          </div>
                        </>
                      }
                    ]} 
                    startSelected={1}
                />
            </div>
        </div>
    )
}