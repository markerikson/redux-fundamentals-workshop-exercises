import React from 'react'

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}!
    </div>
  )
}
export const Example = () => <SayHello firstName="Jill" lastName="Mayfield" />

export default SayHello
