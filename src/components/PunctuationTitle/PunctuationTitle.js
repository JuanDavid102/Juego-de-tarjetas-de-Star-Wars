import './PunctuationTitle.css';

function PunctuationTitle(props) {

  return (
    <div className='col-sm-6 puntuacion bg-primary star-wars-font-third'>
        Puntuacion: {props.puntuacion} de 10
    </div>
  );
}

export default PunctuationTitle;
