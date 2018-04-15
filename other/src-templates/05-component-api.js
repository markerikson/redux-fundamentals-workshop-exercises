import React, {Component} from 'react'
// FINAL_START
import PropTypes from 'prop-types'

class ContrivedComponent extends Component {
  static contextTypes = {color: PropTypes.string} // used to have access to context. You wont use this much...
  static defaultProps = {setExternalState: () => {}}
  static propTypes = {setExternalState: PropTypes.func}
  state = {clicks: 0} // can also be initialized in the constructor

  /**
   * often you don't need a constructor
   * and most of the time you want to avoid doing things with props in here
   * but this is a contrived component, so I'm doing fancy stuff :)
   */
  constructor(props, context) {
    super(props, context)
    this.externalState = {constructor: 1}
    console.log('constructor')
    props.setExternalState(this.externalState)
  }
  /**
   * called right before mounting (and therefore before render)
   * triggering setState will not trigger a re-render
   * Avoid side-effects
   * Only lifecycle hook called when server rendering
   * all that said, it's recommended to not use this and use the constructor if possible
   */
  componentWillMount() {
    this.push('componentWillMount')
  }
  /**
   * called right after mounting (and therefore, after render)
   * if you need to initialize DOM stuff (like a jQuery plugin) that goes here
   * Network requests go here
   * calling setState will result in an immediate re-render (generally avoid)
   * that said, calling setState in an async callback in here is 👌 and you'll likely do it often
   */
  componentDidMount() {
    this.push('componentDidMount')
  }
  /**
   * called right before an already mounted component gets new props
   * Common to compare nextProps to this.props
   * Sometimes you'll use this to reset state based on props.
   * Can be called even if props haven't changed
   */
  componentWillReceiveProps(nextProps, nextContext) {
    this.push('componentWillReceiveProps', {nextProps, nextContext})
  }
  /**
   * ** You'll practically never need to use this **
   * Only useful for serious optimizations _after_ profiling
   * Called before rendering an already mounted component
   * returning `false` will prevent componentWillUpdate, render, and componentDidUpdate from being called
   * You may consider extending from React.PureComponent which will do a shallow prop/state comparison for you
   * but again, only after profiling
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    this.push('shouldComponentUpdate', {nextProps, nextState, nextContext})
    return nextProps.shouldUpdate
  }
  /**
   * Called right before re-rendering a mounted component
   * Unsure of good use cases for this honestly ¯\_(ツ)_/¯
   * You cannot call setState here (use componentWillReceiveProps instead)
   */
  componentWillUpdate(nextProps, nextState, nextContext) {
    this.push('componentWillUpdate', {nextProps, nextState, nextContext})
  }
  /**
   * Called right after re-rendering a mounted component
   * Good to operate on the updated DOM (like with a jQuery plugin)
   * Good for making network requests (make sure to compare previous props with current props)
   */
  componentDidUpdate(prevProps, prevState, nextContext) {
    this.push('componentDidUpdate', {prevProps, prevState, nextContext})
  }
  /**
   * Called right before a mounted component is unmounted and destroyed
   * This is where you clean up after yourself to avoid memory leaks
   * Remove custom added event handlers, remove elements you created yourself,
   *   cancel network requests, clearInterval, etc.
   */
  componentWillUnmount() {
    this.push('componentWillUnmount')
  }

  /**
   * don't look here, this is nothing :)
   */
  push(name, args = {}) {
    if (!this.externalState.hasOwnProperty(name)) {
      this.externalState[name] = []
    }
    const thingToPush = {
      ...args,
      props: this.props,
      state: this.state,
      context: this.context,
    }
    this.externalState[name].push(thingToPush)
    console.log(name, thingToPush)
  }

  /**
   * this is an event handler used in render
   */
  onButtonClick = () => {
    const {clicks} = this.state
    const newClicks = clicks + 1
    const groupName = `Child state update: clicks ${newClicks}`
    console.groupCollapsed(groupName)
    this.setState({clicks: newClicks}, () => {
      console.groupEnd(groupName)
    })
  }

  /**
   * this is an event handler used in render
   */
  onForceUpdateClick = () => {
    const groupName = 'force update'
    console.groupCollapsed(groupName)
    this.forceUpdate(() => {
      console.groupEnd(groupName)
    })
  }

  render() {
    this.push('render')
    const {clicks} = this.state
    return (
      <div style={{padding: 20, border: 'solid 4px #ddd'}}>
        Hi! I'm the child. Here are my props:
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <div>
          <button onClick={this.onButtonClick}>Click me</button> to update
          state. Clicks: {clicks}
        </div>
        <div>
          <button onClick={this.onForceUpdateClick}>Force update</button>
        </div>
      </div>
    )
  }
}

class ContrivedComponentContainer extends Component {
  // used for context... You wont do this much...
  static childContextTypes = {color: PropTypes.string}
  getChildContext() {
    return {color: 'purple'}
  }

  state = {
    renderChild: true,
    count: 0,
    shouldChildUpdate: true,
  }
  _childState = null
  componentWillMount() {
    console.groupCollapsed('mounting -> mounted')
  }
  componentDidMount() {
    console.groupEnd('mounting -> mounted')
  }
  toggleRenderChild = event => {
    this._childState = null
    const {checked: renderChild} = event.target
    const groupName = `Parent state update: renderChild ${renderChild}`
    this.setStateWithLog(groupName, {renderChild})
  }
  toggleShouldChildUpdate = event => {
    const {checked: shouldChildUpdate} = event.target
    const groupName = `Parent state update: shouldChildUpdate ${shouldChildUpdate}`
    this.setStateWithLog(groupName, {shouldChildUpdate})
  }
  increment = () => {
    const {count} = this.state
    const newCount = count + 1
    const groupName = `Parent state update: count ${newCount}`
    this.setStateWithLog(groupName, {count: newCount})
  }
  setStateWithLog(groupName, state) {
    console.groupCollapsed(groupName)
    this.setState(state, () => {
      console.groupEnd(groupName)
    })
  }
  render() {
    const {renderChild, shouldChildUpdate} = this.state
    return (
      <div>
        <div style={{fontSize: '2em', fontWeight: 'bold'}}>
          Hi! I'm a contrived component
        </div>
        <div style={{fontSize: '1.5em'}}>
          Don't worry, you don't have to do anything with this one. Just explore
          the code :)
        </div>
        <div>
          I'm here to teach you about the component API! I'll update every time
          you click this button to show you what lifecycle events have happened
          on my child component:
        </div>
        <div>
          <button onClick={this.increment}>Increment Count</button>
        </div>
        <div>
          Also, check out the console which may be slightly more instructive :)
        </div>
        <div>
          <label>
            Unmount child:
            <input
              type="checkbox"
              checked={renderChild}
              onChange={this.toggleRenderChild}
            />
          </label>
        </div>
        <div>
          <label>
            Should child component update?
            <input
              type="checkbox"
              checked={shouldChildUpdate}
              onChange={this.toggleShouldChildUpdate}
            />
          </label>
        </div>
        {renderChild ? (
          <ContrivedComponent
            count={this.state.count}
            setExternalState={s => (this._childState = s)}
            shouldUpdate={shouldChildUpdate}
          />
        ) : null}
        <pre>{JSON.stringify(this._childState, null, 2)}</pre>
      </div>
    )
  }
}

export const Example = () => <ContrivedComponentContainer />

export default ContrivedComponentContainer
// FINAL_END

// WORKSHOP_START
export const Example = () => <div>Just look at the final</div>

/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
