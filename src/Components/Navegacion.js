import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../593logocompresed.png';
import {Container,Nav} from 'react-bootstrap';
import '../css/navegacion.scss';
const Navegacion = () => {
    return (
        <Navbar variant="dark" className="fibra shadow" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="593Fihters" className="navbrand593"  width="auto" height="36rem"className="d-inline-block align-top"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="me-auto">
                <Nav.Link href="/" className="text-center"><span className="blanco-nav">Inicio</span></Nav.Link>
                <Nav.Link href="/torneos" className="text-center"><span className="blanco-nav">Torneos</span></Nav.Link>
                <Nav.Link href="/" className="text-center"><span className="blanco-nav">Nosotros</span></Nav.Link>
                <Nav.Link href="/" className="text-center"><span className="blanco-nav">Tabla Ranked</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
}

export default Navegacion;
