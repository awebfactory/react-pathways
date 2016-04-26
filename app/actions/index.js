export const RECEIVE_PATHS = 'RECEIVE_PATHS'

export const getSteps = (selectedPath = "basicDefault") => {
    return {
        type: RECEIVE_PATHS,
        selectedPath
    }
}