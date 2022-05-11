import { todoActionTypes } from "./todo.type"

export const showTodo = (todoList) => ({
    type: todoActionTypes.SHOW_TODOS,
    payload: todoList
})

export const editTodo = (todoList) => ({
    type: todoActionTypes.EDIT_TODOS,
    payload: todoList
})
