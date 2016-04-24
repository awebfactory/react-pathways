import React from 'react';

class CurrentStep extends React.Component {
	render() {
		let theStep = this.props.params.id ? this.props.getStep(this.props.params.id) : {}; 
		if (typeof theStep === 'undefined') {
			theStep = {title: 'no doc', description: 'description'};
		}
		return (
	        <div className="awf-header">
                <h2>{theStep.title}</h2>
                <p>{theStep.description}</p>
            </div>
		);
	}
}

export default CurrentStep;