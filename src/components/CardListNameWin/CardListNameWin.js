
import { useState } from 'react';
import Card from '../Card/Card';
import CorrectElectionName from '../CorrectElectionName/CorrectElectionName';
import Loading from '../Loading/Loading';
import './CardListNameWin.css';

function CardListNameWin(props) {

    // http://drive.google.com/uc?export=view&id=FILEID -- recibir desde google drive
    const personajes = [{name: "padmé amidala", img: "http://drive.google.com/uc?export=view&id=1zCN0gKuSIwgYBFlIpz2moFD3wITrxvN6"}, {name: "darth maul", img: "http://drive.google.com/uc?export=view&id=1Etzjm_CAgefdhq9138CE8Jz7n2LrrWz3"}, {name: "obi-wan kenobi", img: "http://drive.google.com/uc?export=view&id=185eiGIJ2fxHWe66Ml3kGr9qJMXmpHKOn"},
                        {name: "anakin skyWalker", img: "http://drive.google.com/uc?export=view&id=1yN4uiuJJpFrR-2PtVahkY4_QZGvdmMN1"}, {name: "qui-gon jinn", img: "http://drive.google.com/uc?export=view&id=1Fu9Jzmna5LCh5OlrDdmRJd5QxWMmzQO7"}, {name: "jar jar binks", img: "http://drive.google.com/uc?export=view&id=1xd5LkbchYg6v0ngMScBDCbXyy2fntxJE"},
                        {name: "yoda", img: "http://drive.google.com/uc?export=view&id=1VioUjXQVEIfk6NEZgPYmp1qrNFA12CqC"}, {name: "mace windu", img: "http://drive.google.com/uc?export=view&id=1qUx4Q1nYRw9cgeFrIsWpZasgjIiSwYEG"}, {name: "c3po", img: "http://drive.google.com/uc?export=view&id=1yCSnK3ePSI7z4iW5OOaAh8krkcUIAYh1"},
                        {name: "r2d2", img: "http://drive.google.com/uc?export=view&id=1sRSCoXZia5iOR-QABe_q2Y80JTqCSjpg"}, {name: "jango fett", img: "http://drive.google.com/uc?export=view&id=1t5DbfRPxHAtqtq2oxpKpLr73FG7QZWh6"}, {name: "boba fett", img: "http://drive.google.com/uc?export=view&id=1x5i3IHkyBIKseaEgNwANCivIZmpd_dex"},
                        {name: "taun we", img: "http://drive.google.com/uc?export=view&id=1SJiO7l7blq7DamCK7XN8ImTT5M_XpNPl"}, {name: "clon", img: "http://drive.google.com/uc?export=view&id=1c8w0WPgdi4NOo7CsIta7WDLH1DzwgM95"}, {name: "conde dooku", img: "http://drive.google.com/uc?export=view&id=1Q2yECItnA2tH8A8UPKk4udxMUi5f774c"}, 
                        {name: "grievous", img: "http://drive.google.com/uc?export=view&id=1EVcHqZ3QNXfGxQLV36eDz2Zj62gbz4ac"}, {name: "luke skyWalker", img: "http://drive.google.com/uc?export=view&id=1fKkbWqLBfp9yGSsT2NtEXuJlHOLv4IlL"}, {name: "han solo", img: "http://drive.google.com/uc?export=view&id=1rwbvVtbodr_BstqURvYafTsCweLG2jrL"}, 
                        {name: "leia organa", img: "http://drive.google.com/uc?export=view&id=1QazY5g0itYFpJ1Wc79PhI5WnX10h3Mxu"}, {name: "chewbacca", img: "http://drive.google.com/uc?export=view&id=1b5Yhv7C-FiWrMI84-ikC-rTdbJXDxIPr"}, {name: "jabba el hutt", img: "http://drive.google.com/uc?export=view&id=1Ao9cWldWnI05JNKDMj5yXbs3HuQDMndd"}, 
                        {name: "jawa", img: "http://drive.google.com/uc?export=view&id=1V8CcgHRhC67Mukql8rARtyDBLjZfRoQZ"}, {name: "bantha", img: "http://drive.google.com/uc?export=view&id=1k_8o5td1zFee9ZjHV4YYijOfI0Q4zzbi"}, {name: "tusken raider", img: "http://drive.google.com/uc?export=view&id=1gMKXy-L1cFkc9RRWKkzwwgFrC1VcfrLt"}, 
                        {name: "stormtrooper", img: "http://drive.google.com/uc?export=view&id=1VoqYez8aPlRFAT3ertKkTLGuE2XVBsGL"}, {name: "darth vader", img: "http://drive.google.com/uc?export=view&id=18ZqigEKTgB3l18Wufr50c6GZc90pD6iq"}, {name: "palpatine", img: "http://drive.google.com/uc?export=view&id=1jWt_rbE9TjfLaSjE4t2yhSkj05cKj1Ay"}, 
                        {name: "lando calrissian", img: "http://drive.google.com/uc?export=view&id=1X5rcZK8xiC7Nxcc25qzdUL8KaBO0ypof"}, {name: "snowtrooper", img: "http://drive.google.com/uc?export=view&id=1-YQoPFqx4xaRFqJrQCVKPAZ-GqdrBEUR"}, {name: "kylo ren", img: "http://drive.google.com/uc?export=view&id=1r4RjYu5ZZJN7jlOBmZHYMZnhFLkhvwsO"}, 
                        {name: "rey", img: "http://drive.google.com/uc?export=view&id=1pICi9XNda-MWgwXXt_oUpZ0PdOptyWAk"}, {name: "poe dameron", img: "http://drive.google.com/uc?export=view&id=1j7_gAJcPmuExhBydTKjvefiLqu1f4AGv"}, {name: "bb-8", img: "http://drive.google.com/uc?export=view&id=12eiQabzr2FtUOAhMNwjf5jsOTjkZWQf4"}, 
                        {name: "finn", img: "http://drive.google.com/uc?export=view&id=1E1sv7KFSAMhHEk19ktzPoaWcjnzWxSgl"}, {name: "phasma", img: "http://drive.google.com/uc?export=view&id=121YbK5rqdsJXU8v9XkFg1Iv-fwR_TvfE"}, {name: "ackBar", img: "http://drive.google.com/uc?export=view&id=1hrprfeMA2Yig5vctfhAtAMYY6S-A8a6_"}, 
                        {name: "rose tico", img: "http://drive.google.com/uc?export=view&id=1hUwD6heSE5AQhzMqQGfnOg17icEgiPPH"}, {name: "first order stormtrooper", img: "http://drive.google.com/uc?export=view&id=1QScH_DRVdRKc174Kw_SyGLvS_4NblF57"}, {name: "general hux", img: "http://drive.google.com/uc?export=view&id=1Px-FmNKfO5b9Mybmxmpsspzu8F6QZlxJ"}, 
                        {name: "maz kanata", img: "http://drive.google.com/uc?export=view&id=1KlaUKxjuh6KMihgJgMzk4-D76fgbbsh6"}]

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
