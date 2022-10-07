import './Card.css';

function Card(props) {

  return (
    <div className="col-sm-3 d-flex flex-row justify-content-around">
        <img onClick={props.esEleccionCorrecta} className='eleccion' name={props.personaje.name} src={props.personaje.img}/>
    </div>
  );
}

export default Card;
