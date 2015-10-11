import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="logo"><img src="images/logo.png" /> </div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Content</a></li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default Menu;
