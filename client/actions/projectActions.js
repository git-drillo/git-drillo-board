import axios from 'axios';
import { GET_PROJECT_TASKS, CREATE_TASK } from './types';

/**
 * Retrieves all tasks associated with a particular project divided in two arrays: in progress and done
 * @param {number} id The project id
 */
export function getProjectTasks(id) {
  return function (dispatch) {
    axios
      .get(`/api/tasks/${id}`)
      .then(result =>
        dispatch({
          type: GET_PROJECT_TASKS,
          payload: result.data,
        })
      )
      .catch(err => console.log('ERROR IN GET_PROJECT_TASKS', err));
  };
}

/**
 * Create a new task for a project
 * @param {number} id The project id
 */
export function createTask(id, task) {
  console.log('creating task')
  return
  return function (dispatch) {
    axios
      .post(`/api/tasks/${id}`, task)
      .then(result =>
        dispatch({
          type: CREATE_TASK,
          payload: result.data,
        })
      )
      .catch(err => console.log(err));
  };
}

/**
 * Delete task
 * @param {number} id The project id
 */
export function deleteTask(id) {
  console.log('delete task')
  return
  return function (dispatch) {
    axios
      .post(`/api/tasks/${id}`, task)
      .then(result =>
        dispatch({
          type: CREATE_TASK,
          payload: result.data,
        })
      )
      .catch(err => console.log(err));
  };
}

/**
 * Edit task
 * @param {number} id The project id
 */
export function editTask(id) {
  console.log('edit task')
  return
  return function (dispatch) {
    axios
      .post(`/api/tasks/${id}`, task)
      .then(result =>
        dispatch({
          type: CREATE_TASK,
          payload: result.data,
        })
      )
      .catch(err => console.log(err));
  };
}

