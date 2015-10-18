import React from 'react';
import Header from './home/header';
import docUtils from '../data/doc-utils.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DOCS: []
        };
    }
    init() {
        docUtils.getDocs()
            .then((dataObj) => {
                this.setState({
                    DOCS: dataObj.data
                });
            });
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return (
            <div className="container">
                <Header/>
                {React.cloneElement(this.props.children, {
                    docs: this.state.DOCS
                })}
            </div>
        );
    }
}

export default App;
