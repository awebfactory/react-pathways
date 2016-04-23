import React from 'react';
import StepsList from './steps-list';
import CurrentStep from './current-step';
import utils from '../../../helpers/utils';

class Steps extends React.Component {
    constructor(){
	    super();
		this.state = {
		    steps: []
		}
    }
    init() {
        utils.getSteps()
        .then((dataObj) => {
            // console.log(dataObj);
            this.setState({
                steps: dataObj.data
            });
        });
    }
    getStepByKey(key) {
    	let theStep = this.state.steps.find(step => step._id == key);
    	return theStep;
    }
    componentDidMount() {
    	this.init();
    }
    render() {
        const stepListComponent = this.state.steps.length !== 0 ? 
                        <StepsList steps={this.state.steps}/> :
                        <span><h3>Click on a step to view</h3><h4>(No docs yet! Create some docs!)</h4></span>
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

export default Steps;