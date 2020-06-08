import { GET_PROJECTS } from '../actions/types';

const initialState = {
  projects: [],
};

export default function dashboardRedcuer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
