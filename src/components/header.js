import React from 'react';
import { Link, IndexLink } from 'react-router';

const Logo = () => <div className="nav-home logo"><Link to="/"><img src="images/react-pathways-36x36.png" width="36px" height="36px" />ReactPathways</Link></div> 
const Nav = () => {
	return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul className="nav navbar-nav">
                <li><Logo /></li>
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to='about' activeClassName="active">About</Link></li>
                <li><Link to='docs' activeClassName="active">Docs</Link></li>
                <li><Link to='contact' activeClassName="active">Contact</Link></li>
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