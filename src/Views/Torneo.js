import React,{useState,useEffect} from 'react';
import '../css/torneo.scss'
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import Navegacion from '../Components/Navegacion';
import {Container,Row,Col } from 'react-bootstrap';
import FechaFormat from '../Components/FechaFormat';
import FechaBadge from '../Components/FechaBadge';
import Gamebg from '../Components/Gamebg';
import Footer from '../Components/Footer';
const Torneo = () => {
    let {id} = useParams();
    const [torneo,setTorneo] = useState({participantes:[]});
    let juegoTransform = (juego) => {
        switch(juego){
            case 'gg':{
                return 'Guilty Gear Strive'
            }
            case 'dbfz':{
                return 'Dragon Ball Fighter Z'
            }
            default:{
                return juego
            }
        }
    }
    useEffect(() => {
        axios.get(`/torneos/${id}`).then(res =>{
            setTorneo(res.data);
            console.log(res.data.participantes)
        })
    },[id])
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg game={torneo.juego}></Gamebg>
            <Container className="my-5 card shadow p-5 contenedor">
            <h1 className="text-center">{torneo.titulo} <FechaBadge fecha={torneo.fecha}></FechaBadge></h1>
            <h3>Descripción</h3>
            <p>{torneo.descripcion}</p>
            <Row className="text-center">
                <Col className="my-2">
                <div className="card shadow p-3 border-secondary">
                <h3>Juego</h3>
                <p>{juegoTransform(torneo.juego)}</p>
                </div>
                </Col>
                <Col className="my-2">
                    <div className="card shadow p-3 border-secondary">
                    <h3>Fecha</h3><FechaFormat fecha={torneo.fecha}></FechaFormat>
                    </div>
                </Col>
                <Col className="my-2">
                <div className="card shadow p-3 border-secondary">
                <h3>Premio</h3><p>{torneo.premio}</p>
                </div>
                </Col>
            </Row>

            
            <div className="d-flex align-items-center justify-content-center my-3">
                {torneo.participantes.length < 30 ?                 
                <Link to={`/inscripcion/${torneo._id}`} className="px-5 py-3 boton593"><h4 className="m-0">¡Quiero Inscribirme!</h4></Link>
                :                 
                <h4 className="m-0 px-5 py-3 boton593cerrado">Inscripciones Cerradas</h4> }
            </div>
            <h3>Participantes (Total: {torneo.participantes.length}/{torneo.max})</h3>
            <Row className="borde">
                {torneo.participantes.length > 0 ? torneo.participantes.map((item,key) => {
                    return(
                      <Col md={3} sm={6} className="columna" key={key}>
                          <div className="participante">
                          <p className="my-2 text-center">{item.nombre} ({item.nick})</p>
                          </div>
                      </Col>  
                    )
                }) : <p>No hay participantes inscritos por el momento.</p>}
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Torneo;
