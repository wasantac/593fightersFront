import React from 'react';
import { Carousel } from 'react-bootstrap';
import gg from '../assets/guiltygear.png';
import dbfz from '../assets/dragonball.jpg';
import '../css/carousel.scss';
const Carousel593 = () => {
    return (
        <Carousel>
            <Carousel.Item className=" ratio ratio-16x9">
                <img
                    className="imagen"
                    src={gg}
                    alt="Second slide"
                />

                <Carousel.Caption className="black-t">
                    <h3>¡Torneos Próximamente!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=" ratio ratio-16x9">
                <img
                    className="imagen"
                    src={dbfz}
                    alt="Third slide"
                />

                <Carousel.Caption className="black-t">
                    <h3>¡Torneos Próximamente!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousel593;
