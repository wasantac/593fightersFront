import React from 'react';
import '../css/calendario.scss';
const TablaCalendario = () => {
    let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
    let data = Array(7).fill("Nada")
    return (
        <div className="table-responsive">
        <table className="w-100 text-center table table-bordered">
            <thead>
                <tr>
                {dias.map((item,key) => {
                            return(
                                <th key={key} className="text-white celda">{item}</th>
                            )
                })}
                </tr>
            </thead>
            <tbody>
                <tr>
                {data.map((item,key) => {
                            return(
                                <td key={key} className="text-white celda">{item}</td>
                            )
                })}
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default TablaCalendario;
