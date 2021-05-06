import Header from '../components/Header';
import Title from '../components/Title';
import styles from '../styles/home.module.scss';

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

            </div>
            <div className={styles.menu}>

            </div>
        </div>
        <div className={styles.footer}>

        </div>
    </div>
    )
}