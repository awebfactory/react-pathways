import { connect } from 'react-redux'
import Steps from '../components/content/steps/steps';

const mapStateToProps = (state) => {
    return {
        steps: state
    }
}

const Path = connect(
    mapStateToProps
)(Steps)

export default Path
