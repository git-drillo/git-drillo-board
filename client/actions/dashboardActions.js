import axios from 'axios';
import { GET_PROJECTS } from './types';

/**
 * Retrieves all projects associated with a particular user
 * @param {number} id The user id
 */
export function getProjects(id) {
  return function (dispatch) {
    axios
      .get(`/api/projects/${id}`)
      .then(result =>
        dispatch({
          type: GET_PROJECTS,
          payload: result.data,
        })
      )
      .catch(({ message }) =>
        console.log({
          log: 'ERROR in getActions action creator',
          message,
        })
      );
  };
}

/**
 * Creates a project
 */
export function createProject() {
  return function (dispatch) {
    axios.post()
  }
}

// Route: /dashboard
// Route /projectboard
// landing page is landing page container

// get existing repos

// get existing collaborators for existing repo

// redirecting

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
