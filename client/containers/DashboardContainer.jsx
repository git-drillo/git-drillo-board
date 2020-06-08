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

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, createProject } = this.props;
    return (
      <div>
        {/* <TitleBar header={this.state.header} returnToProjectsBoard={this.returnToProjectsBoard} /> */}
        <Dashboard projects={projects} createProject={createProject} />
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
