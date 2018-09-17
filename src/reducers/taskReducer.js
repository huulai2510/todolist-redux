import * as types from '../constants/actionType'

const initialState = [
    {
        name: 'Learn React',
        status: true
    },
    {
        name: 'Learn Node',
        status: true
    },
    {
        name: 'Learn MongoDB',
        status: false
    }
    ,
    {
        name: 'Learn Express',
        status: true
    }
]

const taskReducer =  (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.ADD_TASK:
            state.push(action.task)
            return state
        case types.DELETE_TASK:
            index = findIndex(state, action.id)
            state.splice(index, 1)
            return [...state]
        case types.UPDATE_TASK:
            index = findIndex(state, action.task.id)
            state[index] = {
                name: action.task.name,
                status: action.task.status
            }
            return state
        default:
            return state
    }
}

const findIndex = ( state, id) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if(i === id){
            return index = i            
        }
    }
    return index
}

export default taskReducer