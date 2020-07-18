import React, {Component} from 'react';
import './Components.css';

class Footer extends Component{
    render(){
        return(
            <footer>
                <ul className="footerul">
                    <a>
                        <li className="footerli">Linkedin</li>
                    </a>
                    <a>
                        <li className="footerli">Github</li>
                    </a>
                </ul>
            </footer>
        )
    }
}

export default Footer;