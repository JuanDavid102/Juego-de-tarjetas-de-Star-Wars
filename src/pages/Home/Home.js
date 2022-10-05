import './Home.css';

import GameTitle from '../../components/GameTitle/GameTitle';
import ButtonStartGame from '../../components/ButtonStartGame/ButtonStartGame';

function Home(props) {

  return (
    <div id="home">
      <header className="App-header">
        <GameTitle title="Bienvenido al juego de las tarjetas de Star Wars" />
        <ButtonStartGame irAJuego={props.irAJuego} />
      </header>
    </div>
  );
}

export default Home;