import {
    REQUEST_STEPS, RECEIVE_STEPS
} from '../actions'

function paths(state = [], action) {
    switch (action.type) {
        case REQUEST_STEPS:
        case RECEIVE_STEPS:
            return state
        default:
            return state
   } 
}

export default paths