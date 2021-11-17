import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../GoGoNBG.png';
import { Container, Nav } from 'react-bootstrap';
import '../css/navegacion.scss';

const Navegacion = () => {

    let cerrarSesion = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    return (
        <Navbar variant="dark" className="fibra shadow" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="593Fihters" width="auto" height="50rem" className="d-inline-block align-top"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-center"><span className="blanco-nav">Inicio</span></Nav.Link>
                        <Nav.Link href="/torneos" className="text-center"><span className="blanco-nav">Torneos</span></Nav.Link>
                        <Nav.Link href="/nosotros" className="text-center"><span className="blanco-nav">Nosotros</span></Nav.Link>
                        <Nav.Link href="/tabla-ranked" className="text-center"><span className="blanco-nav">Tabla Ranked</span></Nav.Link>
                    </Nav>
                    <Nav>

                        {localStorage.getItem('token') ? <React.Fragment>
                            <Nav.Link href="/perfil" className="usuario">
                                Perfil
                            </Nav.Link>
                            <Nav.Link href="#" className="text-center" onClick={() => { cerrarSesion() }}><span className="blanco-nav">Cerrar Sesión</span></Nav.Link>
                        </React.Fragment>

                            : <React.Fragment><Nav.Link href="/login" className="usuario">Iniciar Sesión</Nav.Link></React.Fragment>}


                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Navegacion;
