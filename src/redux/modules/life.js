// Actions

/*
** please see example https://github.com/erikras/ducks-modular-redux
 */

const LOAD   = 'app/life/LOAD';
const CREATE = 'app/life/CREATE';
const UPDATE = 'app/life/UPDATE';
const REMOVE = 'app/life/REMOVE';

const initialState = {
  text: 'foo',
  test: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      console.log('load action');
      return { ...state, ...action.payload};
    default: return state;
  }
}

// Action Creators
export function load() {
  return { 
    type: LOAD, 
    payload: {
      text: 'bar'
    },
  };
}

export function create(widget) {
  return { type: CREATE, widget };
}

