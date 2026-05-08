import MatrixRow from './MatrixRow';
import PerroDelMes from './PerroDelMes';
import Card from './Card';
import styles from './Home.module.css';
import perrito2despues from '../assets/perrito2despues.jpeg'
import maquina from '../assets/maquinaperro.jpg'
import perrito2varios from '../assets/perrito2varios.jpeg'
import perrito1despues from '../assets/perrito1despues.jpeg'
import perrito1antes from '../assets/perrito1antes.jpeg'
import cortaunas from '../assets/cortaunas.jpg'

const Home = () => {
  const serviciosDummy = [
    { id: 1, titulo: "Baño Premium", descripcion: "Limpieza profunda con aceites naturales.", imagen: perrito1antes },
    { id: 2, titulo: "Corte de Raza", descripcion: "Estilo profesional según el estándar.", imagen: perrito1despues },
    { id: 3, titulo: "Corte de Uñas", descripcion: "Seguridad y cuidado para sus patitas.", imagen: cortaunas }
  ];

  return (
    <main>
      {/* MATRIZ 2x2 */}
      <MatrixRow 
        titulo="Expertos en lo que hacemos"
        contenido="Calidad de atencion y cuidados a nuestros peludos usuarios"
        imagen={perrito2varios}
        esInvertido={true} 
      />

      <MatrixRow 
        titulo="Equipamiento especializado"
        contenido="Contamos con la tecnología apropiada para evitar el estrés de tu mejor amigo, silenciosa y confiable"
        imagen={maquina}
        esInvertido={false} 
      />

      {/*Perrito del mes*/}
      <div style={{ padding: '2rem' }}>
        <PerroDelMes 
          nombre="Cachupín"
          resena="¡Quedó oliendo a vainilla y muy feliz! Excelente servicio en Talca."
          imagen={perrito2despues} 
        />
      </div>

      {/*Tarjetas*/}
      <div className={styles.cardsContainer}>
        {serviciosDummy.map((ser) => (
          <Card 
            key={ser.id}
            titulo={ser.titulo}
            descripcion={ser.descripcion}
            imagen={ser.imagen}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;