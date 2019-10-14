import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import './style.css';

class Menu extends React.Component {
    render() {
        return (
            <header>
                <Link to="/"> 
                <FaGithub style={ {marginRight: 5 } } />
                iFollow
                </Link>
                    
                    

                </header>
        );
    }
}

export default Menu;