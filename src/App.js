import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Animal from './Animal.js';
import ListAnimal from './ListAnimal.js';
import Register from './Register.js';


import { baseAnimals } from './db.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      section: 1,
      currentAnimal:0,
      baseAnimals
    };
    this.handleAddAnimal = this.handleAddAnimal.bind(this);
  }

  handleAddAnimal(animalitem) {
    this.setState({
      baseAnimals: [...this.state.baseAnimals, animalitem]
    });
    
  }

   

  goToListAnimals = () => {
    this.setState({
      section: 1
    });
  }

  goToRegister = () => {
    this.setState({
      section: 2
    });
  }

  goToAnimal = (e) => {
    this.setState({
      section: 3,
      currentAnimal: e
      
    });
  }

  

  currentSection() {
    if (this.state.section === 1) {
      return <ListAnimal 
      goToAnimal={this.goToAnimal}
      animals={this.state.baseAnimals} />;
    }

    if (this.state.section === 2) {
      return <Register 
      onAddAnimal={this.handleAddAnimal}/>;
    }


    if (this.state.section === 3) {
      return <Animal animalItem ={this.state.baseAnimals.find(item =>item.id===this.state.currentAnimal)}/>;
    }
  }


  render() {

    return (
      <main>
        <Header 
        
        goToListAnimals={this.goToListAnimals}
        goToRegister={this.goToRegister}
        />
        {this.currentSection()}
        
        <Footer />

      </main>
    );
  }
}

export default App;
