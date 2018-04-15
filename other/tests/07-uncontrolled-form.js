import React from 'react'
import {render, mount} from 'enzyme'
const NameForm = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/07-uncontrolled-form.js`).default

const originalAlert = global.alert

beforeEach(() => {
  global.alert = jest.fn()
})

afterEach(() => {
  global.alert = originalAlert
})

test('renders the form properly', () => {
  expect(render(<NameForm />)).toMatchSnapshot()
})

test('alerts with the value on submit', () => {
  const wrapper = mount(<NameForm />)
  const input = wrapper.find('input').first()
  const value = 'Hello world'
  input.instance().value = value
  const form = wrapper.find('form')
  form.simulate('submit')
  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith(value)
})

test('sets the default value of the input', () => {
  const defaultName = 'Joey'
  const wrapper = mount(<NameForm defaultName={defaultName} />)
  const input = wrapper.find('input').first()
  expect(input.instance().value).toEqual(defaultName)
})
