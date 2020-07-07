export const BoardActionTypes = {
    ADD_NEW_NOTE: 'ADD_NEW_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    SAVE_NOTE: 'SAVE_NOTE'
}

const deleteNoteUnsafe = (id) => {
    return {
        type: BoardActionTypes.DELETE_NOTE,
        id
    }
}

export const deleteNote = (id) => (dispatch, getState) => {
    dispatch(deleteNoteUnsafe(id));
}

const addNewNoteUnsafe = () => {
    return {
        type: BoardActionTypes.ADD_NEW_NOTE
    }
}

export const addNewNote = () => (dispatch, getState) => {
    dispatch(addNewNoteUnsafe());
}

const saveNoteUnsafe = (note) => {
    return {
      type: BoardActionTypes.SAVE_NOTE,
      note
    };
}

export const saveNote = (note) => (dispatch, getState) => {
  dispatch(saveNoteUnsafe(note));
}
