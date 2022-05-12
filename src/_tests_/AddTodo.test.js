import React from 'react'
import {shallow} from 'enzyme'
import AddTodo from '../components/AddTodo/AddTodo'

describe('Testing Add Todo Functionality', () => {
    it('should display the data in display todo', () => {
        // Arrange
        const wrapper = shallow(<AddTodo />)

        // Elements Actions
        const todoNameInput = wrapper.find('#todoName')
        const todoDescription = wrapper.find('#todoDescription')
        const addTodoButton = wrapper.find('#todoButton')
        expect(addTodoButton).toHaveLength(1)
    })
})
