import Link from 'next/link'
import Web3Container from '../lib/Web3Container'
import Layout from '../components/Layout';

class GetAccounts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addressList: "N/A"
		};
	}

	getAddress = async() => {
		const { accounts, web3 } = this.props;
		let output = await web3.eth.accounts[0];
		this.setState({ addressList: output.toString() });
	}
/*
	getEthBalance = async () => {
		const { accounts, web3 } = this.props;
		const balanceInWei = await web3.eth.getBalance(accounts[0]);
		this.setState({ ethBalance: balanceInWei / 1e18 });
	}
*/
	render() {

		return (
		  <div>
			<ul className="list-group">
			  {this.state.addressList}
			</ul>
			<br/>
			<select onChange={e => this.setState({address: e.target.value})} className="form-control">
			  <option value="USD" onClick={this.getAddress}>USD</option>
			  <option value="GBP" onClick={this.getAddress}>GBP</option>
			  <option value="EUR" onClick={this.getAddress}>EUR</option>
			</select>
		  </div>
		);
	};
}

export default () => (
	<Web3Container
		renderLoading={() => <div>Loading Accounts...</div>}
		render={({ accounts, web3 }) => <GetAccounts accounts={accounts} web3={web3} />}
	/>
);
