/**
 * @module  LandingPageContainer
 * @author Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders a Landing Page component
 */

import React from 'react';
import { connect } from 'react-redux';
import * as dashboardActions from '../actions/dashboardActions';
import { bindActionCreators } from 'redux';
import LandingPage from '../components/LandingPage.jsx';

function LandingPageContainer(props) {
  const { projects, createProject } = props;
  return (
    <div>
      {/* <TitleBar header={this.state.header} returnToProjectsBoard={this.returnToProjectsBoard} /> */}
      <LandingPage projects={projects} createProject={createProject} />
    </div>
  );
}

const mapStateToProps = state => ({
  projects: state.dashboard.projects,
});

const mapDispatchToProps = dispatch => bindActionCreators(dashboardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);
