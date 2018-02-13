

const managedProjectsStyle = {
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


const widgetTitle= {
  color: 'darkgrey',
  fontSize: '18px',

}

const ManagedProjects= () => (
    	<div style={managedProjectsStyle}>
      		<h2 style={widgetTitle}>Owned/Managed Projects</h2>
          <p> Oh no!...</p>
          <p> You currently have do not own or manage any projects. Start a new project
           by selecting a Github repository, or have someone delegate you to manage theirs</p>

		</div>

);

export default ManagedProjects;
