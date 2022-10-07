import { useEffect, useState } from 'react';
import BoxTitleHeader from '../../components/BoxTitleHeader/BoxTitleHeader';
import CardListNameWin from '../../components/CardListNameWin/CardListNameWin';
import EndGame from '../../components/EndGame/EndGame';
// import CardListNameWin from '../../components/CardListNameWin/CardListNameWin';

import './Game.css';


function Game() {
    // Entre ronda y ronda poner un tiempo y una pantalla en ¿blanco? indicando puntuación y ronda actual. usar z-index
    const [personajesElegidos, setPersonajesElegidos] = useState([]);
    const [rondaActual, setRondaActual] = useState(1);
    const [puntuacion, setPuntuacion] = useState(0);
    const [personajeGanador, setPersonajeGanador] = useState([1]);
    const [personajesGanadoresAnteriores, setPersonajesGanadoresAnteriores] = useState([]);
    const [cargado, setCargado] = useState(false);
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
            muestraMensajeCorrecto()
        }else{
            muestraMensajeFallido()
        }

        obtenerPersonajes();
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
                </div> : 
                <EndGame puntuacion={puntuacion}></EndGame>
            }
        </div>
    );
}

export default Game;