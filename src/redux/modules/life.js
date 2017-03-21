import axios from 'axios';

// Actions

/*
** please see example https://github.com/erikras/ducks-modular-redux
*/
const FETCH_USERS = 'myaxa/life/fetchUsers';
const FETCH_USERS_PENDING = 'myaxa/life/fetchingUsers';
const FETCH_USERS_SUCCESS = 'myaxa/life/receivedUsers';
const FETCH_USERS_FAILED = 'myaxa/life/errorUsers';

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
    case FETCH_USERS_PENDING:
      return {...state, isLoading: true};
    case FETCH_USERS_SUCCESS:
    return {...state, users: [...action.payload], isLoading: false};
    case FETCH_USERS_FAILED:
    return {...state, isLoading: false}

    default: return state;
  }
}

// Action Creators
export function fetchUsers() {

  return function(dispatch) {
    dispatch(fetchUsersPending());
    return axios.get('https://api.github.com/users?since=135')
    .then((response) => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchUsersFailed(error));
    });
  }
}

function fetchUsersPending() {
  return { type: FETCH_USERS_PENDING };
}

function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}

function fetchUsersFailed(error) {
  return { type: FETCH_USERS_FAILED, payload: error };
}
