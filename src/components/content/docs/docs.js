import React from 'react';
import DocsList from './docs-list';
import CurrentDoc from './current-doc';
import docUtils from '../../../helpers/doc-utils';

class Docs extends React.Component {
    constructor(){
	    super();
		this.state = {
		    docs: []
		}
    }
    init() {
        docUtils.getDocs()
        .then((dataObj) => {
           	//console.log('the data', dataObj.data);
            this.setState({
                docs: dataObj.data
            });
        });
    }
    getDocByKey(key) {
    	return this.state.docs[0];
    }
    componentDidMount() {
    	this.init();
    	//console.log('docs', this.state.docs);
    }
    render() {
        const docListComponent = this.state.docs.length !== 0 ? 
                        <DocsList docs={this.state.docs}/> :
                        <span><h3>Click on a doc to view</h3><h4>(No docs yet! Create some docs!)</h4></span>
        return (
            <div className="container">
            	<div className="jumbotron awf-header">
            	    <h1>Docs react-starter</h1>
            	</div>
            	<div className="row">
                    <div className="sidebar col-sm-6">
                        {docListComponent}
                    </div>
                    <div className="content col-sm-6">
                        {React.cloneElement(this.props.children, {
                            getDoc: this.getDocByKey.bind(this)
                        })}
                    </div>
            	</div>
            </div>
        );
    }
}

export default Docs;