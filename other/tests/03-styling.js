import React from 'react'
import {render} from 'enzyme'
const BoxExample = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/03-styling`).Example

test('Renders three styled boxes', () => {
  expect(render(<BoxExample />)).toMatchSnapshot()
})
