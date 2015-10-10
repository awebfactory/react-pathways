import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="page-header awf-header">
        <h1>Welcome to react-starter!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
