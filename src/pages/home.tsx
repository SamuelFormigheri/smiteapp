import { FaExclamation } from 'react-icons/fa';
import { BsGearFill, BsBellFill, BsGiftFill } from 'react-icons/bs';
import { GiSwordsEmblem } from 'react-icons/gi';
import { GoMortarBoard } from 'react-icons/go';
import { HiUser, HiUsers } from 'react-icons/hi';
import Frame from '../components/Frame';
import Header from '../components/Header';
import Title from '../components/Title';
import styles from '../styles/home.module.scss';
import FrameQuest from '../components/FrameQuest';
import Carousel from '../components/Carousel';
import Object3D from '../components/Object3D';
import Tooltip from '../components/Tooltip';

export default function Home() {
    return(
    <div className={styles.home}>
        <Header />
        <div className={styles.content}>
            <div className={styles.options}>
                <Title size="big">JOGAR</Title>
                <Title size="big">DEUSES</Title>
                <Title size="big">LOJA</Title>
                <Title>Passe de Batalha: Heróis Animais</Title>
                <Title>E-Sports e Transmissões Ao Vivo</Title>
                <Title>Garras da Tirania</Title>
                <Title>Cofre</Title>
            </div>
            <div className={styles.godPreview}>
                {/* <Object3D src="/bee.glb" type="glb" /> */}
            </div>
            <div className={styles.menu}>
                <Carousel 
                    width={400} 
                    height={208}
                    max= {11}
                    start= {1}
                    diamonds
                >
                    <img
                        src="/mistic-chest.png"
                        alt="Mystic Chest" 
                    />
                    <img
                        src="/distant-worlds-chest.png"
                        alt="Distant Worlds" 
                    />
                    <img 
                        src="/talons-of-tirany-event.png"
                        alt="Talons of Tirany" 
                    />
                    <img 
                        src="/groove-chest.png"
                        alt="Groove Chest" 
                    />
                    <img 
                        src="/talons-of-tirany.png"
                        alt="Talons of Tirany" 
                    />
                    <img 
                        src="/animal-heroes.png"
                        alt="Animal Heroes" 
                    />
                    <img 
                        src="/battle-pass-2021.png"
                        alt="Battle Pass 2021" 
                    />
                    <img 
                        src="/run-by-the-world-chest.png"
                        alt="Run by the World" 
                    />
                    <img 
                        src="/prime-gaming.png"
                        alt="Prime Gaming" 
                    />
                    <img 
                        src="/merchandising.png"
                        alt="Merchandising" 
                    />
                    <img 
                        src="/deep-chest.png"
                        alt="Deep" 
                    />
                </Carousel>
                <Frame style={{width: '400px'}}>
                    <img
                        src="/mothers-day.png"
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
        <div className={styles.footer}>
            <div className={styles.chat}>

            </div>

            <div className={styles.icons}>
                <Tooltip title="Missões">
                    <FaExclamation color="var(--secondary)" size={34} className={styles.svgPath} />
                </Tooltip>
                <Tooltip title="Centro de recompensas" style={{minWidth: '250px'}}>
                    <BsGiftFill color="var(--secondary)" size={40} />
                </Tooltip>
                <Tooltip title="Lista de amigos" style={{minWidth: '200px'}}>
                    <HiUsers color="var(--secondary)" size={40} />
                </Tooltip>
                <Tooltip title="O clã está atualmente indisponivel" style={{minWidth: '350px'}}>
                    <GiSwordsEmblem color="var(--secondary)" size={40} className={styles.svgPath} style={{opacity: '0.5'}}/>
                </Tooltip>
                <Tooltip title="Aprenda">
                    <GoMortarBoard color="var(--secondary)" size={40} />
                </Tooltip>
                <Tooltip title="Perfil">
                    <HiUser color="var(--secondary)" size={40} />
                </Tooltip>
                <Tooltip title="Notificações">
                    <BsBellFill color="var(--secondary)" size={34} />
                </Tooltip>
                <Tooltip title="Configurações">
                    <BsGearFill color="var(--secondary)" size={40} style={{marginBottom: '6px'}}/>
                </Tooltip>
            </div>
        </div>
    </div>
    )
}