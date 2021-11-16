import React, { useEffect, useState } from 'react';
import '../css/calendario.scss';
import axios from 'axios';
const TablaCalendario = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/calendario').then(res => {
            let diasRes = res.data
            setData([diasRes.lunes, diasRes.martes, diasRes.miercoles, diasRes.jueves, diasRes.viernes, diasRes.sabado, diasRes.domingo])
        })

    }, [])
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    return (
        <div className="table-responsive">
            <table className="w-100 text-center table table-bordered fondo-negro-transparente">
                <thead>
                    <tr>
                        {dias.map((item, key) => {
                            return (
                                <th key={key} className="text-white celda">{item}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map((item, key) => {
                            return (
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
