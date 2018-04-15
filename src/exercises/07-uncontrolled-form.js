import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Pretty much every application is going to need to do something with forms
// There are two ways to handle forms elements with React.
// First, there's Uncontrolled inputs. They're arguably easier, but less powerful.
//
// The basic idea of uncontrolled components is you pull the value out of the DOM
// element when you need it. To do this, you need to get a reference to the element.
// You can either get a reference via an event handler `event` argument (`event.target`),
// or by using the special `ref` prop on the element like so:
//
//     <input ref={node => this.input = node} />
//
// From there you can reference the input node elsewhere in your component methods.
//
// Exercise
//   Render a form with an onSubmit handler that alerts the value of an input
//
// Tips:
// - You'll need an <input type="submit" value="Submit" />
// - Don't forget to do `event.preventDefault()` in your event handler
// - Bonus points for adding a defaultValue prop to the <input>

class NameForm extends Component {
  render() {
    return <div>Render a form here</div>
  }
}

export const Example = () => <NameForm defaultName="Marcy" />

export default NameForm

/*
eslint
no-unused-vars: 0,
*/
