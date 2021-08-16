import React from 'react';
import { ThemeContext } from './ThemeContext';
import fetch from 'node-fetch';


class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://github-api-python.herokuapp.com/gh-vals/derpferpmerp',{
          headers : {
            'Content-Type': 'text/event-stream',
            'Accept': 'text/event-stream'
          }
        })
        .then(response => response.json())
        .then(data => this.setState({ repos: data }));
    }

    render() {
        const { repos } = this.state;
        if (repos === null) {

        } else {
          Object.entries(repos).reduce((RepoName,[rn,RepoURL]) => {
            console.log(`RepoName: ${(RepoName === undefined) ? rn : RepoName}\nRepoURL: ${RepoURL}`)
          })
          console.log(repos);
        }
        return (
          <div>
            <p>Repositories: {JSON.stringify((repos === null) ? "Grepping" : repos)}</p>
          </div>
        );
    }

    mnt() {
      return this.state.repos;
    }
}
export default GetRequest;
// just calling myFunction() here so it runs when the file is loaded

//https://api.github.com/users/derpferpmerp/repos
