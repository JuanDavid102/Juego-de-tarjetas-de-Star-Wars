import './GameTitle.css';

function GameTitle(props) {

  return (
    <h1 className='star-wars-font title-star-wars'>{props.title}</h1>
  );
}

export default GameTitle;