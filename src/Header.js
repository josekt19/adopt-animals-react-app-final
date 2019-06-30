import React from 'react';
import './App.css';



class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top barrappal">
          <a className="navbar-brand">
            <img src="Assets/KolitasVector.png" className="logokolitas" onClick={this.props.goToListAnimals} alt="KolitasLogo" />
          </a>
          <span className="navbar-brand mb-0 h1">KolitasUy!</span>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="#register" onClick={this.props.goToListAnimals}><i className="fas fa-home"></i> Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={this.props.goToListAnimals}><i className="fas fa-list"></i> Catalogo</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#register" onClick={this.props.goToRegister}><i className="fas fa-plus-circle"></i> Registro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""> <i className="fas fa-blog"></i> Blog</a>
              </li>
            </ul>
            <div className="btn-group dropdown">
              <button type="button" className="btn btn-secundary btn-sm dropdown-toggle nav-link" data-toggle="dropdown"
                data-display="static" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </nav>

      </header>

    );
  }
}

export default Header;
