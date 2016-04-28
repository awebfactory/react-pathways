import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Steps from '../components/content/steps/steps';

class Path extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        const { dispatch, selectedPath } = this.props
        dispatch(fetchPosts('basicDefault'))
    }
    
    render() {
        const stepsComponent = this.props.steps.length !== 0 ?
            <Steps steps={this.props.steps} children={this.props.children}  /> :
            <div className = "container rp-page">
                <h3>Loading...</h3>
            </div>
        return (
            <div className="container rp-page">
                <input placeholder="select your Path!" />
                {stepsComponent}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { selectedPath, stepsByPath } = state
    const {
        isFetching,
        lastUpdated,
        items: steps
    } = stepsByPath[selectedPath] || {
        isFetching: true,
        items: []
    }
    return {
        selectedPath,
        steps,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Path)
