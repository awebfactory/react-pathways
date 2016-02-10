import React from 'react';

class CurrentDoc extends React.Component {
	render() {
		let thisDoc = this.props.params.id ? this.props.getDoc(this.props.params.id) : {}; 
		return (
	        <div className="awf-header">
                <h2>{thisDoc.title}</h2>
                <p>{thisDoc.body}</p>
            </div>
		);
	}
}

export default CurrentDoc;