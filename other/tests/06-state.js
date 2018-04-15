import React from 'react'
import assert from 'assert'
import chalk from 'chalk'
import {render, mount} from 'enzyme'
const StopWatch = require(`../../src/${process.env.TEST_DIR ||
  'exercises'}/06-state`).default

jest.useFakeTimers()

test('renders the StopWatch markup', () => {
  expect(render(<StopWatch />)).toMatchSnapshot()
})

test('interacting with the stop watch', () => {
  const wrapper = mount(<StopWatch />)
  const startStopButton = wrapper.find('button').first()
  const clearButton = wrapper.find('button').last()

  startStopButton.simulate('click')
  let lastMs = 0
  jest.runOnlyPendingTimers()
  const label = wrapper.find('label').first()
  const getCurrentMs = () => Number(label.text().split('ms')[0])

  assert(
    getCurrentMs() > lastMs,
    chalk.red('Time lapsed is not incrementing and rerendering'),
  )
  assert.equal(
    startStopButton.text(),
    'Stop',
    chalk.red('The start button did not change to "Stop" when clicked'),
  )

  startStopButton.simulate('click')

  lastMs = getCurrentMs()
  jest.runOnlyPendingTimers()

  assert.equal(
    lastMs,
    getCurrentMs(),
    chalk.red('Time is not stopping when clicking the stop button'),
  )
  assert.equal(
    startStopButton.text(),
    'Start',
    chalk.red('The stop button did not change to "Start" when clicked'),
  )

  clearButton.simulate('click')
  jest.runOnlyPendingTimers()

  assert.equal(
    getCurrentMs(),
    0,
    chalk.red('Lapse is not resetting to 0 when clicking the clear button'),
  )

  startStopButton.simulate('click')
  jest.runOnlyPendingTimers()
  clearButton.simulate('click')
  jest.runOnlyPendingTimers()

  assert.equal(
    getCurrentMs(),
    0,
    chalk.red(
      'Lapse is not resetting to 0 when clicking the clear button while the stopwatch is going',
    ),
  )
})
