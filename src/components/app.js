import React from 'react';
import Header from './home/header';

class App extends React.Component {

    render() {
        let theState = this.state;
        return (
            <div className="container">
                <Header />
                {React.cloneElement(this.props.children, {docs: theState})}
            </div>
        );
    }
}

export default App;
