import Dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import Frame from '../components/Frame';
import Title from '../components/Title';
import styles from '../styles/home.module.scss';
import FrameQuest from '../components/FrameQuest';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Diamond from '../components/Diamond';
import { useState } from 'react';

const Object3D = Dynamic(
    () => import('../components/Object3D'),
    { ssr: false }
);

export default function Home() {
    const [diamond, setDiamond] = useState<number>(0);

    return(
        <>
        <Head>
            <title>Home | Smite</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.options}>
                <Title size="big">
                    <Link href="/play">
                        <a>JOGAR</a>
                    </Link>
                </Title>
                <Title size="big">
                    <Link href="/gods">
                        <a>DEUSES</a>
                    </Link>
                </Title>
                <Title size="big">
                    <Link href="/store">
                        <a>LOJA</a>
                    </Link>
                </Title>
                <Title>Passe de Batalha: Heróis Animais</Title>
                <Title>E-Sports e Transmissões Ao Vivo</Title>
                <Title>Garras da Tirania</Title>
                <Title>Cofre</Title>
            </div>
            <div className={styles.godPreview}>

                <Object3D src="/gods3d/Plant.glb" alt="Mr. Plant" style={diamond !== 0 ? {display: 'none'} : {width: '100%', height: '100%', minWidth: '400px'}}/>
                <Card 
                    title="Mr. Plant"
                    text="Nova aparência de Jormungandr"
                    style={diamond !== 0 ? {display: 'none'} : {position: 'absolute', bottom: '20%'}}
                />

                <Object3D src="/gods3d/Troll.glb" alt="Troll Vamana" style={diamond !== 1 ? {display: 'none'} : {width: '100%', height: '50%', minWidth: '400px'}}/>
                <Card 
                    title="Vamana Troll"
                    text="Nova aparência de Vamana"
                    style={diamond !== 1 ? {display: 'none'} : {position: 'absolute', bottom: '20%'}}
                />

                <Object3D src="/gods3d/Merlin.glb" alt="Merlin HQ" style={diamond !== 2 ? {display: 'none'} : {width: '100%', height: '60%', minWidth: '400px'}}/>
                <Card 
                    title="Merlin HQ"
                    text="Nova aparência de Merlin"
                    style={diamond !== 2 ? {display: 'none'} : {position: 'absolute', bottom: '20%'}}
                />

                <Object3D src="/gods3d/Octopus.glb" alt="Polvo Malabaris" style={diamond !== 3 ? {display: 'none'} : {width: '100%', height: '100%', minWidth: '400px'}}/>
                <Card 
                    title="Polvo Malabaris"
                    text="Nova aparência de Cthulhu"
                    style={diamond !== 3 ? {display: 'none'} : {position: 'absolute', bottom: '20%'}}
                />

                <Object3D src="/gods3d/Dog.glb" alt="Dodge" style={diamond !== 4 ? {display: 'none'} : {width: '100%', height: '50%', minWidth: '400px'}}/>
                <Card 
                    title="Dodge"
                    text="Nova aparência de Ratatoskr"
                    style={diamond !== 4 ? {display: 'none'} : {position: 'absolute', bottom: '20%'}}
                />

                <div className={styles.diamondsGodPreview}>
                    <Diamond size={20} fill={diamond === 0 ? "var(--blue" : ""} onClick={() => setDiamond(0)} />
                    <Diamond size={20} fill={diamond === 1 ? "var(--blue" : ""} onClick={() => setDiamond(1)} />
                    <Diamond size={20} fill={diamond === 2 ? "var(--blue" : ""} onClick={() => setDiamond(2)} />
                    <Diamond size={20} fill={diamond === 3 ? "var(--blue" : ""} onClick={() => setDiamond(3)} />
                    <Diamond size={20} fill={diamond === 4 ? "var(--blue" : ""} onClick={() => setDiamond(4)} />
                </div>
            </div>
            <div className={styles.menu}>
                <Carousel 
                    width={400} 
                    height={208}
                    max= {11}
                    start= {1}
                    diamonds
                    frame={{
                        layout: {
                            noBorderRight: true
                        }
                    }}
                >
                    <img
                        src="/homeframes/mistic-chest.png"
                        alt="Mystic Chest" 
                    />
                    <img
                        src="/homeframes/distant-worlds-chest.png"
                        alt="Distant Worlds" 
                    />
                    <img 
                        src="/homeframes/talons-of-tirany-event.png"
                        alt="Talons of Tirany" 
                    />
                    <img 
                        src="/homeframes/groove-chest.png"
                        alt="Groove Chest" 
                    />
                    <img 
                        src="/homeframes/talons-of-tirany.png"
                        alt="Talons of Tirany" 
                    />
                    <img 
                        src="/homeframes/animal-heroes.png"
                        alt="Animal Heroes" 
                    />
                    <img 
                        src="/homeframes/battle-pass-2021.png"
                        alt="Battle Pass 2021" 
                    />
                    <img 
                        src="/homeframes/run-by-the-world-chest.png"
                        alt="Run by the World" 
                    />
                    <img 
                        src="/homeframes/prime-gaming.png"
                        alt="Prime Gaming" 
                    />
                    <img 
                        src="/homeframes/merchandising.png"
                        alt="Merchandising" 
                    />
                    <img 
                        src="/homeframes/deep-chest.png"
                        alt="Deep" 
                    />
                </Carousel>
                <Frame style={{width: '400px'}} layout={{
                    noBorderRight: true
                }}>
                    <img
                        src="/homeframes/mothers-day.png"
                        alt="Mothers Day" 
                        className={styles.frameImages}
                    />
                </Frame>
                <FrameQuest 
                    title="Passe de Batalha"
                    description="Acene para seu inimigo durante a partida em"
                    percentComplete={0}
                    points={500}
                />
                <FrameQuest 
                    title="Passe de Batalha"
                    description="Jogue 2 partidas."
                    percentComplete={50}
                    points={500}
                />
                <FrameQuest 
                    title="Passe de Batalha"
                    description='Diga três vezes "Você é demais" a um aliado'
                    percentComplete={66}
                    points={500}
                />
            </div>
        </div>
    </>
    )
}