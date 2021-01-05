import { SET_NAME, SET_AGE } from '../actions/prediction';

const INITIAL_STATE = {
  name: '',
  age: undefined
};

function prediction(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      }
    case SET_AGE: {
      return {
        ...state,
        age: action.age
      }
    }
    default:
      return { ...state }
  }
};

export default prediction;
