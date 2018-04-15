import React, {Component} from 'react'
import PropTypes from 'prop-types'

class NameForm extends Component {
  static propTypes = {
    defaultName: PropTypes.string,
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(this.input.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            defaultValue={this.props.defaultName}
            ref={node => (this.input = node)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export const Example = () => <NameForm defaultName="Marcy" />

export default NameForm
