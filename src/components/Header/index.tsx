import Navigation from "../../widgets/Navigation";
import {DownOutlined} from "@ant-design/icons"
import Background from '../../assets/Images/bg.svg'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Background} alt="bg" className={styles.header__background}/>
            <div className={styles.header__inner}>
                <Navigation/>
                <h1>СК «ОЛИМП»</h1>
                <h2>Гарантия качества и вашего спокойствия</h2>
                <button className={styles.calculate__button}>Рассчитать стоймость</button>
                <a href="#about" className={styles.down__button}>
                    <DownOutlined/>
                </a>
            </div>
        </header>
    );
};

export default Header;