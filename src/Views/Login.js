import React from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../593logo.png';
import '../css/inscripcion.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import Gamebg from '../Components/Gamebg';
const Login = () => {
    const history = useHistory();
    let handleSubmit = (event) => {
        let username = event.target[0].value;
        let password = event.target[1].value;
        axios.post(`/login`,{
            username,
            password,
        },).then(res => {
            localStorage.setItem('token',res.data.token)
            history.push(`/`)
        })
        event.preventDefault();
    }
    return (
        <div className="fondo"> 
            <Gamebg game={null}></Gamebg>
            <Container className="d-flex align-items-center justify-content-center h-100" md={12}>
            <div className="card shadow">
            <img src={logo} alt="593Logo" className="imgtorneo"></img>
            <Form className="px-5 pt-5 pb-3 tarjeta" onSubmit={handleSubmit}>
                <Row>
                <Col md={12}>
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" name="username" required></Form.Control>
                </Form.Group> 
                </Col>
                <Col md={12}>
                <Form.Group className="mb-2">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" required></Form.Control>
                </Form.Group> 
                </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-center flex-column">
                <Button type="submit" >Iniciar Sesión
                </Button>
                <a href="/registro" className="mt-2 text-decoration-none">¡No tienes cuenta? Da click aquí.</a>
                </div>
            </Form>
            </div>
            </Container>
        </div>
    );
}

export default Login;
