import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/store.module.scss';
import Carousel from '../components/Carousel';
import Frame from '../components/Frame';
import Tabs from '../components/Tabs';
import { useHeader } from '../context/HeaderContext';

export default function Store(){
    const { showBackArrow } = useHeader();

    useEffect(() => {
        showBackArrow();
    },[]);
    
    return(
        <>
        <Head>
            <title>Loja | Smite</title>
        </Head>
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
                           <Frame 
                                style={{
                                    height: '700px',
                                    margin: '4px',
                                    justifyContent: 'space-evenly'
                                }}
                                layout={{
                                    noSharpEdges: true
                                }}
                            >
                                <div
                                    style={{ 
                                        display: 'flex', 
                                        width: '55%',
                                        justifyContent: 'center',
                                        alignItems:'center',
                                        padding: '10px'
                                    }}
                                >
                                    <Carousel 
                                        width={850} 
                                        height={630}
                                        max= {9}
                                        start= {1}
                                        diamonds
                                        frame={{
                                            layout: {
                                                noSharpEdges: true
                                            }
                                        }}
                                    >
                                        <img
                                            src="/storeframes/store.png"
                                            alt="Destaque" 
                                        />
                                        <img
                                            src="/storeframes/store2.png"
                                            alt="Destaque 2" 
                                        />
                                        <img 
                                            src="/storeframes/store3.png"
                                            alt="Destaque 3" 
                                        /> 
                                        <img 
                                            src="/storeframes/store4.png"
                                            alt="Destaque 4" 
                                        />
                                        <img 
                                            src="/storeframes/store5.png"
                                            alt="Destaque 5" 
                                        />
                                        <img 
                                            src="/storeframes/store6.png"
                                            alt="Destaque 6" 
                                        />
                                        <img 
                                            src="/storeframes/store7.png"
                                            alt="Destaque 7" 
                                        />
                                        <img 
                                            src="/storeframes/store8.png"
                                            alt="Destaque 8" 
                                        />
                                        <img 
                                            src="/storeframes/store9.png"
                                            alt="Destaque 9" 
                                        />
                                    </Carousel>
                                </div>

                                <div
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        padding: '10px',
                                    }}
                                >
                                    <Frame
                                        layout={{
                                            noSharpEdges: true
                                        }}
                                        style={{margin: '5px'}}
                                    >
                                        <img className={styles.image} src="/storeframes/storeframe.png" alt="Chang'e" />
                                    </Frame>
                                    <Frame
                                        layout={{
                                            noSharpEdges: true
                                        }}
                                        style={{margin: '5px'}}
                                    >
                                        <img className={styles.image} src="/storeframes/storeframe2.png" alt="Ah Puach" />
                                    </Frame>
                                    <Frame
                                        layout={{
                                            noSharpEdges: true
                                        }}
                                        style={{margin: '5px'}}
                                    >
                                        <img className={styles.image} src="/storeframes/storeframe3.png" alt="Sunna" />
                                    </Frame>
                                </div>
                            </Frame>
                        </div>
                      },{
                        id: 2,
                        title: "OFERTAS",
                        content: <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%'
                            }}
                        > 
                            <Frame 
                                style={{
                                    height: '100%',
                                    margin: '4px',
                                    justifyContent: 'space-evenly'
                                }}
                                layout={{
                                    noSharpEdges: true
                                }}
                            >
                                <div
                                    className={styles.weekSales}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <span className={styles.title}>
                                            OFERTAS SEMANAIS
                                        </span>
                                        <span className={styles.subtitle}>
                                            6 dias restantes
                                        </span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flex: 1
                                    }}>
                                        <Frame
                                            layout={{
                                                noSharpEdges: true
                                            }}
                                        >
                                            <img
                                                className={styles.image}
                                                src="/storeframes/storenormal.png"
                                                alt="Ofertas" 
                                            />
                                        </Frame>
                                        <Frame
                                            layout={{
                                                noSharpEdges: true
                                            }}
                                        >
                                            <img
                                                className={styles.image}
                                                src="/storeframes/storenormal2.png"
                                                alt="Ofertas 2" 
                                            />
                                        </Frame>
                                        <Frame
                                            layout={{
                                                noSharpEdges: true
                                            }}
                                        >
                                            <img
                                                className={styles.image}
                                                src="/storeframes/storenormal3.png"
                                                alt="Ofertas 3" 
                                            />
                                        </Frame>
                                    </div>
                                </div>

                                <div
                                    className={styles.dailyPackets}
                                >
                                    <span className={styles.title}>
                                        PACOTES DIÁRIOS 
                                    </span>
                                    <Frame
                                        layout={{
                                            noSharpEdges: true
                                        }}
                                        style={{margin: '10px'}}
                                    >
                                        <img
                                            className={styles.image}
                                            src="/storeframes/storenormal4.png"
                                            alt="Ofertas 4" 
                                        />
                                    </Frame>
                                    <Frame
                                        layout={{
                                            noSharpEdges: true
                                        }}
                                        style={{margin: '10px'}}
                                    >
                                        <img
                                            className={styles.image}
                                            src="/storeframes/storenormal5.png"
                                            alt="Ofertas 5" 
                                        />
                                    </Frame>
                                </div>

                            </Frame>
                        </div>
                      }
                    ]} 
                    startSelected={1}
                />
            </div>
        </div>
        </>
    )
}