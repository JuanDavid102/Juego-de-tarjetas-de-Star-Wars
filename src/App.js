import './App.css';
import { Route, useLocation } from 'wouter';

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

function App() {

  const [localizacion, setLocalizacion] = useLocation();

  function irALocalizacion(localizacion) {
    if (localizacion != "/" + localizacion) {
      setLocalizacion("/" + localizacion);
    }
  }

  return (
    <div className="App container-fluid bg-stars">
      <Route path="/"><Home irALocalizacion={irALocalizacion} /></Route>
      <Route path="/juego"><Game irALocalizacion={irALocalizacion}></Game></Route>
    </div>
  );
}

export default App;
