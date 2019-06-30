import React from 'react';
import './App.css';
import FormBuscar from './Filter.js';
import Carrousel from './Carrousel';


class ListAnimal extends React.Component {

  render() {


    const animalCards = this.props.animals.map((animalItem, i) => {

      return (
        <div className=" col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#animal"><img src={animalItem.image} className="card-img-top" alt="FotoMascota" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#animal" className="cardname">{animalItem.name}</a>
              </h4>
              <p className="card-text">{animalItem.raza} <span>&#x2022;</span> {animalItem.sex} <span>&#x2022;</span> {animalItem.Direccion}
              </p>
            </div>
            <div className="card-footer">
              <input className="btn btn-sm btn-block btn-search" type='submit' defaultValue="saber mas" onClick={(e) => this.props.goToAnimal(animalItem.id, e)} />
            </div>
          </div>
        </div>
      )
    })

    return (
      <section id="listado-animales">
        <div className="container">
          <Carrousel />
          <FormBuscar />
          <div className="row">
            {animalCards}
          </div>
        </div>
      </section>
    );
  }
}


export default ListAnimal;
