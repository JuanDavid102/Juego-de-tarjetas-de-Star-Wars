import { useEffect, useState } from 'react';
import BoxTitleHeader from '../../components/BoxTitleHeader/BoxTitleHeader';
import CardListNameWin from '../../components/CardListNameWin/CardListNameWin';
import EndGame from '../../components/EndGame/EndGame';
import VisualRoundCounter from '../../components/VisualRoundCounter/VisualRoundCounter';
// import CardListNameWin from '../../components/CardListNameWin/CardListNameWin';

import './Game.css';


function Game(props ) {
    // Entre ronda y ronda poner un tiempo y una pantalla en ¿blanco? indicando puntuación y ronda actual. usar z-index
    const [personajesElegidos, setPersonajesElegidos] = useState([]);
    const [rondaActual, setRondaActual] = useState(1);
    const [puntuacion, setPuntuacion] = useState(0);
    const [personajeGanador, setPersonajeGanador] = useState([1]);
    const [personajesGanadoresAnteriores, setPersonajesGanadoresAnteriores] = useState([]);
    const [cargado, setCargado] = useState(false);
    const [respuestas, setRespuestas] = useState([]);
    let personajesGanadoresAnterioresAux = [];

    function obtenerPersonajes() {
        
        let personajesElegidosAux = [];
        let contador = 0;
        while(contador !== 4){
            let personajeElegido = Math.floor(Math.random()*40);
            let personajeUsado = false;
            
            for (let index = 0; index < personajesElegidosAux.length; index++) {
                if (personajeElegido == personajesElegidosAux[index]) {
                    personajeUsado = true;
                }
            }
            for (let index = 0; index < personajesGanadoresAnteriores.length; index++) {
                if (personajeElegido == personajesGanadoresAnteriores[index]) {
                    personajeUsado = true;
                }
            }
            for (let index = 0; index < personajesGanadoresAnterioresAux.length; index++) {
                if (personajeElegido == personajesGanadoresAnterioresAux[index]) {
                    personajeUsado = true;
                }
            }
            if (!personajeUsado){
                contador++;
                personajesElegidosAux.push(personajeElegido);
            }
        }
        setPersonajesElegidos(personajesElegidosAux);
        setCargado(true);
        obtenerGanador(personajesElegidosAux);
    }

    function obtenerGanador(personajesElegidos) {
        let posicionPersonaje = Math.floor(Math.random()*4);
        setPersonajeGanador(personajesElegidos[posicionPersonaje]);
        setPersonajesGanadoresAnteriores(personajesGanadoresAnteriores => [...personajesGanadoresAnteriores, personajesElegidos[posicionPersonaje]])
        personajesGanadoresAnterioresAux.push(personajesElegidos[posicionPersonaje]);
    }
    
    function esEleccionCorrecta(event) {
        let ganador = document.getElementById("ganador");
        setRondaActual(rondaActual + 1);

        if(ganador.textContent == event.target.name){
            setPuntuacion(puntuacion + 1)
            setRespuestas(respuestas => [...respuestas, true])
            muestraMensajeCorrecto()
        }else{
            setRespuestas(respuestas => [...respuestas, false])
            muestraMensajeFallido()
        }

        obtenerPersonajes();
        transicion()
    }

    function transicion() {
        let id = null;
        let elem = document.createElement("h1");
        elem.classList.add("intermedio");
        elem.classList.add("star-wars-font");
        elem.classList.add("bg-stars");
        let textNode = document.createTextNode("De ronda " + rondaActual + " a " + (rondaActual + 1));
        elem.appendChild(textNode);elem.appendChild(textNode);
        console.log(elem.style)
        document.getElementsByClassName("inGame")[0].appendChild(elem);
        let pos = 10;
        let contador = 0;
        clearInterval(id);
        id = setInterval(crearPanel, 1);
        function crearPanel() {
            if (pos == 25) {
                clearInterval(id);
                contador = pos;
                id = setInterval(ponerTextoEnPanel, 3000);
                elem.style.color = "white";
            } else {
                pos++; 
                elem.style.width = pos*4 + "%"; 
                elem.style.height = pos*4 + "%";
                elem.style.opacity = pos/14;
            }
        }

        function ponerTextoEnPanel() {
            clearInterval(id);
            id = setInterval(reducirPanel, 1);
        }
        
        function reducirPanel(){
            if (contador == 0) {
                clearInterval(id);
                id = setInterval(eliminarPanel, 3000);
                elem.style.color = "white";
            } else {
                contador--; 
                elem.style.width = contador*4 + "%"; 
                elem.style.height = contador*4 + "%";
                elem.style.opacity = contador/14;
            }
        }

        function eliminarPanel(){
            clearInterval(id);
            document.getElementsByClassName("inGame")[0].removeChild(elem);
        }
        
      }

    function eliminarPadre(event) {
        document.getElementById("mensaje").removeChild(event.target.parentNode);
    }
    function muestraMensajeCorrecto() {
        document.getElementById("mensaje").innerHTML = '<span class="alert alert-success alert-dismissible fade show"><button type="button" id="cerrar" data-dismiss="alert">&times;</button>Has acertado el personaje</span>'
        document.getElementById("mensaje").querySelector("button#cerrar").onclick = eliminarPadre;
    }
    function muestraMensajeFallido() {
        document.getElementById("mensaje").innerHTML = '<span class="alert alert-danger alert-dismissible fade show"><button type="button" id="cerrar" data-dismiss="alert">&times;</button>Has fallado el personaje</span>'
        document.getElementById("mensaje").querySelector("button#cerrar").onclick = eliminarPadre;
    }

    useEffect(obtenerPersonajes, []);

    return (
        <div id="game">
            {rondaActual <= 10 ? 
                <div className='inGame'> 
                    <BoxTitleHeader rondaActual={rondaActual} puntuacion={puntuacion}></BoxTitleHeader>
                    <div id='mensaje'></div>
                    <CardListNameWin cargado={cargado} esEleccionCorrecta={esEleccionCorrecta} personajesElegidos={personajesElegidos} elegido={personajeGanador}></CardListNameWin> 
                    <VisualRoundCounter respuestas={respuestas}></VisualRoundCounter>
                </div> : 
                <EndGame puntuacion={puntuacion} irALocalizacion={props.irALocalizacion}></EndGame>
            }
        </div>
    );
}

export default Game;