import React from 'react';
import logo from '../593logo.png';
import '../css/inscripcion.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
const Inscripcion = () => {
    let handleSubmit = (event) => {
        let nombre = event.target[0].value;
        let nick = event.target[1].value;
        let correo = event.target[2].value;
        let whats = event.target[3].value;
        event.preventDefault();
    }
    return (
        <div className="fondo"> 
            <Container className="d-flex align-items-center justify-content-center h-100" md={12}>
            <div className="card shadow">
            <h1 className="text-center pt-2">Torneo X</h1>
            <img src={logo} alt="593Logo" width="200rem" height="auto" className="imgtorneo"></img>
            <Form className="p-5 mt-5" onSubmit={handleSubmit}>
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
