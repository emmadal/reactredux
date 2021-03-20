import { addNoteCreator, deleteNoteCreator } from "../actions";
export const mapStateToProps = (state) => {
  return {
    message: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (message) => dispatch(addNoteCreator(message)),
    deleteNote: (id) => dispatch(deleteNoteCreator(id)),
  };
};
