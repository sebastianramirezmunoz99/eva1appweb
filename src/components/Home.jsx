import Card from './Card';
import PerroDelMes from './PerroDelMes';
import logo from '../assets/logo.png';
import perrito2despues from '../assets/perrito2despues.jpeg'

const Home = () => {
  const serviciosDummy = [
    { id: 1, titulo: "Baño Completo", descripcion: "Shampoo hipoalergénico y secado sin estrés.", imagen: logo },
    { id: 2, titulo: "Corte de Raza", descripcion: "Estilistas expertos en los estándares de cada raza.", imagen: logo },
    { id: 3, titulo: "Spa Relajante", descripcion: "Masajes y aromaterapia para perritos nerviosos.", imagen: logo },
    { id: 4, titulo: "Corte de Uñas", descripcion: "Rápido, seguro y sin dolor para tu mascota.", imagen: logo }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      
      {/* Componente que recibe datos mediante props */}
      <PerroDelMes 
        nombre="Cachupín"
        resena="Antes le tenía terror al agua, pero aquí lo tratan con tanta paciencia que ahora mueve la cola cuando llegamos. ¡Quedó oliendo a vainilla!"
        imagen={perrito2despues}
        />

      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Nuestros Servicios</h2>
      
      {/* Contenedor Flex para las Cards */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {serviciosDummy.map((servicio) => (
          <Card 
            key={servicio.id}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            imagen={servicio.imagen}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;