import React from 'react';
import docUtils from '../../data/doc-utils.js'

class CurrentDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDoc: {}
        };
    }
    init() {
        docUtils.getDoc(this.props.params.id)
            .then((dataObj) => {
                this.setState({
                    currentDoc: dataObj.data[0]
                });
            })
    }

    componentDidMount() {
        this.init();
    }

    render() {

        return (
            <div className="awf-header">
                <h2>{this.state.currentDoc.title}</h2>
                <p>{this.state.currentDoc.body}</p>
            </div>
        );
    }
}

export default CurrentDoc;
