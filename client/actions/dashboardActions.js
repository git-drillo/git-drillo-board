import { GET_PROJECTS } from './types';

const initialState = {
  projects: [],
};

export default function dashboardActions(state = initialState, action) {
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
