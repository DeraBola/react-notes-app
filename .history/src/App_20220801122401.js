import NotesList from './components/NotesList';
import { useStae }  from 're'


 const App = () =>{
   const [notes, setNotes] = useStae();
   return(
    <div className="container" >
      <NotesList />
    </div>
   )
 }

 export default App;