import React from 'react';
import docUtils from '../../data/doc-utils.js'

class CurrentDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDoc: {}
        };
    }
    
    getCurrentDoc(props) {
        var id = props
            ? props.params.id
            : this.props.params.id
        docUtils.getDoc(id)
            .then((dataObj) => {
                this.setState({
                    currentDoc: dataObj.data[0]
                });
            })
    }

    componentDidMount() {
        this.getCurrentDoc();
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.getCurrentDoc(nextProps))
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
