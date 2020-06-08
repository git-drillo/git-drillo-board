import axios from 'axios';
import { GET_PROJECTS, CREATE_PROJECT } from './types';

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
export function createProject(repo) {
  return function (dispatch) {
    axios
      .post('/api/create-project', repo)
      .then(result => {
        const { isCreated } = result
        if (isCreated) {
          dispatch({
            type: CREATE_PROJECT,
            payload: result.data,
          })
        } else {
          dispatch({})
        }
      })
      .catch(({ message }) =>
        console.log({
          log: 'ERROR in createProject action creator',
          message,
        })
      );
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
