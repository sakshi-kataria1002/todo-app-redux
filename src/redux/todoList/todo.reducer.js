import { todoActionTypes } from './todo.type'

const INITIAL_STATE = {
    todoList: []
}

export const todoReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case todoActionTypes.SHOW_TODOS:
            return{
                ...state,
                todoList: action.payload
            }
        case todoActionTypes.EDIT_TODOS:
            return{
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
}
