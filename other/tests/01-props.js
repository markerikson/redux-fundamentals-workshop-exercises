import React from 'react'
import {render} from 'enzyme'
const SayHello = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/01-props`).default

test('Renders "Hello {props.firstName} {props.lastName}" in a div', () => {
  expect(render(<SayHello firstName="Jill" />)).toMatchSnapshot()
})
