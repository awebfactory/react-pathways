import React from 'react';
import { Link, IndexLink } from 'react-router';

const Logo = () => <div className="nav-home logo"><Link to="/"><img src="images/react-pathways-36x36.png" width="36px" height="36px" />ReactPathways</Link></div> 
const Nav = () => {
	return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#rf-navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Logo />
                </div>
                <div className="collapse navbar-collapse" id="rf-navbar">
                    <ul className="nav navbar-nav">
                        <li>
                            <IndexLink to="/" activeClassName="active">Home</IndexLink>
                        </li>
                        <li>
                            <Link to='about' activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to='docs' activeClassName="active">Docs</Link>
                        </li>
                        <li>
                            <Link to='contact' activeClassName="active">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
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