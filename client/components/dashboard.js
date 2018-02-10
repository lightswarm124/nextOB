import Layout from '../components/Layout';
import Web3Container from '../lib/Web3Container';

class Dashboard extends React.Component {
	constructor (accounts) {
		super();
		this.state = {
			accList: accounts,
			activeAcc: accounts[0],
		}
	}

	render () {
		console.log(this.state);
		return (
			<Layout>
				<div>
					<h1>Dashboard</h1>
					<div>{this.state.activeAcc}</div>
				</div>
			</Layout>
		);
	}
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ accounts }) => <Dashboard accounts={accounts} />}
  />
)
