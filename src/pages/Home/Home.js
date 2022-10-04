import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {

  return (
    <div id="home">
      <header className="App-header">
        <h1 className='star-wars-font title-star-wars'>Bienvenido al juego de las tarjetas de Star Wars</h1>
        <button type="button" className="btn star-wars-font star-wars-button">iniciar juego <FontAwesomeIcon icon={faArrowRight} className="arrow" /></button>
        
      </header>
    </div>
  );
}

export default Home;