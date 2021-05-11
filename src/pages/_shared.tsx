import { BsGearFill, BsBellFill, BsGiftFill } from 'react-icons/bs';
import { FaExclamation } from 'react-icons/fa';
import { GiSwordsEmblem } from 'react-icons/gi';
import { GoMortarBoard } from 'react-icons/go';
import { HiUser, HiUsers } from 'react-icons/hi';
import Header from '../components/Header';
import Chat from '../components/Chat';
import Tooltip from '../components/Tooltip';
import styles from '../styles/shared.module.scss';

export default function Shared({
    children
}) {
   return (
    <div className={styles.home}>
        <Header style={{background: 'rgba(0, 0, 0, 0.125)'}} />
        <div className={styles.content}>
            {children}
        </div>
        <div className={styles.footer}>
            <Chat />

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