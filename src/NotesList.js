import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const renderNote = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      deleteNote={props.deleteNote}
    />
  );

  const allNotes = props.notes.map(renderNote);
  const noteElements = allNotes.filter(
    (item) => item.props.note.doesMatchSearch === true
  );

  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
