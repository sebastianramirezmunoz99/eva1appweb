import styles from './PerroDelMes.module.css';

const PerroDelMes = ({ nombre, resena, imagen }) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.fotoContenedor}>
        <img src={imagen} alt={`Foto de ${nombre}`} className={styles.foto} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.titulo}> Nuestro Cliente del Mes: {nombre}</h2>
        <p className={styles.resena}>"{resena}"</p>
      </div>
    </div>
  );
};

export default PerroDelMes;