import React from 'react';
import Navegacion from '../Components/Navegacion';
import Gamebg from '../Components/Gamebg';
import Carousel593 from '../Components/Carousel593';
import {Container} from 'react-bootstrap';
import '../css/home.scss';

const Home = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <Carousel593></Carousel593>
            <div className="fondo-blanco-transparente py-5">
            <Container>
                <h1>Próximos Torneos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor libero, commodo eu hendrerit id, faucibus in mauris. Maecenas cursus ex ut erat feugiat malesuada. Vivamus elementum consequat purus nec congue. Integer orci neque, aliquam vitae dignissim id, porttitor sit amet lacus. Duis varius ipsum in sagittis accumsan. Mauris sit amet diam sit amet lectus faucibus placerat. Sed vehicula ipsum id odio scelerisque feugiat. Nam eget pulvinar tortor, quis elementum leo. Nunc mattis purus dictum nisi consectetur ornare. Vivamus pellentesque luctus tellus dignissim volutpat. Praesent sagittis, felis a congue commodo, neque purus pharetra eros, id luctus metus nisi non lacus. Vivamus ultrices libero in tortor hendrerit, quis tincidunt enim eleifend. Vestibulum congue at enim ullamcorper fringilla. Donec porta felis eu vulputate congue. Duis lobortis ac diam et tincidunt. Cras accumsan orci id nisi sodales, vitae rutrum enim pharetra.</p>
            </Container>
            </div>
        </div>
    );
}

export default Home;
