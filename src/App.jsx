import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Developer from './components/Developer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer datos={{
            nombre: "Sebastián Ramírez",
            carrera: "Ingeniería Civil Informática",
            ciudad: "Talca",
            github: "https://github.com/sebastianramirezmunoz99/eva1appweb" 
          }} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;