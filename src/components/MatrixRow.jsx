import styles from './MatrixRow.module.css';

const MatrixRow = ({ titulo, contenido, imagen, esInvertido }) => {
  return (
    <section className={`${styles.row} ${esInvertido ? styles.reverse : ''}`}>
      <div className={styles.textSection}>
        <h2 style={{ fontSize: '2.2rem' }}>{titulo}</h2>
        <p style={{ color: '#666', lineHeight: '1.6' }}>{contenido}</p>
        <button className={styles.button}>Conoce Más</button>
      </div>
      <div className={styles.imageSection}>
        <img src={imagen} alt={titulo} className={styles.image} />
      </div>
    </section>
  );
};

export default MatrixRow;