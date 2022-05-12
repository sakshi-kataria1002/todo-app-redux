import React from 'react'
import {shallow} from 'enzyme'
import ClickMe from '../components/ClickMeComponent'

describe('Test Case for ClickMe Button', () => {
    it('should render button', () => {
        const wrapper = shallow(<ClickMe />)
        const buttonElement = wrapper.find('#ClickMe')
        expect(buttonElement).toHaveLength(1)
        expect(buttonElement.text()).toEqual("Click Me")
    })
})
