import React, {Component} from 'react';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Card from './components/Cards.js';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
        <Nav />
      <div className="container">
        <Home />
        <Card />
        <Footer />
      </div>
    </div>
  );
  }
}

export default App;
