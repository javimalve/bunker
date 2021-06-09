import React, { Component } from "react";
import '../styles/navBar.css'; 

class NavBar extends Component {
  render() {
    return (
      <nav className="topnav">
        <a className="active" href="#home">TuTienda</a>
        <a href="#news">Productos</a>
        <a href="#contact">Oportunidades</a>
        <a href="#about">Nosotros</a>
    </nav>
    );
  }
}

export default NavBar;