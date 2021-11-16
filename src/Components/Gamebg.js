import React, { useMemo } from 'react';
import '../css/game.scss';
import gg from '../assets/guiltygear.png';
import dbfz from '../assets/dragonball.jpg';

const Gamebg = ({ game }) => {
    let lines = []
    for (let i = 0; i < 49; i++) {
        lines.push(<span className="circle" key={i}></span>)
    }
    let fondoLogic = useMemo(() => {
        console.log(game)
        switch (game) {
            case 'gg': {
                return gg;
            }
            case 'dbfz': {
                return dbfz;
            }
            case 'db': {
                return dbfz;
            }
            default: {
                return '';
            }
        }

    }, [game])
    return (
        <div className='juego'>
            {fondoLogic ? <img src={fondoLogic} alt="" className='imagen'></img> : <div className='particles-bg'>
                {lines.map(item => {
                    return item
                })}</div>}
        </div>
    );
}

export default Gamebg;
