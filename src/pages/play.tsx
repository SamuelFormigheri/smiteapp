import { useEffect, useMemo, useState } from 'react';
import { GiLaurelCrown } from 'react-icons/gi';
import { IoMdTrophy } from 'react-icons/io';
import Button from '../components/Button/intex';
import CardList from '../components/CardList';
import CardMode from '../components/CardMode';
import Frame from '../components/Frame';
import Hidden from '../components/Hidden';
import Tabs from '../components/Tabs';
import TitleSecondary from '../components/TitleSecondary';
import { useHeader } from '../context/HeaderContext';
import styles from '../styles/play.module.scss';

type IModes = "CONQUISTA" | "ARENA" | "ASSALTO" | "JUSTA" | "CERCO" | "OMNIPOTENT DRAFT" | "COLISÃO";

export default function Play(){
    const { showBackArrow } = useHeader();
    const modes = [{
        title: "CONQUISTA",
        src: "/modes/conquest.png",
        numberOfPlayers: "5X5",
        descriptionTitle: "Conquista (sozinho a até grupos de 5)",
        description: "Esse modo traz um mapa com três rotas cercadas por uma área de selva. Sua base, defendida por três fênix e um titã, fica em uma das pontas. A base do inimigo fica na outra ponta. O tempo médio de partida gira em torno de 25 minutos."
    },{
        title: "ARENA",
        src: "/modes/arena.png",
        numberOfPlayers: "5X5",
        descriptionTitle: "Arena (sozinho a até grupos de 5)",
        description: "O modo Arena é um combate completamente franco, onde o objetivo é derrotar os jogadores inimigos e seus lacaios até reduzir a contagem de pontos inimigos para 0. A média de tempo de partida é cerca de 15 minutos."
    },{
        title: "ASSALTO",
        src: "/modes/assault.png",
        numberOfPlayers: "5X5",
        descriptionTitle: "Assalto (sozinho a até grupos de 5)",
        description: "Esse modo é parecido com o modo Conquista normal, mas só tem uma rota e não tem selva. Todos os deuses são escolhidos aleatoriamente. Tempo de jogo é de aproximadamente 20 minutos."
    },{
        title: "CERCO",
        src: "/modes/siege.png",
        numberOfPlayers: "4X4",
        descriptionTitle: "Cerco (sozinho a até grupos de 4)",
        description: "Modo de jogo parecido com o Conquista, mas com apenas duas rotas em um mapa pequeno. Mate jogadores e lacaios de selva para conseguir jaganatas de cerco que ajudam a avançar nas rotas mais rapidamente. O tempo médio de partida é de 20 minutos."
    },{
        title: "COLISÃO",
        src: "/modes/clash.png",
        numberOfPlayers: "5X5",
        descriptionTitle: "Colisão (sozinho a até grupos de 5)",
        description: "Esse modo traz um mapa com duas rotas com uma área de selva e um campo no centro. Sua base, defendida por duas fênix e um titâ, fica em uma das pontas. A base do inimigo fica na outra ponta. O tempo médio de partida gira em torno de 15 minutos."
    },{
        title: "JUSTA",
        src: "/modes/joust.png",
        numberOfPlayers: "3X3",
        descriptionTitle: "Justa (sozinho a até grupos de 3)",
        description: "Esse modo traz um mapa com uma rota e uma selva adjacente. Sua base, defendida por uma fênix e um titã, fica em uma das pontas. A base do inimigo fica na outra ponta. O tempo médio de partida gira em torno de 15 minutos."
    },{
        title: "OMNIPOTENT DRAFT",
        src: "/modes/motd.png",
        numberOfPlayers: "",
        descriptionTitle: "",
        description: "Escolha o melhor time que puder neste confronto poderoso. Mapa: Conquista. Iniciando com máximo de redução de intervalo de 80%. Mana infinita. Todos os deuses. Seleção com ban."
    }];
    const [selectedMode, setSelectedMode] = useState<IModes>("CONQUISTA");
    const [mode, setMode] = useState(modes[0]);

    useEffect(() => {
        showBackArrow();
    },[]);

    useEffect(() => {
        setMode(modes.find(x => x.title === selectedMode));
    }, [selectedMode]);
 
    const NormalTabFrameMode = useMemo(() => {
        return (
            <>
               <div className={styles.square}>
                   <img 
                       src={mode.src}
                       alt={mode.title}
                   />
               </div>
               <TitleSecondary>
                   {mode.title}
               </TitleSecondary>
               <Hidden xl lg sm md xs>
                    <TitleSecondary type="subtitle">
                        {mode.numberOfPlayers}
                    </TitleSecondary>
               </Hidden>
               <span className={styles.text}>
                   {mode.descriptionTitle}
               </span>
               <span className={styles.text}>
                   {mode.description}
               </span>
                <Hidden xl lg sm md xs>
                    <TitleSecondary type="subtitle">
                        DISPONÍVEL PARA
                    </TitleSecondary>
                </Hidden>

               <div className={styles.availableFor}>
                   <div style={{display: 'flex', alignItems: 'center'}}>
                        <IoMdTrophy  size={30} color="var(--yellow)"/>
                        <span className={styles.text}>
                            Mérito
                        </span>
                   </div>
                   <div style={{display: 'flex', alignItems: 'center'}}>
                        <GiLaurelCrown size={30} color="var(--green)"/>
                        <span className={styles.text}>
                            Primeira Vitória do Dia
                        </span>
                   </div>
               </div>

               <div className={styles.buttonContainer}>
                   <Button style={{padding: '4px 30%'}}>
                       Jogar
                   </Button>
               </div>
            </>
        )
    },[mode]);

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
                                        src: "/modes/arena.png",
                                        alt: "Arena"
                                    }}
                                    mode="ARENA"
                                    details="NORMAL"
                                    playerCount="5X5"
                                    description="Uma batalha eletrizante em uma arena aberta"
                                />
                                <CardMode 
                                    img={{
                                        src: "/modes/joust.png",
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
                                        src: "/modes/assault.png",
                                        alt: "Assalto"
                                    }}
                                    mode="ASSALTO"
                                    details="NORMAL"
                                    playerCount="5X5"
                                    description="Deuses escolhidos aleatoriamente, um mapa com uma rota. Lute até a morte!"
                                />
                                <CardMode 
                                    img={{
                                        src: "/modes/siege.png",
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
                                layout={{
                                    noSharpEdges: true
                                }}
                            >
                                <CardList 
                                    title="CONQUISTA"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("CONQUISTA")}
                                    selected={selectedMode === "CONQUISTA"}
                                />
                                <CardList 
                                    title="ARENA"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("ARENA")}
                                    selected={selectedMode === "ARENA"}
                                />
                                <CardList 
                                    title="COLISÃO"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("COLISÃO")}
                                    selected={selectedMode === "COLISÃO"}
                                />
                                <CardList 
                                    title="JUSTA"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("JUSTA")}
                                    selected={selectedMode === "JUSTA"}
                                />
                                <CardList 
                                    title="ASSALTO"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("ASSALTO")}
                                    selected={selectedMode === "ASSALTO"}
                                />
                                <CardList 
                                    title="CERCO"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("CERCO")}
                                    selected={selectedMode === "CERCO"}
                                />
                                <CardList 
                                    title="OMNIPOTENT DRAFT"
                                    firstWinOfDay
                                    onClick={() => setSelectedMode("OMNIPOTENT DRAFT")}
                                    selected={selectedMode === "OMNIPOTENT DRAFT"}
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
                               {NormalTabFrameMode}
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