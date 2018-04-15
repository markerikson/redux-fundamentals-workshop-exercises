import React from 'react'
import {render} from 'enzyme'
const SayHello = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/02-prop-types`).default

const originalError = console.error

beforeEach(() => {
  console.error = jest.fn()
})

afterEach(() => {
  console.error = originalError
})

test('Warns with missing firstName', () => {
  renderSayHello({firstName: undefined})
  expect(console.error).toHaveBeenCalledWith(
    expect.stringMatching(/Warning.*firstName.*required/),
  )
})

test('Warns with firstName as number', () => {
  renderSayHello({firstName: 10})
  expect(console.error).toHaveBeenCalledWith(
    expect.stringMatching(/Warning.*firstName.*string/),
  )
})

test('Warns with missing lastName', () => {
  renderSayHello({lastName: undefined})
  expect(console.error).toHaveBeenCalledWith(
    expect.stringMatching(/Warning.*lastName.*required/),
  )
})

test('Warns with lastName as boolean', () => {
  renderSayHello({lastName: true})
  expect(console.error).toHaveBeenCalledWith(
    expect.stringMatching(/Warning.*lastName.*string/),
  )
})

test('Does not warn with both firstName and lastName', () => {
  renderSayHello()
  expect(console.error).not.toHaveBeenCalled()
})

function renderSayHello(props = {}) {
  return render(<SayHello firstName="Jill" lastName="Mayfield" {...props} />)
}
