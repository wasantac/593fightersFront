import React,{useMemo} from 'react';
import '../css/game.scss';
import gg from '../assets/guiltygear.png';
import dbfz from '../assets/dragonball.jpg';
import fondo from '../assets/fondo.png'
const Gamebg = ({game}) => {
    let fondoLogic = useMemo(() => {
        switch(game){
            case 'gg':{
                return gg;
            }
            case 'dbfz':{
                return dbfz;
            }
            case '593':{
                return fondo;
            }
            default:{
                return fondo;
            }
        }

    },[game])
    return (
        <div className='juego'>
            <img src={fondoLogic} alt="" className='imagen'></img>
        </div>
    );
}

export default Gamebg;
