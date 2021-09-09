import React from 'react';
import '../css/footer.scss';
import {FaTwitch,FaInstagram} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer mt-auto">
            <a href="https://www.twitch.tv/593fighters" className="blanco-nav"><h3 className="my-0 mx-2 "><FaTwitch></FaTwitch></h3></a>
            <a href="https://www.instagram.com/593fighters/" className="blanco-nav"><h3 className="my-0 mx-2"><FaInstagram></FaInstagram></h3></a>
        </div>
    );
}

export default Footer;
