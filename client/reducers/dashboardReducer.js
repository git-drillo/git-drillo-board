import axios from 'axios';
import { GET_PROJECTS } from '../actions/types';

/**
 * Retrieves all projects associated with a particular user
 * @param {number} id The user id
 */
export function getProjects(id) {
  return function (dispatch) {
    axios
      .get(`/api/projects/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROJECTS,
          payload: res.data,
        })
      )
      .catch(({ message }) =>
        console.log({
          log: 'ERROR in getActions action creator',
          message
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
