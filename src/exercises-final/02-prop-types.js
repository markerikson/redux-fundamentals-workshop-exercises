// Learn more about React PropTypes here: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
import React from 'react'
import PropTypes from 'prop-types'

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}!
    </div>
  )
}

SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export const Example = () => <SayHello firstName="Jill" lastName="Mayfield" />

export default SayHello
