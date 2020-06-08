/**
 * @module  DashboardContainer
 * @author Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders a Landing Page component
 */

import React from 'react';
import { connect } from 'react-redux';
import { getProjects, createProject } from '../actions/dashboardActions';
import Dashboard from '../components/Dashboard.jsx';
import TitleBar from '../components/TitleBar.jsx';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: 'fizzbuzz',
      createNewProjectPopUp: false,
    }
  }

  createNewProject = () => {
    this.setState({
      createNewProjectPopUp: !this.state.createNewProjectPopUp
    });
  }

  refresh = () => {
    console.log('"refresh"');
  }

  render() {
    const { projects, createProject } = this.props;
    return (
      <div>
        <TitleBar header={this.state.userName} refresh={this.refresh} redirectRoute="/" redirectMessage="Back to login" />
        <Dashboard projects={projects} /*createProject={createProject}*/ createNewProject ={this.createNewProject} createNewProjectToggle={this.state.createNewProjectPopUp}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.dashboard.projects,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
  createProject: () => dispatch(createProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
