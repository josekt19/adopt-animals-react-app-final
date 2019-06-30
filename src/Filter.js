import React from 'react';
import ListAnimal from './ListAnimal';



class FormBuscar extends React.Component {
    constructor() {
        super();
        this.state = {
            breedFilter: 0
        };
        this.handleFilterType = this.handleFilterType.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilterType = (e) => {
        this.setState({ typeFilter: e.target.value });
        this.props.onSetFilters({ typeFilter: e.target.value });
    }

    handleFilterBreed = (e) => {
        this.setState({ breedFilter: e.target.value });
        this.props.onSetFilters({ breedFilter: e.target.value });
    }
    handleFilterZone = (e) => {
        this.setState({ zoneFilter: e.target.value });
        this.props.onSetFilters({ zoneFilter: e.target.value });
    }

    handleFilter(e) {
        e.preventDefault();
        this.props.onSetFilters(this.state);
    }
    render() {
        return (

            <section className="search-sec" onSubmit={this.handleFilter}>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-sm-12 p-0 filters">
                                        <select className="form-control-filter filter " id="filterBySex"
                                            onChange={this.filterBySex}>

                                            <option disabled defaultValue>Sexo</option>
                                            <option>Macho</option>
                                            <option>Hembra</option>


                                        </select>
                                    </div>


                                    <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                                        <select className="form-control-filter filter" id="FiltroTipo">
                                            <option disabled defaultValue>Tipo</option>
                                            <option>Perro</option>
                                            <option>Gato</option>
                                            <option>Aves</option>
                                            <option>Reptiles</option>
                                            <option>Peces</option>
                                            <option>todas las opciones</option>
                                            <option>Vaca</option>
                                        </select>
                                    </div>

                                    <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                                        <select className="form-control-filter filter" onChange={this.handleFilterBreed} id="FiltroRaza">
                                            <option disabled defaultValue>Raza</option>
                                            <option>Beagle</option>
                                            <option>bulldog</option>
                                            <option>Golden</option>
                                            <option>chihuaua</option>
                                            <option>Puddle</option>
                                            <option>Sin especificar</option>
                                        </select>
                                    </div>

                                    <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                                        <select className="form-control-filter filter" id="FiltroNombre">
                                            <option disabled defaultValue>Nombre</option>
                                            <option>Blanca</option>
                                            <option>Candy</option>
                                            <option>Pinky</option>
                                            <option>Enzo</option>
                                            <option>Brownie</option>
                                            <option>Gla</option>
                                            <option>Sin nombre</option>

                                        </select>
                                    </div>

                                    <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                                        <select className="form-control-filter filter" id="FiltroBarrio">
                                            <option disabled defaultValue>Barrio</option>
                                            <option>La Blanqueada</option>
                                            <option>Pocitos</option>
                                            <option>parque Battle</option>
                                            <option>Centro</option>
                                            <option>Buceo</option>
                                            <option>Todos</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-2 col-md-3 col-sm-12 p-0 filters">
                                        <select className="form-control-filter filter" id="FiltroPelo">
                                            <option disabled defaultValue>Color de pelo</option>
                                            <option>blanco</option>
                                            <option>Negro</option>
                                            <option>Marron</option>
                                            <option>Beige</option>
                                            <option>con manchas</option>
                                            <option>Todos</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-1 col-md-3 col-sm-12 p-0 filters">
                                        <button type="submit" className="btn btn-search ">Filtrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


            </section>
        );
    }
}


export default FormBuscar;