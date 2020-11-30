import React, {Component} from 'react';
import './Components.css';

class Footer extends Component{
    render(){
        return(
            <div className="page-container">
                <footer>
                    <ul className="footerul" >
                        <a href="https://www.linkedin.com/in/jacobpursell/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Jahkobe">
                            <i className="fab fa-github" ></i>
                        </a>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;