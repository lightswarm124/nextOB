const openBountiesStyle = {
	color: 'red',
  height: '20em',
  width: '20em',
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


const OpenBounties = () => (
    	<div style={openBountiesStyle}>
      		<h2>Bounties in Progress </h2>
          <ul>
        	   <li> Translate Whitepaper into Chinese - icarloszz.github.com </li>
             <li> Create Menu for Home-Page - lightswarm124.github.com </li>
             <li> Fix Issue with User Login - Matt123.github.com </li>
          </ul>

		</div>

);

export default OpenBounties;
