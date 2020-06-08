import { GET_PROJECT_TASKS, CREATE_TASK, REFRESH_TASKS } from '../actions/types';

const initialState = {
  inProgress: [
    {
      task: 'Create login button',
      status: 'inProgress',
      assignedDev: 'none',
      userId: '7bc',
      commitMessage: 'done with button creation',
      commitUrl: 'http://github/foo/bar',
      pending: false,
      commit_sha: 'longString',
    },
  ],
  done: [
    {
      task: 'Create login button',
      status: 'done',
      assignedDev: 'none',
      userId: '7bc',
      commitMessage: 'done with button creation',
      commitUrl: 'http://github/foo/bar',
      pending: true,
      commit_sha: 'longString',
    },
    {
      task: 'Create login button',
      status: 'done',
      assignedDev: 'none',
      userId: '7bc',
      commitMessage: 'done with button creation',
      commitUrl: 'http://github/foo/bar',
      pending: false,
      commit_sha: 'longString',
    },
    {
      task: 'Create login button',
      status: 'done',
      assignedDev: 'none',
      userId: '7bc',
      commitMessage: 'done with button creation',
      commitUrl: 'http://github/foo/bar',
      pending: true,
      commit_sha: 'longString',
    },
  ],
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_TASKS:
    case REFRESH_TASKS:
      const { done, inProgress } = action.payload;
      return {
        ...state,
        done,
        inProgress,
      };
    case CREATE_TASK:
      // Update todo list without mutating state
      const inProgressList = state.inProgress.slice();
      inProgressList.push(action.payload);
      return {
        ...state,
        inProgress: inProgressList,
      };
    
    case REFRESH_TASKS:
      { done, inProjess}
    default:
      return state;
  }
}
