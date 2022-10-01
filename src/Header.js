import React from "react";

const Header = (props) => {
  const updateList = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.newNote} className="add-new">
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={updateList}
        />
      </aside>
    </header>
  );
};

export default Header;
