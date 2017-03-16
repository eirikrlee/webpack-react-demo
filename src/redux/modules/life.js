// Actions

/*
** please see example https://github.com/erikras/ducks-modular-redux
 */

const LOAD   = 'app/life/LOAD';
const CREATE = 'app/life/CREATE';
const UPDATE = 'app/life/UPDATE';
const REMOVE = 'app/life/REMOVE';

const initialState = {
  foo: 'bar',
  test: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      console.log('load action');
      return state;
    default: return state;
  }
}

// Action Creators
export function load() {
  return { type: LOAD };
}

export function create(widget) {
  return { type: CREATE, widget };
}

export function update(widget) {
  return { type: UPDATE, widget };
}

export function remove(widget) {
  return { type: REMOVE, widget };
}