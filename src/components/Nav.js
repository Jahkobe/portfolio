import React, {Component} from 'react';
import './Components.css';

class Nav extends Component{
    render(){
        return(
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a id="navv" className="navbar-brand" href="#">Home</a>
            <button id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <a id="navv" className="nav-link" href="tour.html">About</a>
                </li>
                <li className="nav-item">
                    <a id="navv" className="nav-link" href="cart.html">Projects</a>
                </li>
              </ul>
            </div>
          </div>
            </nav>
        );
    }
}

export default Nav;
