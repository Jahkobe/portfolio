import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import './Components.css';

class Nav extends Component{
    render(){
        return(
            <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light">
              <div className="container">
                <div id="navv" className="navbar-brand" href="/"><Link to="/">JP</Link></div>
                <button id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <div id="navv" className="nav-link"><Link to="/about">About</Link></div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </nav>
            
        );
    }
}

export default Nav;
