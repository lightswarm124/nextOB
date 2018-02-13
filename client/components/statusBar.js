const statusBarStyle = {
	color: 'green',
  height: '22em',
  width: '100%',
  alignItems: 'center',
  flexAlign: 'center',
  backgroundColor: '#ffffff',
  border: '1px solid #eeeeee',
  display: 'flex',
  display: 'flexbox',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '1em',
  padding: '1em',

}

const StatusBar = () => (
    	<div style={statusBarStyle}>
        <span>
          <h2>User:</h2>
          <h3>Github Account: </h3>
        </span>
        <span>
          <h2>Wallet Balance</h2>
          <p> ETH: </p>
          <p> OTHER: </p>
        </span>



		</div>

);

export default StatusBar;
