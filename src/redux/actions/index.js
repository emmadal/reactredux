export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const addNoteCreator = (message) => {
  return {
    type: ADD_NOTE,
    message,
  };
};

export const deleteNoteCreator = (id) => {
  return {
    type: DELETE_NOTE,
    id
  };
};

export const updateNoteCreator = (message) => {
  return {
    type: UPDATE_NOTE,
    message,
  };
};
