import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  newNote = () => {
    const currentNotes = this.state.notes;
    const updatedNotes = [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      },
      ...currentNotes
    ];
    this.setState({ notes: updatedNotes });
  };

  deleteNote = (noteId) => {
    const currentNotes = [...this.state.notes];
    const updatedNotes = currentNotes.filter((note) => {
      return note.id !== noteId;
    });
    this.setState({ notes: updatedNotes });
  };

  onType = (editedId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editedId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  onSearch = (searchValue) => {
    this.setState({ searchText: searchValue.toLowerCase() });
    const currentNotes = [...this.state.notes];
    const updatedNotes = currentNotes.map((note) => {
      const title = note.title.toLowerCase();
      const desc = note.description.toLowerCase();
      if (
        title.includes(searchValue.toLowerCase()) ||
        desc.includes(searchValue.toLowerCase())
      ) {
        note.doesMatchSearch = true;
        return note;
      } else {
        note.doesMatchSearch = false;
        return note;
      }
    });
    this.setState({ notes: updatedNotes });
  };

  componentDidUpdate() {
    const stateString = JSON.stringify(this.state.notes);
    localStorage.setItem("stateString", stateString);
  }

  componentDidMount() {
    const stateString = localStorage.getItem("stateString");
    if (stateString) {
      const savedState = JSON.parse(stateString);
      this.setState({ notes: savedState });
    }
  }

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          newNote={this.newNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
