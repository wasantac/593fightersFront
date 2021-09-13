import React,{useEffect,useState} from 'react';
import Navegacion from '../Components/Navegacion';
import Container from 'react-bootstrap/Container';
import TorneoItem from '../Components/TorneoItem';
import axios from 'axios';
import {Row,Spinner} from 'react-bootstrap';
import Gamebg from '../Components/Gamebg';
import Footer from '../Components/Footer';
const VerTorneos = () => {
    const [torneo,setTorneo] = useState([]);
    const [load,setLoad] = useState(false);
    useEffect(() => {
        axios.get(`/torneos`).then(res => {
            setTorneo(res.data)
            setLoad(true)
        })
    },[])
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <Container className="mt-1">
            <h1>Torneos Actuales</h1>
            {load ?             
            <Row>
            {torneo.map((item,id) =>{
                return(
                    <TorneoItem key={id} torneo={item}>{item.titulo}</TorneoItem>
                )
            })}
            </Row>: 
            <div className="d-flex align-items-center justify-content-center h-100">
                <Spinner animation="grow" />    
            </div>}
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default VerTorneos;
