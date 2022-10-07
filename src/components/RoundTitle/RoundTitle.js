import './RoundTitle.css';

function RoundTitle(props) {

  return (
    <div className='col-sm-6 ronda bg-info star-wars-font-third'>
        Ronda {props.rondaActual} de 10
    </div>
  );
}

export default RoundTitle;
