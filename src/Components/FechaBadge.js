import React from 'react';
import {Badge} from 'react-bootstrap'
const FechaBadge = ({fecha}) => {
    let checkFecha = () => {
        const dateObj = new Date(fecha);
        const now = Date.now();
        return dateObj - now;
    }
    return (
        <React.Fragment>
            {checkFecha() > 0 ? <Badge bg="success">Abierto</Badge>:<Badge bg="danger">Finalizado</Badge>}
        </React.Fragment>
    );
}

export default FechaBadge;
