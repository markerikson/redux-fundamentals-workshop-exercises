import React from 'react'

function SayHello(props) {
  // WORKSHOP_START
  // Return JSX that uses the firstName and lastName values from the props argument
  // to render "Hello {props.firstName} {props.lastName}" in a div
  return (
    <div>Incomplete</div>
  )
  // WORKSHOP_END
  // FINAL_START
  return (
    <div>Hello {props.firstName} {props.lastName}!</div>
  )
  // FINAL_END
}
// WORKSHOP_START
// export an example that specifies a firstName and a lastName
// as props to the SayHello component
export const Example = () => (
  <div>Incomplete</div>
)
// WORKSHOP_END
// FINAL_START
export const Example = () => (
  <SayHello firstName="Jill" lastName="Mayfield" />
)
// FINAL_END

export default SayHello

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
