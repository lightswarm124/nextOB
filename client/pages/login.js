import React from 'react';
import Link from 'next/link';
import {Layout} from '../components'


class login extends React.Component {
    redirectToGithub() {
      window.location.href = "http://github.com/login/oauth/authorize?client_id=79a74ecd4f74e041ef36&redirect_uri=http%3A%2F%2Fapi.openbounty.co%2Fauth%2Fauthorize?state=1001&scope=user%20user%3Aemail%20user%3Afollow%20public_repo%20repo%20read%3Arepo_hook%20write%3Arepo_hook%20admin%3Arepo_hook";
    }

    render() {
        return (
            <div>
                <button>
                    <img src="/static/github.svg" onClick={this.redirectToGithub} />
                    LOGIN WITH GITHUB
                </button>
            </div>
        )
    }
}

export default () => (<Layout title="Login" content={login}/>)
