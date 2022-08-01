import NotesList from './components/NotesList';
import { useStae }  from 'react';


 const App = () =>{
   const [notes, setNotes] = useState([{
    id:"nan"
     text: "this is my first note",
     date:"07-12-2021"
   }]);
   return(
    <div className="container" >
      <NotesList />
    </div>
   )
 }

 export default App;