import NotesList from './components/NotesList';
import { useStae }  from 'react';


 const App = () =>{
   const [notes, setNotes] = useStae([{
     text: th
   }]);
   return(
    <div className="container" >
      <NotesList />
    </div>
   )
 }

 export default App;