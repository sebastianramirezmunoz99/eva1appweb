import styles from './Developer.module.css'; 
import fotoPerfil from '../assets/developer.jpg';

const Developer = ({ datos }) => {
  return (
    <section className={styles.container}>
      <div className={styles.profileCard}>
        <img src={fotoPerfil} alt={datos.nombre} className={styles.image} />
        <div className={styles.info}>
          <h1>{datos.nombre}</h1>
          <p><strong>Carrera:</strong> {datos.carrera}</p>
          <p><strong>Ciudad:</strong> {datos.ciudad}</p>
          <p>
            <strong>GitHub:</strong> 
            <a href={datos.github} target="_blank" rel="noreferrer" className={styles.link}> Ver Repositorio</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Developer;