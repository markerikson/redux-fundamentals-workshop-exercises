import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Div} from 'glamorous'

import Exercises from './exercises'
import Final, {List} from './exercises-final'

function App() {
  return (
    <Router>
      <Route
        path="/"
        render={props => (
          <Div
            display="flex"
            marginLeft={20}
            marginRight={20}
            css={{
              '& > *': {
                paddingLeft: 10,
                paddingRight: 10,
                borderRight: '1px solid',
              },
              '& > *:last-child': {
                paddingRight: 0,
                borderRight: 'none',
              },
            }}
          >
            <div
              style={{
                width: '20vw',
                minWidth: 200,
                maxWidth: 400,
              }}
            >
              <h1 style={{textAlign: 'center'}}>Exercises</h1>
              <List {...props} />
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <h1 style={{textAlign: 'center'}}>Your Implementation</h1>
              <Exercises {...props} />
            </div>
            <div style={{flex: 1}}>
              <h1 style={{textAlign: 'center'}}>Final Implementation</h1>
              <Final {...props} />
            </div>
          </Div>
        )}
      />
    </Router>
  )
}

export default App
