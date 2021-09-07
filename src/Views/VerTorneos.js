import React,{useEffect,useState} from 'react';
import Navegacion from '../Components/Navegacion';
import Container from 'react-bootstrap/Container';
import TorneoItem from '../Components/TorneoItem';
import axios from 'axios';
import {Row} from 'react-bootstrap';
import Gamebg from '../Components/Gamebg';
import Footer from '../Components/Footer';
let {REACT_APP_URL} = process.env;
const VerTorneos = () => {
    const [torneo,setTorneo] = useState([]);
    useEffect(() => {
        axios.get(`https://${REACT_APP_URL}/torneos`).then(res => {
            setTorneo(res.data)
        })
    },[])
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <Container className="mt-1">
            <h1>Torneos Actuales</h1>
            <Row>
            {torneo.map((item,id) =>{
                return(
                    <TorneoItem key={id} torneo={item}>{item.titulo}</TorneoItem>
                )
            })}
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default VerTorneos;
