import './Home.css';

import GameTitle from '../../components/GameTitle/GameTitle';
import Button from '../../components/Button/Button';

function Home(props) {

  return (
    <div id="home">
      <header className="App-header">
        <GameTitle title="Bienvenido al juego de las tarjetas de Star Wars" />
        <Button largoTexto={150} localizacion="juego" buttonText="iniciar juego" irALocalizacion={props.irALocalizacion} />
      </header>
    </div>
  );
}

export default Home;