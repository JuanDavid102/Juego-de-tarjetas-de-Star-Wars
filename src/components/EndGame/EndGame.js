import Button from '../Button/Button';
import './EndGame.css';

function EndGame(props) {

  return (
    <div className='row' id='endgame'>
        <h1 className='star-wars-font-third text-white'>
            Gracias por participar, tu puntuación ha sido de {props.puntuacion} sobre 10
        </h1>
        <Button localizacion="" buttonText="volver a inicio" irALocalizacion={props.irALocalizacion} />
    </div>
  );
}

export default EndGame;
