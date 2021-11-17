import React, { useEffect, useState } from 'react';
import Gamebg from '../Components/Gamebg';
import Navegacion from '../Components/Navegacion';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';
import '../css/perfil.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
const Perfil = () => {
    const history = useHistory();
    const [user, setUser] = useState('')
    const [nombre, setNombre] = useState('')
    const [nick, setNick] = useState('')
    const [correo, setCorreo] = useState('')
    const [whats, setWhats] = useState('')
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
        }
        axios.get(`/users/id?token=${localStorage.getItem('token')}`).then(res => {
            setUser(res.data.user)
            setNombre(res.data.nombre)
            setNick(res.data.nick)
            setCorreo(res.data.correo)
            setWhats(res.data.whats)
        })
    }, [history])
    let handleSubmit = (event) => {
        let nombre = event.target[0].value;
        let nick = event.target[1].value;
        let correo = event.target[2].value;
        let whats = event.target[3].value;
        axios.put(`/users?token=${localStorage.getItem('token')}`, {
            nombre,
            nick,
            correo,
            whats,
        }).then(res => {
            window.location.reload();
        })
        event.preventDefault();
    }
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <div className="contenedor-perfil">
                <Container>
                    <Row className="mt-5">
                        <Col md={5} className="my-3">
                            <div className="card shadow text-justify p-5">
                                <h3 className="text-center">Datos Personales</h3>
                                <h5>Usuario: <span className="fs-6">{user}</span></h5>
                                <h5>Nombre: <span className="fs-6">{nombre}</span></h5>
                                <h5>Nick (PS4): <span className="fs-6">{nick}</span></h5>
                                <h5>Correo: <span className="fs-6">{correo}</span></h5>
                                <h5>Whatsapp: <span className="fs-6">{whats}</span></h5>
                            </div>
                        </Col>
                        <Col md={7} className="my-3">
                            <div className="card shadow text-justify p-3">
                                <h3 className="text-center">Editar Datos</h3>
                                <Form className="px-5 pt-2 pb-3 tarjeta" onSubmit={handleSubmit}>
                                    <Col>
                                        <Row>
                                            <Col md={12}>
                                                <Form.Group className="mb-2" controlId="nick">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control type="text" name="nombre" required></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-2" controlId="nick">
                                                    <Form.Label>Nick (PS4)</Form.Label>
                                                    <Form.Control type="text" name="nick" required></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-2">
                                                    <Form.Label>Correo</Form.Label>
                                                    <Form.Control type="text" name="correo" required></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-2">
                                                    <Form.Label>Whatsapp</Form.Label>
                                                    <Form.Control type="text" name="whats" required></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex align-items-center justify-content-center flex-column">
                                            <Button type="submit" >Guardar Cambios
                                            </Button>
                                        </div>
                                    </Col>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Perfil;
