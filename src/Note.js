import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    props.onType(props.note.id, "title", e.target.value);
  };
  const updateDescription = (e) => {
    props.onType(props.note.id, "description", e.target.value);
  };
  const removeThisNote = () => {
    props.deleteNote(props.note.id);
  };
  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span onClick={removeThisNote} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
