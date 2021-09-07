import React from 'react';
import {Col,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/torneoitem.scss';
import FechaBadge from './FechaBadge';
const TorneoItem = ({torneo}) => {
    let checkFecha = () => {
        const dateObj = new Date(torneo.fecha);
        const now = Date.now();
        return dateObj - now;
    }
    let mejorarFecha = () =>{
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const dateObj = new Date(torneo.fecha);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        const output = month  + '\n'+ day  + ',' + year;
        return output;
    }
    return (
        <React.Fragment>
            <Col md={4}>
            <Link to={`torneo/${torneo._id}`} className="item">
            <div className="card shadow p-4">
                <h1 className="text-center">{torneo.titulo}</h1>
                <Container>
                <p className="ocultartexto">{torneo.descripcion}</p>
                </Container>
                <h5 className="text-center">{mejorarFecha()} <FechaBadge fecha={torneo.fecha}></FechaBadge></h5>
            </div>
            </Link>
            </Col>
        </React.Fragment>
    );
}

export default TorneoItem;
