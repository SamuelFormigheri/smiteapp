import { BsGearFill, BsBellFill, BsGiftFill } from 'react-icons/bs';
import { FaExclamation } from 'react-icons/fa';
import { GiSwordsEmblem } from 'react-icons/gi';
import { GoMortarBoard } from 'react-icons/go';
import { HiUser, HiUsers } from 'react-icons/hi';
import Header from '../components/Header';
import Chat from '../components/Chat';
import Tooltip from '../components/Tooltip';
import styles from '../styles/shared.module.scss';
import React, { useRef } from 'react';
import { IRefModal } from '../components/Modal/interface';
import Modal from '../components/Modal';
import Button from '../components/Button/intex';
import Tabs from '../components/Tabs';
import Frame from '../components/Frame';
import TitleSecondary from '../components/TitleSecondary';
import CardNotification from '../components/CardNotification';

export default function Shared({
    children
}) {
   const modalConfig = useRef<IRefModal>(null);
   const modalNotifications = useRef<IRefModal>(null);
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
                    <BsBellFill color="var(--secondary)" size={34} 
                        onClick={() => modalNotifications.current?.openModal()}
                    />
                </Tooltip>
                <Tooltip title="Configurações">
                    <BsGearFill color="var(--secondary)" size={40} style={{marginBottom: '6px'}}
                        onClick={() => modalConfig.current?.openModal()}
                    />
                </Tooltip>
            </div>
        </div>
        {/* Modal Config */}
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
        {/* Modal Notification */}
        <Modal
            ref={modalNotifications}
            outsideClick={true}
            escKey={true}
            style={{boxShadow: '0 0 40px 10px #000'}}
        >
            <div
                style={{ 
                    display: 'flex', 
                    width: '90vw',
                    height: '90vh'
                }}
            >
                <Tabs 
                    tabs={[{
                        id: 1,
                        title: "NOTIFICAÇÕES",
                        content: <>
                            
                        </>
                    },
                    {
                        id: 2,
                        title: "DESTRAVADOS",
                        content: <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            padding: '10px'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0 0 5px 0',
                                borderBottom: '1px solid var(--secondary)'
                            }}>
                                <span style={{width: "300px"}}>
                                    ITEM
                                </span>
                                <span style={{width: "300px"}}>
                                    DISPONÍVEL EM
                                </span>
                                <Button
                                    layout='yellow'
                                    style={{padding: '0 30px'}}
                                >
                                    LIMPAR TUDO
                                </Button>
                            </div>
                            {/* NOTIFICATION */}
                            <div
                                style={{
                                    overflowY: 'auto',
                                    maxHeight: '750px',
                                    padding: '10px'
                                }}
                            >
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 7"
                                    }}
                                    item={{
                                        title: "35 GEMAS",
                                        subtitle: "Gema"
                                    }}
                                    imageSrc="/gem-notification.png"
                                />
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 6"
                                    }}
                                    item={{
                                        title: "15 GEMAS",
                                        subtitle: "Gema"
                                    }}
                                    imageSrc="/gem-notification.png"
                                />
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 5"
                                    }}
                                    item={{
                                        title: "1000 FAVOR",
                                        subtitle: "Moeda"
                                    }}
                                    imageSrc="/favor-notification.png"
                                />
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 4"
                                    }}
                                    item={{
                                        title: "500 FAVOR",
                                        subtitle: "Moeda"
                                    }}
                                    imageSrc="/favor-notification.png"
                                />
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 3"
                                    }}
                                    item={{
                                        title: "250 FAVOR",
                                        subtitle: "Moeda"
                                    }}
                                    imageSrc="/favor-notification.png"
                                />
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 2"
                                    }}
                                    item={{
                                        title: "125 FAVOR",
                                        subtitle: "Moeda"
                                    }}
                                    imageSrc="/favor-notification.png"
                                />
                                <CardNotification 
                                    availableIn={{
                                        title: "PREMIAÇÃO DIÁRIA",
                                        subtitle: "Dia 1"
                                    }}
                                    item={{
                                        title: "75 FAVOR",
                                        subtitle: "Moeda"
                                    }}
                                    imageSrc="/favor-notification.png"
                                />
                            </div>
                        </div>
                    },
                    {
                        id: 3,
                        title: "CLÃ",
                        content: <>
                            
                        </>
                    },
                    {
                        id: 4,
                        title: "MÉRITOS",
                        content: <>
                            
                        </>
                    },
                    {
                        id: 5,
                        title: "GRUPO",
                        content: <>
                            
                        </>
                    },
                    {
                        id: 6,
                        title: "AMIGOS",
                        content: <>
                            
                        </>
                    }
                    ]}
                    startSelected={2}
                />

            </div>
        </Modal>
    </div>
   ) 
}