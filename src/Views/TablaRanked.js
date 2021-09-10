import React from 'react';
import Navegacion from '../Components/Navegacion';
import Gamebg from '../Components/Gamebg';
const TablaRanked = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <div  className="w-100 d-flex align-items-center justify-content-center">
                <h1 className="mt-5">Proximamente...</h1>
            </div>
        </div>
    );
}

export default TablaRanked;
