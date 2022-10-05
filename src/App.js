import './App.css';
import { Route, useLocation } from 'wouter';

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

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
      <Route path="/juego"><Game></Game></Route>
    </div>
  );
}

export default App;
