import React from 'react';
import Header from './header';
import Content from './content';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Content>
                    <h1>Welcome to react-starter</h1>
                </Content>
            </div>
        );
    }
}

export default App;
