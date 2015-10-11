import React from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="logo"><img src="images/logo.png" /> </div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="nav navbar-nav">
                    <IndexLink to="/">Home</IndexLink>
                    <Link to='/about'>About</Link>
                    <Link to='/docs'>Docs</Link>
                    <Link to='/contact'>Contact</Link>
                  </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default Menu;
