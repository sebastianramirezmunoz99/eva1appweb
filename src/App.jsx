import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Developer from './components/Developer';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer />} />
          {/* El asterisco (*) atrapa cualquier ruta que no coincida con las anteriores */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;