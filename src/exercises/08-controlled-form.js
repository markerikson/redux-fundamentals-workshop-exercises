import React, {Component} from 'react'
import PropTypes from 'prop-types'

// For controlled components, the idea is that you push the values from the component
// to the consumer via callback handlers. In the context of a form, this is normally
// via `onChange` which receives the `event` (and you can get the value via
// `event.target.value`) like so:
//
//     <input onChange={event => console.log(event.target.value)} />
//
// In this scenario, you also need to provide the value for the input like so:
//
//     <input value={this.state.value} />
//
// This gives you a lot more power over the input. This is not like your ng-model
// from Angular. It's a little more low-level than that. But this control is really nice
// and building up from here is just a matter of writing some JavaScript :)
//
// Exercise
//   Render a form with an onSubmit handler that alerts the value of an input
//   Keep track of the value as the user types
//   Render a red error message via `this.props.getErrorMessage(value)` if one is returned, otherwise render the submit button
//   Don't let the user submit the form if there's an error
//
// Tips:
// - You'll want to keep `error` in state so you can check it when the form is submitted.

class NameForm extends Component {
  render() {
    return <div>Give it a go!</div>
  }
}

export const Example = () => (
  <NameForm
    getErrorMessage={value => {
      if (value.length < 3) {
        return `Value must be at least 3 characters, but is only ${value.length}`
      }
      if (!value.includes('s')) {
        return `Value does not include "s" but it should!`
      }
      return null
    }}
  />
)

export default NameForm

/*
eslint
no-unused-vars: 0,
*/
