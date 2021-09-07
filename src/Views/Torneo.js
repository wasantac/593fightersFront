import React,{useState,useEffect} from 'react';
import '../css/torneo.scss'
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import Navegacion from '../Components/Navegacion';
import {Container,Row,Col } from 'react-bootstrap';
import FechaFormat from '../Components/FechaFormat';
import FechaBadge from '../Components/FechaBadge';
import Gamebg from '../Components/Gamebg';
let {REACT_APP_URL} = process.env;
const Torneo = () => {
    let {id} = useParams();
    const [torneo,setTorneo] = useState({participantes:[]});
    useEffect(() => {
        axios.get(`http://${REACT_APP_URL}/torneos/${id}`).then(res =>{
            setTorneo(res.data);
            console.log(res.data.participantes)
        })
    },[id])
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg game={torneo.juego}></Gamebg>
            <Container className="mt-2 card shadow p-5 contenedor">
            <h1 className="text-center">{torneo.titulo} <FechaBadge fecha={torneo.fecha}></FechaBadge></h1>
            <h3>Descripción</h3>
            <p>{torneo.descripcion}</p>
            <FechaFormat fecha={torneo.fecha}></FechaFormat>
            <p>Juego: {torneo.juego}</p>
            <div className="d-flex align-items-center justify-content-center my-2">
                <Link to={`/inscripcion/${torneo._id}`} className="btn btn-primary px-5 py-3"><h4 className="m-0">¡Quiero Inscribirme!</h4></Link>
            </div>
            <h3>Participantes (Total: {torneo.participantes.length})</h3>
            <Row className="borde">
                {torneo.participantes.map((item,key) => {
                    return(
                      <Col md={3} sm={6} className="columna">
                          <div className="participante">
                          <p className="my-2 text-center">{item.nombre} ({item.nick})</p>
                          </div>
                      </Col>  
                    )
                })}
            </Row>
            </Container>
        </div>
    );
}

export default Torneo;
