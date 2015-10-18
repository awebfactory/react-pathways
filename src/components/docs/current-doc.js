import React from 'react';
import docUtils from '../../data/doc-utils.js'

class CurrentDoc extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        currentDoc: { title: 'Docs. Read this doc.', body: 'Edifying!'}
    };
}
    componentDidMount() {
        console.log('cdm');
    }

    componentWillUpdate() {
        console.log('cwu');
        let [root, path, theDoc] = this.props
            .id
            .split('/');
        if (typeof theDoc !== "undefined") {
            docUtils.getDoc(theDoc)
                .then((dataObj) => {
                    this.setState({
                        currentDoc: dataObj.data[0]
                    });
                })
        }
    }

    shoudComponentUpdate() {
        let [root, path, theDoc] = this.props
            .id
            .split('/');
        if (typeof theDoc !== "undefined") {
            return false;
        }
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
