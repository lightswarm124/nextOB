import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'
import Layout from '../components/Layout';

class Dapp extends React.Component {
  state = { balance: "n/a" }

  storeValue = async () => {
    const { accounts, contract } = this.props
    await contract.set(500000000, { from: accounts[0] })
    alert('Stored 5 into account')
  }

  getValue = async () => {
    const { accounts, contract } = this.props
    let response = await contract.get.call({ from: accounts[0] })
	//response = response.toNumber();
	console.log(response);
	//response = Number(response.substring(2));
    this.setState({ balance: response.toNumber() })
  }

  render () {
    const { balance = 0 } = this.state
    return (
		<Layout>
	      <div>
	        <h1>My Dapp</h1>

	        <button onClick={this.storeValue}>Store 5 into account balance</button>
	        <button onClick={this.getValue.bind(this)}>Get account balance</button>
	        <div>Balance: {balance}</div>

	        <div><Link href='/accounts'><a>My Accounts</a></Link></div>
	        <div><Link href='/'><a>Home</a></Link></div>
	      </div>
		</Layout>
    )
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, accounts, contract }) => (
      <Dapp web3={web3} accounts={accounts} contract={contract} />
    )}
  />
)
