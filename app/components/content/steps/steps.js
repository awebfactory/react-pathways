import React, { PropTypes } from 'react';
import StepsList from './steps-list';
import CurrentStep from './current-step';

class Steps extends React.Component {
    constructor(props){
	    super(props);
    }
    getStepByKey(key) {
    	let theStep = this.props.steps.find(step => step._id == key);
    	return theStep;
    }
    render() {
        const stepListComponent = this.props.steps.length !== 0 ? 
                        <StepsList steps={this.props.steps}/> :
                        <span><h3>Click on a step to view</h3><h4>(No steps yet! Choose your path!)</h4></span>
        return (
            <div className = "container rp-page">
            	<div className="page-header">
            	    <h1>Steps ReactPathways</h1>
            	</div>
            	<div className="row">
                    <div className="sidebar col-sm-6">
                        {stepListComponent}
                    </div>
                    <div className="content col-sm-6">
                    {React.cloneElement(this.props.children, {
                            getStep: this.getStepByKey.bind(this)
                        })}
                    </div>
            	</div>
            </div>
        );
    }
}

Steps.propTypes = {
    steps: PropTypes.array.isRequired,
    children: React.PropTypes.node
}

export default Steps;