export const RECEIVE_PATHS = 'RECEIVE_PATHS'

export const receiveSteps = (selectedPath = "basicDefault") => {
    return {
        type: RECEIVE_PATHS,
        selectedPath
    }
}

export const fetchSteps