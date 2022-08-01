import NotesList from './components/NotesList';
 
 const App = () =>{
   const [notes, setNotes] = use
   return(
    <div className="container" >
      <NotesList />
    </div>
   )
 }

 export default App;