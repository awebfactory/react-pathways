import React, { PropTypes } from 'react';
import { Link } from 'react-router'

class StepsList extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h3>Click on a step to view</h3>
                </div>
                <ul>
                    {this
                        .props
                        .steps
                        .map(step => (
                            <li key={step._id}>
                                <Link to={`/steps/${step._id}`}>{step.title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

StepsList.propTypes = {
    steps: PropTypes.array.isRequired,
    children: React.PropTypes.node
}

export default StepsList;