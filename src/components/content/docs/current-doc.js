import React from 'react';

class CurrentDoc extends React.Component {
	render() {
		let theDoc = this.props.params.id ? this.props.getDoc(this.props.params.id) : {}; 
		if (typeof theDoc === 'undefined') {
			theDoc = {title: 'no doc', body: 'body'};
		}
		return (
	        <div className="awf-header">
                <h2>{theDoc.title}</h2>
                <p>{theDoc.body}</p>
            </div>
		);
	}
}

export default CurrentDoc;