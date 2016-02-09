import React from 'react';
import DocsList from './docs-list';

class Docs extends React.Component {
    constructor(){
	    super();
		this.state = {
		    docs: []
		}
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
            	</div>
            </div>
        );
    }
}

export default Docs;