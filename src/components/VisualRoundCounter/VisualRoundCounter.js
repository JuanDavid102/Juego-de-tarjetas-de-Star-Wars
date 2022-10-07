
import './VisualRoundCounter.css';

function VisualRoundCounter(props) {

    function muestraCirculos() {
        let circulos = [];
        let largoRespuestas = props.respuestas.length;
        for (let index = 0; index < largoRespuestas; index++) {
            //<span class="rounded-circle bg-success"></span> : <span class="rounded-circle bg-danger"></span> : <span class="rounded-circle bg-white"></span>
            (props.respuestas[index] === true ? circulos.push("success") : circulos.push("danger"))
        }
        for (let index = 0; index < (10 - largoRespuestas); index++) {
            circulos.push("white")
        }

        return circulos.map(muestraCirculo);
    }

    function muestraCirculo(color, indice) {
        return(
            <span key={indice} className={"rounded-circle circulo bg-" + color}></span>
        );
    }

  return (
    <div>
        {muestraCirculos()}
    </div>
  );
}

export default VisualRoundCounter;
