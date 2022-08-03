import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes-app-data")) || [
      {
        id: nanoid(),
        text: "this is my first note",
        date: "07-12-2021",
      },
      {
        id: nanoid(),
        text: "this is my second note",
        date: "07-12-2021",
      },
      {
        id: nanoid(),
        text: "this is my new note",
        date: "07-12-2021",
      },
    ]
  );

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState("false");

useEffect(() => {
localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
);
}, [notes]);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if(savedNotes){
    setNotes(savedNotes);   
  }
}, []);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
