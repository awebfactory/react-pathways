import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <img src="images/logo.png"/>
                </div>
                <div className="jumbotron awf-header">
                    <h1>Welcome to react-starter!</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
