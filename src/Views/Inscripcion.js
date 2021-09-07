import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import logo from '../593logo.png';
import '../css/inscripcion.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import FechaFormat from '../Components/FechaFormat';
import Swal from 'sweetalert2'
import Gamebg from '../Components/Gamebg';
let {REACT_APP_URL} = process.env;
const Inscripcion = () => {
    let {id} = useParams();
    const history = useHistory();
    const [load,setLoad] = useState(false);
    const [torneo,setTorneo] = useState({});
    useEffect(()=>{
        if(!load){
            axios.get(`https://${REACT_APP_URL}/torneos/${id}`).then(res => {
                setTorneo(res.data)
            });
            setLoad(true)
        }
    },[id,load])
    let handleSubmit = (event) => {
        let nombre = event.target[0].value;
        let nick = event.target[1].value;
        let correo = event.target[2].value;
        let whats = event.target[3].value;
        axios.put(`https://${REACT_APP_URL}/torneos/${id}`,{
            nombre,
            nick,
            correo,
            whats
        }).then(res => {
            Swal.fire(
                '¡Gracias Por Registrarte!',
                'Te esperamos en el torneo :)',
                'success'
            ).then(() =>{
                history.push(`/torneo/${id}`)
            });
        })
        event.preventDefault();
    }
    return (
        <div className="fondo"> 
            <Gamebg game={torneo.juego}></Gamebg>
            <Container className="d-flex align-items-center justify-content-center h-100" md={12}>
            <div className="card shadow">
            <img src={logo} alt="593Logo" className="imgtorneo"></img>
            <h1 className="text-center pt-2">{torneo.titulo}</h1>
            <FechaFormat fecha={torneo.fecha} className="text-center mb-0"></FechaFormat>

            <Form className="p-5 tarjeta" onSubmit={handleSubmit}>
                <Row>
                <Col md={12}>
                <Form.Group className="mb-2" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" required></Form.Control>
                </Form.Group> 
                </Col>
                <Col md={12}>
                <Form.Group className="mb-2">
                    <Form.Label>Nick (PS4)</Form.Label>
                    <Form.Control type="text" name="nick" required></Form.Control>
                </Form.Group> 
                </Col>
                <Col md={12}>
                <Form.Group className="mb-2">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="correo" required></Form.Control>
                </Form.Group> 
                </Col>
                <Col md={12}>
                <Form.Group className="mb-2">
                    <Form.Label>Whatsapp</Form.Label>
                    <Form.Control type="text" name="whats" required></Form.Control>
                </Form.Group> 
                </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-center">
                <Button type="submit" >Inscribirse</Button>
                </div>
            </Form>
            </div>
            </Container>
        </div>
    );
}

export default Inscripcion;
