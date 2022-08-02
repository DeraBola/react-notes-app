import NotesList from './components/NotesList';
import { useState }  from 'react';
import { nanoid }  from 'nanoid';
 const App = () =>{
   const [notes, setNotes] = useState([
     {
    id: nanoid(),
     text: "this is my first note",
     date:"07-12-2021",
   }, 
   {
    id: nanoid(),
     text: "this is my second note",
     date:"07-12-2021",
   }, 
   {
    id: nanoid(),
     text: "this is my new note",
     date:"07-12-2021",
   }, 
  ]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

   return(
    <div className="container" >
      <NotesList notes={notes} 
       handleAddNote={addNote} 
       handleDeleteNote={/>
    </div>
   )
 }

 export default App;