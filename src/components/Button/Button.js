import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Button(props) {
  let id = null;

  function irALocalizacion(event) {
    props.irALocalizacion(event.target.attributes.localizacion.value)
  }

  function alargarCuadro(event) { 
    let pos = props.largoTexto;
    clearInterval(id);
    id = setInterval(frame, 1/60);
    function frame() {
      if (pos == props.largoTexto + 20) {
        clearInterval(id);
      } else {
        pos++;
        event.target.style.width = pos + "px"; 
      }
    }
  }

  function volverNormal(event) {
    event.target.style.width = props.largoTexto + "px";
  }

  return (
    <button onMouseOver={alargarCuadro} onMouseOut={volverNormal} style={{width: props.largoTexto + "px"}} type="button" className="btn star-wars-font star-wars-button" localizacion={props.localizacion} onClick={irALocalizacion}>{props.buttonText} <FontAwesomeIcon icon={faArrowRight} className="arrow" /></button>
  );
}

export default Button;