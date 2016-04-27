export const REQUEST_STEPS = 'REQUEST_STEPS'
export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const SELECT_PATH = 'SELECT_PATH'
export const INVALIDATE_PATH = 'INVALIDATE_PATH'

export function selectPath(path) {
  return {
    type: SELECT_PATH,
    path
  }
}

export function invalidatePath(path) {
  return {
    type: INVALIDATE_PATH,
    path
  }
}

export const requestSteps = (selectedPath = "basicDefault") => {
    return {
        type: REQUEST_STEPS,
        selectedPath
    }
}

export const receiveSteps = (selectedPath, json) => {
    return {
        type: RECEIVE_STEPS,
        selectedPath,
        paths: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}