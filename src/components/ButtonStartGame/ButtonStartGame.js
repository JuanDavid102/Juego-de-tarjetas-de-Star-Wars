import './ButtonStartGame.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ButtonStartGame(props) {

  function irAJuego() {
    props.irAJuego();
  }

  return (
    <button type="button" className="btn star-wars-font star-wars-button" onClick={irAJuego}>iniciar juego <FontAwesomeIcon icon={faArrowRight} className="arrow" /></button>
  );
}

export default ButtonStartGame;