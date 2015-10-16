import React from 'react';
import Header from './home/header';

class App extends React.Component {
    componentDidMount() {
      this.state = {};
      this.state.data = {
            docs: [
              { title: 'title 1', body: 'body 1' },
              { title: 'title 2', body: 'body 2' },
              { title: 'title 3', body: 'body 3' }
            ]
      }
    }
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
