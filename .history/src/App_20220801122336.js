import NotesList from './components/NotesList';
import { u}  from


 const App = () =>{
   const [notes, setNotes] = useStae();
   return(
    <div className="container" >
      <NotesList />
    </div>
   )
 }

 export default App;