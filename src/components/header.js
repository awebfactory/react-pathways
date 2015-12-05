import React from 'react';
import { Link, IndexLink } from 'react-router';

const Logo = () => <div className="logo"><Link to="/"><img src="images/logo.png" /></Link></div> 
const Nav = () => {
	return (
	    <nav>
	        <IndexLink to="/">Home</IndexLink>
            <Link to='/about'>About</Link>
            <Link to='/docs'>Docs</Link>
            <Link to='/contact'>Contact</Link>
	    </nav>
    )
}

class Header extends React.Component {
  render(){
    return (
        <div className="row">
            <Logo />
            <Nav />
        </div>
 	);
  }
}

export default Header;