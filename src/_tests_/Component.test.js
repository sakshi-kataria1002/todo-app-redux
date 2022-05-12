import React from 'react'
import {shallow} from 'enzyme'
import AddTodo from '../components/AddTodo/AddTodo'

describe('Testing Component Rendering', () => {
    it('should render correctly in debug mode', () => {
        const component = shallow(<AddTodo debug/>)
        expect(component).toMatchSnapshot()
    })
})