import { useEffect } from 'react';
import './Game.css';


function Game() {
  
    let rondaActual = 0; // Entre ronda y ronda poner un tiempo y una pantalla en ¿blanco? indicando puntuación y ronda actual. usar z-index
    let puntuacion = 0;
    let personajesElegidos = [];
    let personajeGanador;
    let personajesGanadoresAnteriores = [];

    // http://drive.google.com/uc?export=view&id=FILEID -- recibir desde google drive
    const personajes = [{name: "Padmé Amidala", img: "http://drive.google.com/uc?export=view&id=1VdR8n1HB8Cc5e0NKAKNEpL6lL-hAATGG"}, {name: "Darth Maul", img: "http://drive.google.com/uc?export=view&id=1uejA6sbDN8xE95T2DmZjEVeAXoBVLZRZ"}, {name: "Obi-Wan Kenobi", img: "http://drive.google.com/uc?export=view&id=1cF4dpEG3qf1iRdUnPKMTSLT2TWVBV9hA"}, 
                        {name: "Anakin SkyWalker", img: "http://drive.google.com/uc?export=view&id=1VIbrx9__kGxTDx4sOIqLO7Y0qflaDx-Z"}, {name: "Qui-Gon Jinn", img: "http://drive.google.com/uc?export=view&id=1rUSd_Fz9akU0lCuKcIXEcNYUaJABCZ2R"}, {name: "Jar Jar Binks", img: "http://drive.google.com/uc?export=view&id=1A8q599C3pHtpc-ma4OpD1uzveutJ7zEE"}, 
                        {name: "Yoda", img: "http://drive.google.com/uc?export=view&id=14EccBQMak3IV685eObGC0SSSe5L5mpP6"}, {name: "Mace Windu", img: "http://drive.google.com/uc?export=view&id=17k4r_S0wCCgCquaiMWY_dTW6TPhmjQnY"}, {name: "C3PO", img: "http://drive.google.com/uc?export=view&id=1VyWKxj3GqyIWQWdU42wCgNyVNiROfdr3"}, 
                        {name: "R2D2", img: "http://drive.google.com/uc?export=view&id=1HydW-NwStvlArUThoY4iHWRKRN7n8JoP"}, {name: "Jango Fett", img: "http://drive.google.com/uc?export=view&id=1WrZZWVMtqizquNnyV4kmRLecx6sLq_e7"}, {name: "Boba Fett", img: "http://drive.google.com/uc?export=view&id=1Ilr2uQyoRAsz7N8DmW5Ja5wT2wkxS8CC"}, 
                        {name: "Taun We", img: "http://drive.google.com/uc?export=view&id=1tEv6BaqlOA7Sn97JQZQzU_JFVw7Wljwm"}, {name: "Clon", img: "http://drive.google.com/uc?export=view&id=1uMU1Rj8hchNdWJGj1hIixAA8IvHw3Kpc"}, {name: "Conde Dooku", img: "http://drive.google.com/uc?export=view&id=1nE0ybgyEP8ejBmtKvE5Wm87tmd4k3On1"}, 
                        {name: "Grievous", img: "http://drive.google.com/uc?export=view&id=1ZHXAyKH8XdkKNrigYQgjaX9nsmPi_iVM"}, {name: "Luke SkyWalker", img: "http://drive.google.com/uc?export=view&id=1zQ1wEKR2Knyi_YIiZ3UE9k1dUTxtJEXt"}, {name: "Han Solo", img: "http://drive.google.com/uc?export=view&id=1K-SgmnJoIYrW17gVxU5vbv2loaQnAxKK"}, 
                        {name: "Leia Organa", img: "http://drive.google.com/uc?export=view&id=15lRHIRz_njWTV1qAR9kXi5I18jroyIIo"}, {name: "Chewbacca", img: "http://drive.google.com/uc?export=view&id=1qBjbOmbEw9n3-BVaDJuH1X_YqoyqZ0Kb"}, {name: "Jabba el Hutt", img: "http://drive.google.com/uc?export=view&id=1GLT1p6RnCv8RaMYZVjYNL83wXi6WKJYy"}, 
                        {name: "Jawa", img: "http://drive.google.com/uc?export=view&id=1VxEevzZVmanxoqRZA1VvZAKjndLzvP74"}, {name: "Bantha", img: "http://drive.google.com/uc?export=view&id=1uuRuofFE6tAyOWTPRdD6O12obpU3591j"}, {name: "Tusken Raider", img: "http://drive.google.com/uc?export=view&id=1bDGwCLDguePdhLMUQfywvIUa5ftv9WI-"}, 
                        {name: "StormTrooper", img: "http://drive.google.com/uc?export=view&id=1KpxBd_kwE0kto7fOzqrdM5ahxZET4Eyw"}, {name: "Darth Vader", img: "http://drive.google.com/uc?export=view&id=11s-HPxsoJOdFZgyg9xcT3F_R6Pf2Z9FC"}, {name: "Palpatine", img: "http://drive.google.com/uc?export=view&id=1Hdn5yZrMRJTJLd8jju3j47P9qduXKW_z"}, 
                        {name: "Lando Calrissian", img: "http://drive.google.com/uc?export=view&id=1anVrbD9BqDE5A1lN3ngKD1UCMlqX1RkD"}, {name: "SnowTrooper", img: "http://drive.google.com/uc?export=view&id=1OzOoTMpEAQw7Gz5LJxbiJjjE_LGQrmIy"}, {name: "Kylo Ren", img: "http://drive.google.com/uc?export=view&id=15JWx9VUr23grneG0l1NLqWS0Pqx5efIl"}, 
                        {name: "Rey", img: "http://drive.google.com/uc?export=view&id=17NubhdPFVBnSrwydhRUN2CEIb7Vz_Zfq"}, {name: "Poe Dameron", img: "http://drive.google.com/uc?export=view&id=1SOMs0pgTZjNnU_I3g22WjPRuGpv7oBIu"}, {name: "BB-8", img: "http://drive.google.com/uc?export=view&id=11Qxs5GCJB3WGJrEeoWBW0_HV_CRwO0WZ"}, 
                        {name: "Finn", img: "http://drive.google.com/uc?export=view&id=1qZlNMgMhu8ru8nQmxxtSxYhm4g0j3wc4"}, {name: "Phasma", img: "http://drive.google.com/uc?export=view&id=1ssjhru0DSu9U2spxcG1IGAp_tGe-A0xu"}, {name: "AckBar", img: "http://drive.google.com/uc?export=view&id=1XxklqK2MHm3GXoQOJ0ggZetSMK_CMPZW"}, 
                        {name: "Rose Tico", img: "http://drive.google.com/uc?export=view&id=1kmu8AhZvFySVCgU39wYyv3wLA1VUyxAe"}, {name: "First Order Stormtrooper", img: "http://drive.google.com/uc?export=view&id=1_-luWiOHbuuDa0jVQCLjg2ue_oOAfsaQ"}, {name: "General Hux", img: "http://drive.google.com/uc?export=view&id=1xJvFFGyT_qLtqBwjuSoYsZZAm_kGpUg_"}, 
                        {name: "Maz Kanata", img: "http://drive.google.com/uc?export=view&id=1o6xia7WPWyALFWdi_f204GrO0k9IPiE8"}]
    function elegirPersonajes() {
        
        while(personajesElegidos.length !== 4){
            let personajeElegido = Math.floor(Math.random()*40);
            let personajeUsado = false;
            for (let index = 0; index < personajesElegidos.length; index++) {
                if (personajeElegido == personajesElegidos[index]) {
                    personajeUsado = true;
                }
            }
            for (let index = 0; index < personajesGanadoresAnteriores.length; index++) {
                if (personajeElegido == personajesGanadoresAnteriores[index]) {
                    personajeUsado = true;
                }
            }
            if (!personajeUsado){
                personajesElegidos.push(personajeElegido);
            }
        }
        elegirPersonajeGanador();
    }

    function elegirPersonajeGanador() {
        let posicionPersonaje = Math.floor(Math.random()*4);
        personajeGanador = personajesElegidos[posicionPersonaje];
        personajesGanadoresAnteriores.push(personajeGanador);
    }

    function pasarSiguienteRonda() {
        rondaActual++;
    }
    
    useEffect(pasarSiguienteRonda, []);
    useEffect(elegirPersonajes, [rondaActual]);

    return (
        <div id="game">
            <div className='star-wars-font'>
                {(personajesElegidos.length !== 4 ? "" : "Hay " + personajesElegidos.length + " personajes y el personaje ganador es " + personajes[personajeGanador].name )}
            </div>
        </div>
    );
}

export default Game;