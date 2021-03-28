import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: [],
  error: null,
  dataById: null
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        data: Object.values(action.payload.data)
      };
    case actionTypes.ERROR_DATA:
      if (state.data.length > 0) {
        return {
          ...state,
          error: null
        }
      }
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default transaction;