import PunctuationTitle from '../PunctuationTitle/PunctuationTitle';
import RoundTitle from '../RoundTitle/RoundTitle';
import './BoxTitleHeader.css';

function BoxTitleHeader(props) {

  return (
    <div className='row mb-3'>
        <RoundTitle rondaActual={props.rondaActual}></RoundTitle>
        <PunctuationTitle puntuacion={props.puntuacion}></PunctuationTitle>
    </div>
  );
}

export default BoxTitleHeader;
