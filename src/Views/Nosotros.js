import React from 'react';
import Navegacion from '../Components/Navegacion';
import Gamebg from '../Components/Gamebg';
import gogo from '../GoGoNBG.png'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer';
import '../css/nosotros.scss'
const Nosotros = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <div className="d-flex align-items-center justify-content-center my-5">
                <img src={gogo} alt="593" className="img-fluid"></img>
            </div>
            <Container>
                <h5 className="card p-5 bg-593-rojo text-white my-5 display-linebreak">
                    {`GoGoFriendZ, tiene como objetivo brindarte torneos impartidos por la comunidad de ecuador. Puedes ganar premios en efectivo y también ganar puntos para ser el mejor y aparecer en la tabla ranked. Nosotros también realizamos directos en la plataforma de twitch en la cual puedes participar en Retos, Torneos, Salas abertas y más.
            
            Cada mes implementamos nuevas mejoras al canal y hacemos todo lo posible para que tu entretenimiento sea asegurado. ¡Tenemos un calendario de actividades para que nunca te pierdas los directos!`}
                </h5>

            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Nosotros;
