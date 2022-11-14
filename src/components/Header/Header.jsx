import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import risa from '../../../src/assets/audio/risa-nengo.mp3';

const nengoFlowSound= ()=>{
    return (
    <audio src={risa} autoPlay={true}>
    </audio>
    )
}

const Header = () => {
  return (
    <div className="header">
      <ul className="header-list">
        <Link className="header-links" to="/" >INICIO</Link>
        <Link className="header-links" exact to="/discography" >DISCOGRAFIA</Link>
        <Link className="header-links" exact to="/bio" onClick={nengoFlowSound()}>BIO</Link>
        <Link className="header-links" exact to="/events">EVENTOS</Link>
        <Link className="header-links" exact to="/videos">VIDEOS</Link>
      </ul>
    </div>
  );
};

export default Header;
