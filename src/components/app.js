import React from 'react';
import Header from './home/header';

class App extends React.Component {
    getDocs () {
      return [
              { title: 'title 1', body: 'body 1' },
              { title: 'title 2', body: 'body 2' },
              { title: 'title 3', body: 'body 3' }
            ]
    }
    render() {
        let data = this.getDocs();
        return (
            <div className="container">
                <Header />
                {React.cloneElement(this.props.children, {docs: {data}})}
            </div>
        );
    }
}

export default App;
