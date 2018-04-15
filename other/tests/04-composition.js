import React from 'react'
import {render} from 'enzyme'
const Person = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/04-composition`).default

test('renders a person', () => {
  expect(
    render(
      <Person
        name="Kent C. Dodds"
        title="JavaScript Developer"
        avatar="http://kentcdodds.com/photo-512.png"
        twitter="kentcdodds"
        github="kentcdodds"
      />,
    ),
  ).toMatchSnapshot()
})
