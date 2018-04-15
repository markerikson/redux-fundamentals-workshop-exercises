import React from 'react'
import {render} from 'enzyme'
const NameForm = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/08-controlled-form.js`).default

const originalAlert = global.alert

beforeEach(() => {
  global.alert = jest.fn()
})

afterEach(() => {
  global.alert = originalAlert
})

test('renders the form properly', () => {
  expect(render(<NameForm getErrorMessage={() => {}} />)).toMatchSnapshot()
})
