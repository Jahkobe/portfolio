import React, {Component} from 'react';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Project from './components/Projects.js';
import {BrowserRouter} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import Card from './components/Cards.js';
import './App.css';

class App extends Component {
  render(){
  return (
    <BrowserRouter>

    <div className="landingPage">
      <h1 id="landingHeader" className="slide-top landingHeader">Hello My name is Jacob Pursell and I am a Software Developer</h1>
    </div>
    <div className="App">
        <Nav />
      <div className="container">
        <Route path="/" exact component={Home}/>
        <Route path="/" exact component={Card}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Project}/>


      </div>
      <Route path="/" exact component={Footer}/> 
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
