/*import React, {Component} from 'react';
import Link from 'next/link';
import {Layout, Spinner} from '../components';
import fetch from 'isomorphic-fetch';

const Repo = ({..props}) => {
    if (props.fork) return (<div stle={{display: 'none'}}/>)
    return (
        <div className="repo">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}

class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: true
        }
    }

    async fetchRepos() {
        const response = await fetch(`https://api.github.com/repos/lightswarm124/`);
        const data = await response.json();
        return this.setState({
            repos: data,
            loading: false,
        })
    }

    componentDidMount() {
        return this.fetchRepos();
    }

    render() {
        return (
            <article id="Repositories">
                {this.state.loading && <Spinner />}
                {this.state.repos.map(repo => <Repo key={repo.id} {...repo} />)}
            </article>
        )
    }
}

export default () => (<Layout title="Repos" content={Repos}/>)


/*Layout[title=Repositories][content=Repos
 <div></div>
<p></p>
<blockquote></blockquote>
*/
