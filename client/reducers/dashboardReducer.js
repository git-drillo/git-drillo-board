import { GET_PROJECTS, SET_PROJECT, CLEAR_PROJECT } from '../actions/types';

const initialState = {
  repo: '',
  projects: [],
};

export default function dashboardRedcuer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case SET_PROJECT:
      const { value } = action.payload;
      return {
        ...state,
        repo: value,
      };

    case CLEAR_PROJECT:
      return {
        ...state,
        repo: '',
      };

    default:
      return state;
  }
}
