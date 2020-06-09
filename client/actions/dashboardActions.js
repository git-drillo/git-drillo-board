import axios from 'axios';
import { GET_PROJECTS, CREATE_PROJECT, SET_PROJECT, CLEAR_PROJECT } from './types';

/**
 * Retrieves all projects associated with a particular user
 * The user id is supplied through cookies
 */
export function getProjects() {
  return function (dispatch) {
    axios
      .get(`/api/projects`)
      .then(result => {
        dispatch({
          type: GET_PROJECTS,
          payload: result.data,
        });
      })
      .catch(({ message }) =>
        console.log({
          log: 'ERROR in getProjects action creator',
          message,
        })
      );
  };
}

/**
 * Creates a project from an existing Github repo
 * @param {object} repo
 */
export function submitProject() {
  return function (dispatch, getState) {
    const { repo } = getState().project;
    axios
      .post(`/api/create-project`, { repo })
      .then(() =>
        dispatch({
          type: CLEAR_PROJECT,
        })
      )
      .catch(err => console.log('ERROR IN SUBMIT_PROJECT', err));
  };
}

/**
 *
 */
export function setProject(changes) {
  return {
    type: SET_PROJECT,
    payload: changes,
  };
}

// Retrieves pending projects? - stretch maybe
// export function getPending(id) {
//   return function (dispatch) {
//     axios.get(`/api/pending/${id}`)
//       .then(res => (
//         dispatch({
//           type: GET_PENDING,
//           payload: res.data
//         })
//       ))
//   }
// }
