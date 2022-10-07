import './CorrectElectionName.css';

function CorrectElectionName(props) {

  return (
    <div className='row justify-content-center mt-5'>
        <h1 id='ganador' className='col-sm-6 star-wars-font-secundary bg-secondary px-4 pb-2 rounded mt-12'>{props.elegido}</h1>
    </div>
  );
}

export default CorrectElectionName;
