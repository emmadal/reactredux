import { ADD_NOTE, DELETE_NOTE } from "../actions";

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.message];
    case DELETE_NOTE:
      return state.filter((data, index) => index !== action.id);
    default:
      return state;
  }
};

export default reducers;
