import Layout from '../components/Layout';
import SidebarWidget from '../components/SidebarWidget';
import OpenBounties from '../components/OpenBounties';
import ManagedProjects from '../components/ManagedProjects';
import Head from 'next/head'
import StatusBar from '../components/statusBar.js'

const dashboardStyle = {
	alignItems: 'center',
	width: "100%",
	margin: "1%",
  backgroundColor: 'lightgrey',
  color: 'grey',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '1em',
}
const titleStyle = {
	color: "black",
}


const Dashboard = () => (
	<Layout>
    	<h1 style={titleStyle}>Dashboard</h1>
				<div style={dashboardStyle}>
					<StatusBar />
					<div>
						<OpenBounties />
					</div>
					<div>
	          <SidebarWidget/>
					</div>
					<div>
	          <ManagedProjects />
				 </div>
			 </div>
	</Layout>
);

export default Dashboard;
