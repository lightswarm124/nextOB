const sidebarWidgetStyle = {
	color: 'green',
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

const SidebarWidget = () => (
    	<div style={sidebarWidgetStyle}>
      		<h2>Accounts</h2>
          <ul>
        	   <li> 0xHGIGkbsiGIYGDyihvsdksfd</li>
             <li> 0xH523HIfhuufvsdksfdHHSDS</li>
          </ul>

		</div>

);

export default SidebarWidget;
