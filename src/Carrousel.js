import React from 'react';
import './App.css';


class Carrousel extends React.Component {
  render() {
    return (

      
      <div className="container">
        <br />
      <br />
    <div className="col-lg-12">

      <div id="carouselExampleIndicators" className="carousel slide my-4 carrusel" data-ride="carousel">
        <ol className="carousel-indicators carrusel">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block img-fluid dog-banner carrusel"
              src="https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/11/16/Recortada/img_cperezg_20171116-123107_imagenes_lv_terceros_istock-685469924-kqOH-U432920756498MzF-992x558@LaVanguardia-Web.jpg"
              alt="First slide" /> 
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid dog-banner carrusel"
              src="https://www.dogalize.com/wp-content/uploads/2016/11/Perros-en-adopcion-adoptar-adopta-mascota.jpg"
              alt="Second slide" /> 
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid dog-banner carrusel"
              src="http://www.universalmedios.com.ar/wp-content/uploads/2018/07/perro-1.jpg" alt="Third slide" /> 
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
      </div>
      

              );
            }
          }
          
          export default Carrousel;
