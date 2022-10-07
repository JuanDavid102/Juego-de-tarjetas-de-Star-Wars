import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Button(props) {

  function irALocalizacion(event) {
    props.irALocalizacion(event.target.attributes.localizacion.value)
  }

  return (
    <button type="button" className="btn star-wars-font star-wars-button" localizacion={props.localizacion} onClick={irALocalizacion}>{props.buttonText} <FontAwesomeIcon icon={faArrowRight} className="arrow" /></button>
  );
}

export default Button;