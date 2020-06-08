import { GET_PROJECTS } from '../actions/types';

const initialState = {
  projects: [
    {
      title: 'foobar',
      isOwner: true,
    },
    {
      title: 'foobar',
      isOwner: true,
    },
    {
      title: 'foobar',
      isOwner: true,
    },
    {
      title: 'foobar',
      isOwner: false,
    },
    {
      title: 'foobar',
      isOwner: true,
    },
    {
      title: 'foobar',
      isOwner: false,
    },
  ],
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
