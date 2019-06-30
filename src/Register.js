import React from 'react';
import './App.css';


class Form extends React.Component {

  constructor() {
    super();
    this.state = {
        section:3
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
}

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
        [name]: value
})
}

handleSubmit(e) {
    e.preventDefault();
    this.props.onAddAnimal(this.state);
    this.setState.handleInput=''
    this.setState({
      name: '',
      image: 'assets/dog.jpg'
    });
}
  render() {

    

    return (
      
      <div className="container Registro">
  <br />
  <br />
  
  

  <h2>Datos de mascota</h2>
  <br/> 
  <form className="form-group" onSubmit={this.handleSubmit}>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="type-dog">Tipo de animal</label>
        <input onChange={this.handleInput} id="type" name="type" type="text" className="form-control"  placeholder="Tipo de animal" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="name">Nombre de animal</label>
        <input onChange={this.handleInput} id="name" name="name" type="text" className="form-control" placeholder="Opcional" />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="Direccion">Barrio</label>
        <input  onChange={this.handleInput} id="Direccion" name="Direccion" type="text" className="form-control" placeholder="Ingrese direccion" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputRaza">Raza</label>
        <input onChange={this.handleInput} id="raza" name="raza" type="text" className="form-control" placeholder="Raza" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputNacimiento">Nacimiento</label>
        <input onChange={this.handleInput} id="Nacimiento" name="Nacimiento" type="date" className="form-control" placeholder="Fecha de Nacimiento" />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="Sex">Sexo</label>
        <select onChange={this.handleInput} id="Sex" name="sex" className="form-control" placeholder="Sexo">
          
          <option id="sex">Macho</option>
          <option id="sex">Hembra</option>
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputColor">Color de Ojos</label>
        <input  onChange={this.handleInput} id="ojos" name="ojos"type="text" className="form-control" />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputColor">Color de Pelo</label>
        <input  onChange={this.handleInput} id="pelo" name="pelo"type="text" className="form-control" />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="inputDescripcion">Descripcion</label>
        <textarea onChange={this.handleInput} id="descripcion" name="descripcion" className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">Cargar imagen</span>
      </div>
      <div className="custom-file">
        <input  onChange={this.handleInput} id="image" name="image" type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
        <label className="custom-file-label" htmlFor="inputGroupFile01">Cargar Imagen</label>
      </div>
    </div>
    <section className="contacto">
      < br/> 
      <h2>Datos de contacto</h2>
    </section>
    <form>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="contacto">Nombre y apellido</label>
          <input type="text" className="form-control" id="ContactName" placeholder="Nombre de contacto" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="telefo">Telefono de contacto</label>
          <input  onChange={this.handleInput} id="pelo" name="Telefono" type="Telefono" className="form-control" placeholder="ingrese Telefono"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required />
          <span className="note">Formato: 09x123456</span>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="Email">Email</label>
          <input  onChange={this.handleInput} id="Email" name="Email"type="Email" className="form-control"  placeholder="Email" />
        </div>



      </div>
      <br/> 
      <button type="submit" className="btn btn-lg btn-block btn-search">Registrar nueva adopcion</button>
    </form>
    </form>
    <br/> 

</div>
    );
  }
}

export default Form;
