import React from 'react';
import { Link, IndexLink } from 'react-router';

const Logo = () => <div className="logo"><Link to="/"><img src="images/logo.png" /></Link></div> 
const Nav = () => {
	return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul className="nav navbar-nav">
                <li><Logo /></li>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/docs'>Docs</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

class Header extends React.Component {
  render(){
    return (
        <div className="row">
            <Nav />
        </div>
 	);
  }
}

export default Header;