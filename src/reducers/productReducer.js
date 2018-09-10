import * as types from '../constants/actionType'

const initialState = [
    {
        name: 'học bơi',
        status: false
    },
    {
        name: 'học react',
        status: true
    },
    {
        name: 'học node',
        status: false
    },
    {
        name: 'học mongodb',
        status: false
    }
]

const productReducer = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.DELETE_TASK:
            index = findIndex(state, action.id)
            if(index !== -1){
                state.splice(index, 1)
            }
            console.log(state)
            return [...state]
        case types.ADD_TASK:
            state.push(action.task)
            return state
        case types.UPDATE_TASK:
            state[action.task.id] = {
                name: action.task.name,
                status: action.task.status
            }
            return state
        default:
            return state
    }
}

const findIndex = (state, id) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if(i == id){
            index = i  
            break
        }      
    }
    return index
}

export default productReducer