import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Peluquería Canina" className={styles.logo} />
        <span className={styles.brandName}>Peluquería Canina</span>
      </div>
      
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Inicio</Link>
        <Link to="/developer" className={styles.link}>Desarrollador</Link>
      </nav>
    </header>
  );
};

export default Header;