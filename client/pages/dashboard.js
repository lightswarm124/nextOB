import Layout from '../components/Layout';
import Accounts from '../components/Accounts';
import Web3Container from '../lib/Web3Container'

const Dashboard = (props) => (
  <Layout>
    <div>
      <h1>OpenBounty</h1>
      <p>OpenBounty Dashboard</p>
    </div>
	<Accounts />
  </Layout>
);

Dashboard.getInitialProps = async function() {
	return {
		web3: web3,
		accounts: accounts
	};
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ web3, accounts }) => <Dashboard web3={web3} accounts={accounts} />}
  />
)
