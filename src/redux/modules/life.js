import axios from 'axios';

// Actions

/*
** please see example https://github.com/erikras/ducks-modular-redux
*/

// const LOAD   = 'myaxa/life/LOAD';
// const CREATE = 'myaxa/life/CREATE';
// const UPDATE = 'myaxa/life/UPDATE';
// const REMOVE = 'myaxa/life/REMOVE';

const FETCH_USERS = 'myaxa/life/fetchUsers';
const FETCHING_USERS = 'myaxa/life/fetchingUsers';
const RECEIVED_USERS = 'myaxa/life/receivedUsers';
const ERROR_FETCHING_USERS = 'myaxa/life/errorUsers';

const initialState = {
  text: 'foo',
  test: [],
  users: [],
  isLoading: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case FETCH_USERS:
      return state;
      return {...state, ...action.payload};
    case FETCHING_USERS:
      return {...state, isLoading: true};
    case RECEIVED_USERS:
    return {...state, users: [...action.payload], isLoading: false};

    case ERROR_FETCHING_USERS:
    return {...state, isLoading: false}

    default: return state;
  }
}

// Action Creators
export function fetchUsers() {

  return function(dispatch) {
    dispatch(fetchingUsers());
    return axios.get('https://api.github.com/users?since=135')
    .then((response) => {
      dispatch(receivedUsers(response.data));
    })
    .catch((error) => {
      dispatch(errorFetchingUsers(error));
    });
  }
}

function fetchingUsers() {
  return { type: FETCHING_USERS };
}

function receivedUsers(users) {
  return { type: RECEIVED_USERS, payload: users };
}

function errorFetchingUsers(error) {
  return { type: ERROR_FETCHING_USERS, payload: error };
}
