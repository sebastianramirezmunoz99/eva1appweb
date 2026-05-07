import styles from './Card.module.css';

const Card = ({ titulo, descripcion, imagen }) => {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{descripcion}</p>
      </div>
    </div>
  );
};

export default Card;