import Hero from './Hero';
import PerroDelMes from './PerroDelMes';
import Card from './Card';
import logo from '../assets/logo.png'; 
import perrito2despues from '../assets/perrito2despues.jpeg'

const Home = () => {
  const serviciosDummy = [
    { id: 1, titulo: "Baño Completo", descripcion: "Shampoo hipoalergénico.", imagen: logo },
    { id: 2, titulo: "Corte de Raza", descripcion: "Estilistas expertos.", imagen: logo },
    { id: 3, titulo: "Spa Relajante", descripcion: "Masajes y aromaterapia.", imagen: logo }
  ];

  return (
    <div>
      {/* 1. Sección Hero (Banner principal) */}
      <Hero />

      <div style={{ padding: '0 2rem' }}>
        {/* 2. El valor agregado */}
        <PerroDelMes 
          nombre="Cachupín"
          resena="¡Quedó oliendo a vainilla y muy feliz!"
          imagen={perrito2despues} 
        />

        {/* 3. Las Cards de servicios en formato Flex */}
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Nuestros Servicios</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
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
    </div>
  );
};

export default Home;