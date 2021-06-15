import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { IRefModal } from '../components/Modal/interface';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import styles from '../styles/index.module.scss';
import { useLoad } from '../context/LoadContext';

export default function Home() {
  const modalRef = useRef<IRefModal>();
  const router = useRouter();
  const {loaded, toggleLoaded} = useLoad();

  useEffect(() => {
    if(loaded){
      router.push('home');
      return;
    }

    setTimeout(() => {
      modalRef.current.openModal();
      setTimeout(() => {
        toggleLoaded();
        router.push('home');
      },5000);
    }, 1500);
  },[]);

  return (
    <>
      <Head>
        <title>Carregando | Smite</title>
      </Head>
      <div className={styles.homePage}>
        <Modal ref={modalRef}>
          <div className={styles.modalBody}>
            <h4>ENTRAR</h4>
            <p>Aguardando informações...</p>
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}
