import React from 'react';
import Header from './home/header';
import DOCS from '../data/docs.js'

class App extends React.Component {

    render() {
        let theState = this.state;
        return (
            <div className="container">
                <Header />
                {React.cloneElement(this.props.children, {docs: DOCS})}
            </div>
        );
    }
}

export default App;
