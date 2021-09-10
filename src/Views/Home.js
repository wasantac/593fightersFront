import React,{useState,useEffect} from 'react';
import Navegacion from '../Components/Navegacion';
import Gamebg from '../Components/Gamebg';
import Carousel593 from '../Components/Carousel593';
import {Container,Row} from 'react-bootstrap';
import TorneoItem from '../Components/TorneoItem';
import Footer from '../Components/Footer';
import axios from 'axios';
import TablaCalendario from '../Components/TablaCalendario';
import '../css/home.scss';


const Home = () => {
    const [torneo,setTorneo] = useState([]);
    useEffect(() => {
        axios.get(`/torneos/home`).then(res => {
            setTorneo(res.data)
        })
    },[])
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <Carousel593></Carousel593>
            <div className="fondo-blanco-transparente py-5">
            <Container>
                <h1>Próximos Torneos</h1>
                <Row>
            {torneo.map((item,id) =>{
                return(
                    <TorneoItem key={id} torneo={item}>{item.titulo}</TorneoItem>
                )
            })}
            </Row>
            </Container>
            </div>
            <div className="py-5 fondo-negro-transparente">
                <Container>
                <h1 className="text-white">Calendario de la Semana</h1>
                <TablaCalendario></TablaCalendario>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
