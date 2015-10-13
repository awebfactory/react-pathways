import React from 'react';
import Menu from './menu';

class Header extends React.Component {
    render() {
        return (
            <div className="page-header">
                < Menu />
            </div>
        );
    }
}

export default Header;
