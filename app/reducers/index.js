import {
    RECEIVE_PATHS
} from '../actions'

const paths = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PATHS:
            return state
        default:
            return state
   } 
}

export default paths