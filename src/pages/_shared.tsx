import { BsGearFill, BsBellFill, BsGiftFill } from 'react-icons/bs';
import { FaExclamation } from 'react-icons/fa';
import { GiSwordsEmblem } from 'react-icons/gi';
import { GoMortarBoard } from 'react-icons/go';
import { HiUser, HiUsers } from 'react-icons/hi';
import Header from '../components/Header';
import Chat from '../components/Chat';
import Tooltip from '../components/Tooltip';
import styles from '../styles/shared.module.scss';
import { useRef } from 'react';
import { IRefModal } from '../components/Modal/interface';
import Modal from '../components/Modal';
import Button from '../components/Button/intex';

export default function Shared({
    children
}) {
   const modalConfig = useRef<IRefModal>(null);
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
                    <BsGearFill color="var(--secondary)" size={40} style={{marginBottom: '6px'}}
                        onClick={() => modalConfig.current?.openModal()}
                    />
                </Tooltip>
            </div>
        </div>
        <Modal
            ref={modalConfig}
            outsideClick={true}
            escKey={true}
            style={{boxShadow: '0 0 40px 10px var(--secondary)'}}
        >
            <div
                style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    padding: '20px'
                }}
            >
                <Button layout='secondary' style={{ margin: '5px', minWidth: '300px'}}>RETOMAR</Button>
                <Button layout='secondary' style={{ margin: '5px', minWidth: '300px'}}>CONFIGURAÇÕES</Button>
                <Button layout='secondary' style={{ margin: '5px', minWidth: '300px'}}>GUIAS</Button>
                <Button layout='secondary' style={{ margin: '5px', minWidth: '300px'}}>RESGATAR CÓDIGO</Button>
                <Button layout='secondary' style={{ margin: '5px', minWidth: '300px'}}>NOVIDADES</Button>
                <Button layout='secondary' style={{ margin: '5px', minWidth: '300px'}}>SAIR DO JOGO</Button>

            </div>
        </Modal>
    </div>
   ) 
}