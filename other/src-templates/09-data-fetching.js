import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
// WORKSHOP_START
// for our data fetching needs, we're going to use axios.get (imported above)
//
// It is best not to fetch data from a server in the `render` method. As we
// saw in the last exercise any change to the state of a component can cause
// a re-render of the component. This will likely happen more often than we
// want. It is best to use another lifecycle method `componentDidMount` to
// make these requests. This method will be called once before the component
// is inserted into the document, regardless of how many times `render` is
// called.
//
// Example:
//
// ```
// class UserProfile extends Component {
//   state = {user: {}}
//   static propTypes = {
//     username: PropTypes.number.isRequired,
//     fetch: PropTypes.func,
//   }
//   static defaultProps = { fetch: axios.get } // doing this allows you to pass a mock version as a prop
//
//   componentDidMount() {
//     this.props.fetch(`/users/${this.props.username}`)
//       .then(
//         ({data: user}) => this.setState({user}),
//         // should add an error handler here :)
//       )
//   }
//
//   render() {
//     const {user} = this.state
//     return (
//       <div>
//         <div>First name: {user.firstName}</div>
//         <div>Last name: {user.lastName}</div>
//         <div>Email address: {user.emailAddress}</div>
//       </div>
//     )
//   }
// }
//
// UserProfile.propTypes = {
//   username: PropTypes.number.isRequired
// }
// ```
//
// See https://facebook.github.io/react/docs/component-specs.html
//
// Exercise:
//
//  Create a `RepoListContainer` component that lists all the GitHub repos for a user.
//  Allow the user to be provided as a prop.
//
//  https://api.github.com/users/{username}/repos
//
// Tip:
// - You may end up getting throttled by GitHub if you keep refreshing and making unauthenticated requests to their API
//   to avoid this, I recommend you return some fake data in `componentDidMount` and only implement that when you're
//   done with everything else.
// WORKSHOP_END

class RepoListContainer extends Component {
  // FINAL_START
  static propTypes = {
    username: PropTypes.string.isRequired,
    fetch: PropTypes.func,
  }
  static defaultProps = { fetch: axios.get }
  state = {repos: null, loading: false, error: null}

  componentDidMount() {
    this.fetchRepos()
  }

  fetchRepos() {
    this.setState({repos: null, loading: true, error: null})
    this.props.fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=100&sort=pushed`)
      .then(
        ({data: repos}) => this.setState({repos, error: null, loading: false}),
        error => this.setState({repos: null, error, loading: false})
      )
  }

  // FINAL_END
  render() {
    // WORKSHOP_START
    return (
      <div>
        User repos! Render RepoList in here.
        For extra credit, you should handle loading and error state as well.
      </div>
    )
    // WORKSHOP_END
    // FINAL_START
    const {repos, loading, error} = this.state
    const {username} = this.props
    return (
      <div>
        {!loading ? null : <div>Loading...</div>}
        {!error ? null : (
          <div>
            Error loading info for <code>{username}</code>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
        {!repos ? null : <RepoList username={username} repos={repos} />}
      </div>
    )
    // FINAL_END
  }
}

function RepoList({username, repos}) {
  return (
    // WORKSHOP_START
    <div>render the user's name in an h1 and the repos in ul>li</div>
    // WORKSHOP_END
    // FINAL_START
    <div>
      <h1>{username}'s repos</h1>
      <ul style={{textAlign: 'left'}}>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>
        })}
      </ul>
    </div>
    // FINAL_END
  )
}
RepoList.propTypes = {
  // WORKSHOP_START
  // add prop types for username and repos
  // WORKSHOP_END
  // FINAL_START
  username: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  // FINAL_END
}

// WORKSHOP_START
export const Example = () => (
  <div>Render the RepoListContainer here</div>
)
// WORKSHOP_END
// FINAL_START
export const Example = () => (
  <RepoListContainer username="kentcdodds" fetch={mockFetch} />
)
// FINAL_END

// This is for you. Merry Christmas 🎅 🎄 🎁
function mockFetch() {
  const delay = 0 // set this to `Number.MAX_VALUE` test the loading state
  const sendError = false // set this to `true` to test out the error state
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sendError) {
        reject({
          message: 'Something went wrong',
          status: 500,
        })
      } else {
        resolve({
          data: [
            {id: 12345, name: 'turbo-sniffle'},
            {id: 54321, name: 'ubiquitous-succotash'},
            {id: 43234, name: 'solid-waffle'},
          ]
        })
      }
    }, delay)
  })
}

export default RepoListContainer

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
