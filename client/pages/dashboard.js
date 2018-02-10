import Layout from '../components/Layout';
import SidebarWidget from '../components/SidebarWidget';
import ActiveProjects from '../components/ActiveProjects';
import ActiveContributions from '../components/ActiveContributions';


const Dashboard = () => (
	<Layout>
    	<div>
      		<h1>Dashboard</h1>
      		<p>Keep track of any projects you created or are working on.</p>
          <SidebarWidget/>
          <ActiveProjects />
          <ActiveContributions />

		</div>
	</Layout>
);

export default Dashboard;
