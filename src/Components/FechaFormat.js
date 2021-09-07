import React from 'react';

const FechaFormat = ({fecha,className}) => {
    let mejorarFecha = () =>{
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const dateObj = new Date(fecha);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        const output = month  + '\n'+ day  + ',' + year;
        return output;
    }
    return (
        <p className={className}>{mejorarFecha()}</p>
    );
}

export default FechaFormat;
