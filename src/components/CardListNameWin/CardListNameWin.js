
import { useState } from 'react';
import Card from '../Card/Card';
import CorrectElectionName from '../CorrectElectionName/CorrectElectionName';
import Loading from '../Loading/Loading';
import './CardListNameWin.css';

function CardListNameWin(props) {

    // http://drive.google.com/uc?export=view&id=FILEID -- recibir desde google drive
    const personajes = [{name: "padmé amidala", img: "http://drive.google.com/uc?export=view&id=1VdR8n1HB8Cc5e0NKAKNEpL6lL-hAATGG"}, {name: "darth maul", img: "http://drive.google.com/uc?export=view&id=1uejA6sbDN8xE95T2DmZjEVeAXoBVLZRZ"}, {name: "obi-wan kenobi", img: "http://drive.google.com/uc?export=view&id=1cF4dpEG3qf1iRdUnPKMTSLT2TWVBV9hA"}, 
                        {name: "anakin skyWalker", img: "http://drive.google.com/uc?export=view&id=1VIbrx9__kGxTDx4sOIqLO7Y0qflaDx-Z"}, {name: "qui-gon jinn", img: "http://drive.google.com/uc?export=view&id=1rUSd_Fz9akU0lCuKcIXEcNYUaJABCZ2R"}, {name: "jar jar binks", img: "http://drive.google.com/uc?export=view&id=1A8q599C3pHtpc-ma4OpD1uzveutJ7zEE"}, 
                        {name: "yoda", img: "http://drive.google.com/uc?export=view&id=14EccBQMak3IV685eObGC0SSSe5L5mpP6"}, {name: "mace windu", img: "http://drive.google.com/uc?export=view&id=17k4r_S0wCCgCquaiMWY_dTW6TPhmjQnY"}, {name: "c3po", img: "http://drive.google.com/uc?export=view&id=1VyWKxj3GqyIWQWdU42wCgNyVNiROfdr3"}, 
                        {name: "r2d2", img: "http://drive.google.com/uc?export=view&id=1HydW-NwStvlArUThoY4iHWRKRN7n8JoP"}, {name: "jango fett", img: "http://drive.google.com/uc?export=view&id=1WrZZWVMtqizquNnyV4kmRLecx6sLq_e7"}, {name: "boba fett", img: "http://drive.google.com/uc?export=view&id=1Ilr2uQyoRAsz7N8DmW5Ja5wT2wkxS8CC"}, 
                        {name: "taun we", img: "http://drive.google.com/uc?export=view&id=1tEv6BaqlOA7Sn97JQZQzU_JFVw7Wljwm"}, {name: "clon", img: "http://drive.google.com/uc?export=view&id=1uMU1Rj8hchNdWJGj1hIixAA8IvHw3Kpc"}, {name: "conde dooku", img: "http://drive.google.com/uc?export=view&id=1nE0ybgyEP8ejBmtKvE5Wm87tmd4k3On1"}, 
                        {name: "grievous", img: "http://drive.google.com/uc?export=view&id=1ZHXAyKH8XdkKNrigYQgjaX9nsmPi_iVM"}, {name: "luke skyWalker", img: "http://drive.google.com/uc?export=view&id=1zQ1wEKR2Knyi_YIiZ3UE9k1dUTxtJEXt"}, {name: "han solo", img: "http://drive.google.com/uc?export=view&id=1K-SgmnJoIYrW17gVxU5vbv2loaQnAxKK"}, 
                        {name: "leia organa", img: "http://drive.google.com/uc?export=view&id=15lRHIRz_njWTV1qAR9kXi5I18jroyIIo"}, {name: "chewbacca", img: "http://drive.google.com/uc?export=view&id=1qBjbOmbEw9n3-BVaDJuH1X_YqoyqZ0Kb"}, {name: "jabba el hutt", img: "http://drive.google.com/uc?export=view&id=1GLT1p6RnCv8RaMYZVjYNL83wXi6WKJYy"}, 
                        {name: "jawa", img: "http://drive.google.com/uc?export=view&id=1VxEevzZVmanxoqRZA1VvZAKjndLzvP74"}, {name: "bantha", img: "http://drive.google.com/uc?export=view&id=1uuRuofFE6tAyOWTPRdD6O12obpU3591j"}, {name: "tusken raider", img: "http://drive.google.com/uc?export=view&id=1bDGwCLDguePdhLMUQfywvIUa5ftv9WI-"}, 
                        {name: "stormtrooper", img: "http://drive.google.com/uc?export=view&id=1KpxBd_kwE0kto7fOzqrdM5ahxZET4Eyw"}, {name: "darth vader", img: "http://drive.google.com/uc?export=view&id=11s-HPxsoJOdFZgyg9xcT3F_R6Pf2Z9FC"}, {name: "palpatine", img: "http://drive.google.com/uc?export=view&id=1Hdn5yZrMRJTJLd8jju3j47P9qduXKW_z"}, 
                        {name: "lando calrissian", img: "http://drive.google.com/uc?export=view&id=1anVrbD9BqDE5A1lN3ngKD1UCMlqX1RkD"}, {name: "snowtrooper", img: "http://drive.google.com/uc?export=view&id=1OzOoTMpEAQw7Gz5LJxbiJjjE_LGQrmIy"}, {name: "kylo ren", img: "http://drive.google.com/uc?export=view&id=15JWx9VUr23grneG0l1NLqWS0Pqx5efIl"}, 
                        {name: "rey", img: "http://drive.google.com/uc?export=view&id=17NubhdPFVBnSrwydhRUN2CEIb7Vz_Zfq"}, {name: "poe dameron", img: "http://drive.google.com/uc?export=view&id=1SOMs0pgTZjNnU_I3g22WjPRuGpv7oBIu"}, {name: "bb-8", img: "http://drive.google.com/uc?export=view&id=11Qxs5GCJB3WGJrEeoWBW0_HV_CRwO0WZ"}, 
                        {name: "finn", img: "http://drive.google.com/uc?export=view&id=1qZlNMgMhu8ru8nQmxxtSxYhm4g0j3wc4"}, {name: "phasma", img: "http://drive.google.com/uc?export=view&id=1ssjhru0DSu9U2spxcG1IGAp_tGe-A0xu"}, {name: "ackBar", img: "http://drive.google.com/uc?export=view&id=1XxklqK2MHm3GXoQOJ0ggZetSMK_CMPZW"}, 
                        {name: "rose tico", img: "http://drive.google.com/uc?export=view&id=1kmu8AhZvFySVCgU39wYyv3wLA1VUyxAe"}, {name: "first order stormtrooper", img: "http://drive.google.com/uc?export=view&id=1_-luWiOHbuuDa0jVQCLjg2ue_oOAfsaQ"}, {name: "general hux", img: "http://drive.google.com/uc?export=view&id=1xJvFFGyT_qLtqBwjuSoYsZZAm_kGpUg_"}, 
                        {name: "maz kanata", img: "http://drive.google.com/uc?export=view&id=1o6xia7WPWyALFWdi_f204GrO0k9IPiE8"}]

    function obtenerTarjetasPersonajes() {
        let contador = 0;
        let tarjetaPersonaje;
        let tarjetasPersonajes = [];
        
        do{
            tarjetaPersonaje = personajes[props.personajesElegidos[contador]];
            tarjetasPersonajes.push(tarjetaPersonaje);
            contador++;
        }while (4 > tarjetasPersonajes.length);
        return tarjetasPersonajes.map(muestraTarjeta);
    }

    function muestraTarjeta(personaje, indice) {
        return (
            <Card key={indice} esEleccionCorrecta={props.esEleccionCorrecta} personaje={personaje}></Card>
        );
    }

  return (
    <div>
        <div className='tarjetas row mt-5'>
            {props.cargado ? obtenerTarjetasPersonajes() : <Loading></Loading>} 
        </div>
        <CorrectElectionName elegido={personajes[props.elegido].name}></CorrectElectionName>
    </div>
  );
}

export default CardListNameWin;
