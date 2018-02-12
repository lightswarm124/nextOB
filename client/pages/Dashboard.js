import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'
import Layout from '../components/Layout';
import Accounts from '../components/Accounts';


const Dashboard = ({ accounts }) => (
	<Layout>
	  <div>
	    <h1>My Accounts</h1>
	    <Accounts />
	    <div><Link href='/dapp'><a>My Dapp</a></Link></div>
	    <div><Link href='/'><a>Home</a></Link></div>
	  </div>
	</Layout>
)

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ accounts }) => <Dashboard accounts={accounts} />}
  />
)
