import * as types from '../constants/actionType'

export const actAddTask = task => {
    return {
        type: types.ADD_TASK,
        task
    }
}


export const actDeleteTask = id => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const actUpdateTask = task => {
    console.log(task)
    return {
        type: types.UPDATE_TASK,
        task
    }
}