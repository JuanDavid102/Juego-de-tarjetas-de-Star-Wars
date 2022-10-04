import './App.css';
import { Route, useLocation } from 'wouter';

import Home from './pages/Home/Home';

function App() {

  const [localizacion, setLocalizacion] = useLocation();

  function irAJuego() {
    if (localizacion != "/juego") {
      setLocalizacion("/juego");
    }
  }

  return (
    <div className="App container-fluid bg-stars">
      <Route path="/"><Home irAJuego={irAJuego} /></Route>
      <Route path="/juego"></Route>
    </div>
  );
}

export default App;
