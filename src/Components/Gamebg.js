import React from 'react';
import '../css/game.scss';
import gg from '../assets/guiltygear.png';
import dbfz from '../assets/dragonball.jpg';
const Gamebg = ({game}) => {
    return (
        <div className='juego'>
            <img src={game == 'gg' ? gg : dbfz} alt="" className='imagen'></img>
        </div>
    );
}

export default Gamebg;
