import Layout from '../components/Layout';
import SidebarWidget from '../components/SidebarWidget';
import ActiveProjects from '../components/ActiveProjects';
import ActiveContributions from '../components/ActiveContributions';
import Head from 'next/head'

const styleContainer = {
	alignItems: 'center',
  backgroundColor: 'white',
  color: 'grey',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '1em',
}
const dashStyle = {
	margin: '30px',
	border: '2px',
}

const Dashboard = () => (
	<Layout>
    	<div style={styleContainer}>
      		<h1>Dashboard</h1>
      		<p>Keep track of any projects you created or are working on.</p>
          <SidebarWidget/>
          <ActiveProjects />
          <ActiveContributions />

		</div>
	</Layout>
);

export default Dashboard;
