import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/inscripcion.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Gamebg from '../Components/Gamebg';
const Registro = () => {
    const history = useHistory();
    let handleSubmit = (event) => {
        let username = event.target[0].value;
        let nick = event.target[1].value;
        let nombre = event.target[2].value;
        let correo = event.target[3].value;
        let whats = event.target[4].value;
        let password = event.target[5].value;
        let validate = event.target[6].value;
        if (password === validate) {
            axios.post(`/login/registro`, {
                user: username,
                password,
                nombre,
                correo,
                whats,
                nick
            }).then(res => {
                history.push(`/login`)
            })
        }

        event.preventDefault();
    }
    return (
        <div className="fondo">
            <Gamebg game={null}></Gamebg>
            <Container className="d-flex align-items-center justify-content-center h-100" md={12}>
                <div className="card shadow">
                    <Form className="px-5 pt-5 pb-5 tarjeta" onSubmit={handleSubmit}>
                        <Col>
                            <h1 className="text-center">Registro</h1>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="username">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" name="username" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="nick">
                                        <Form.Label>Nick (PS4)</Form.Label>
                                        <Form.Control type="text" name="nick" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="nombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="nombre" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="correo">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" name="correo" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="whats">
                                        <Form.Label>Whatsapp</Form.Label>
                                        <Form.Control type="text" name="whats" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="password" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Validar Contraseña</Form.Label>
                                        <Form.Control type="password" name="validate_password" required></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <Button type="submit" >Registrarme
                                </Button>
                            </div>
                        </Col>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Registro;
