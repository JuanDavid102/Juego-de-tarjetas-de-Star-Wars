import Button from '../Button/Button';
import './EndGame.css';

function EndGame(props) {

  return (
    <div className='row' id='endgame'>
        <h1 className='star-wars-font-third text-white'>
            Gracias por participar, tu puntuación ha sido de {props.puntuacion} puntos
        </h1>
        <Button largoTexto={180} localizacion="" buttonText="volver a inicio" irALocalizacion={props.irALocalizacion} />
    </div>
  );
}

export default EndGame;
