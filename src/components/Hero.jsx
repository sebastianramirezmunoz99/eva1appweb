import styles from './Hero.module.css';
import perrito2varios from '../assets/perrito2varios.jpeg';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>El mejor estilo para tu mascota</h1>
        <p className={styles.description}>
          En nuestra peluquería canina ofrecemos cortes de raza, baños relajantes y tratamientos de spa para que tu perrito luzca y se sienta espectacular.
        </p>
        <button className={styles.button}>Conoce Más</button>
      </div>
      
      <div className={styles.imageSection}>
        <img src={perrito2varios} alt="Peluquería Canina" className={styles.heroImage} />
        {/* Simulamos los puntitos debajo de la imagen que tiene el prototipo */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#007bff', borderRadius: '50%' }}></span>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#ccc', borderRadius: '50%' }}></span>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#ccc', borderRadius: '50%' }}></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;