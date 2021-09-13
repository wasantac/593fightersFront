import React from 'react';
import Navegacion from '../Components/Navegacion';
import Gamebg from '../Components/Gamebg';
import logo593 from '../593logocompresed.png'
import {Container} from 'react-bootstrap'
import Footer from '../Components/Footer';
const Nosotros = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <Gamebg></Gamebg>
            <div className="d-flex align-items-center justify-content-center my-5">
            <img src={logo593} alt="593"></img>
            </div>
            <Container>
            <h5 className="card p-5 bg-danger text-white my-5 display-linebreak">
            {`            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim nulla arcu, quis tincidunt felis pharetra sit amet. Mauris consequat, nulla eu placerat tincidunt, neque ante semper mi, eget tincidunt ex diam a sapien. Sed eu odio leo. Praesent mauris nisl, bibendum ac turpis quis, tincidunt mattis ex. Donec sed euismod diam. Nulla vel odio feugiat, bibendum odio sit amet, vehicula purus. Quisque dictum pretium rutrum. Quisque enim est, pharetra ac finibus lacinia, fringilla pharetra sapien. Vestibulum pulvinar ipsum a ligula tempor, sit amet finibus tellus condimentum. Proin a ante vitae odio congue luctus. Vestibulum vitae nulla elit. Maecenas at ex mauris.

Phasellus dignissim nulla enim. Ut pulvinar iaculis elit sit amet ultricies. Fusce porta sagittis iaculis. Cras mi ipsum, volutpat eget sem id, facilisis tempor diam. Donec accumsan metus et quam rutrum, sed egestas leo interdum. Duis a ex dolor. Curabitur tristique ex quis odio sollicitudin sodales eget vitae quam.

Ut ut odio augue. Maecenas ut nisl sed justo elementum imperdiet quis ut mauris. Suspendisse egestas massa non sagittis placerat. Nunc eu tempor enim. In non fringilla felis, ut elementum sem. Praesent ut ligula tellus. Nulla dapibus enim ac venenatis aliquet. Maecenas finibus elit tellus. Quisque ut elementum nisi.

Vivamus et placerat purus. Pellentesque sit amet porttitor ex. Sed euismod nibh vel mollis tincidunt. Fusce sit amet dapibus diam. Praesent mollis diam elit, sed tincidunt magna convallis sit amet. Phasellus eros turpis, imperdiet placerat magna et, dapibus mollis nisl. Aenean sed sem est.

Nam placerat, odio a sodales ornare, tortor elit ultrices sapien, nec consectetur velit nulla eget tellus. Cras vestibulum nisi in arcu molestie vehicula. Donec eu dolor leo. Cras vel augue volutpat est finibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ultrices elit quis libero cursus, quis pellentesque nisl vulputate. Sed in feugiat velit. Suspendisse ultricies blandit malesuada.`}
            </h5>

            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Nosotros;
