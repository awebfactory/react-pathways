import React from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="logo"><img src="images/logo.png" /> </div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active"><IndexLink to="/">Home</IndexLink></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/docs'>Docs</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default Menu;
