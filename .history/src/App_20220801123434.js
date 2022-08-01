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
     text: "this is my third note",
     date:"07-12-2021",
   }, {
    id: nanoid(),
     text: "this is my fourth note",
     date:"07-12-2021",
   },
  ]);
   return(
    <div className="container" >
      <NotesList notes={n}   />
    </div>
   )
 }

 export default App;