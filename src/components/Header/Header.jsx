import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import risa from "../../../src/assets/audio/risa-nengo.mp3";


const risaNengo = new Audio(risa);
const start = () => {
  risaNengo.play();
};



const Header = () => {

  return (
    <div className="header">
      <ul className="header-list">
        <Link className="header-links" exact to="/">
          INICIO
        </Link>
        <Link className="header-links" exact to="/discography">
          DISCOGRAFIA
        </Link>
        <Link className="header-links" exact to="/bio" onClick={start}>
          BIO
        </Link>
        <Link className="header-links" exact to="/events">
          EVENTOS
        </Link>
        <Link className="header-links" exact to="/videos">
          VIDEOS
        </Link>
      </ul>
    </div>
  );
};

export default Header;
