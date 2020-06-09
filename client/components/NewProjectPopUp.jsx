import React from 'react';
import { connect } from 'react-redux';
import { submitProject, setProject } from '../actions/dashboardActions';

function NewProjectPopUp(props) {
  console.log(props)
  return (
    <div className="popup">
      <div className="popup_inner">
        <h3>New Project...</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.submitProject();
          }}
        >
          <label>
            Repo:
            <input
              type="text"
              name="repo"
              value={props.repo}
              onChange={e => props.setProject(e.target)}
            />
          </label>
          <input type="submit" value="Submit" />
          <button>Submit</button>
        </form>
        <button onClick={props.closePopUp}>x</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  repo: state.project.repo,
});

const mapDispatchToProps = dispatch => ({
  submitProject: () => dispatch(submitProject()),
  setProject: changes => dispatch(setProject(changes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPopUp);
