import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const WrappedRepoListContainer = fetchDataComponent(RepoListContainer)

function fetchDataComponent(Comp) {
  return class FetchData extends Component {
    static propTypes = {
      username: PropTypes.string,
      fetch: PropTypes.func,
    }
    static defaultProps = {
      fetch: axios.get,
    }
    state = {repos: null, loading: false, error: null}

    componentDidMount() {
      this.fetchRepos()
    }

    fetchRepos() {
      this.setState({repos: null, loading: true, error: null})
      this.props
        .fetch(
          `https://api.github.com/users/${this.props
            .username}/repos?per_page=100&sort=pushed`,
        )
        .then(
          ({data: repos}) =>
            this.setState({repos, error: null, loading: false}),
          error => this.setState({repos: null, error, loading: false}),
        )
    }
    render() {
      // we're spreading the state of repos, loading, and error as props to the Comp
      // we're forwarding the props given to this component to the child Comp
      return <Comp {...this.state} {...this.props} />
    }
  }
}

function RepoListContainer({username, repos, loading, error}) {
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
}

RepoListContainer.propTypes = {
  username: PropTypes.string.isRequired,
  // honestly, I'm short-cutting here because it's a little wild. Ask me if you're curious.
  repos: PropTypes.any,
  error: PropTypes.any,
  loading: PropTypes.bool,
}

function RepoList({username, repos}) {
  return (
    <div>
      <h1>{username}'s repos</h1>
      <ul style={{textAlign: 'left'}}>
        {repos.map(repo => {
          return <li key={repo.id}>{repo.name}</li>
        })}
      </ul>
    </div>
  )
}
RepoList.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export const Example = () => (
  <WrappedRepoListContainer username="kentcdodds" fetch={mockFetch} />
)

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
          ],
        })
      }
    }, delay)
  })
}

export default WrappedRepoListContainer
