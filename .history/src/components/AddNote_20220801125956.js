import Note from './Note';

const AddNote  = ({ notes }) => {
return(
    <div className="note new">
         <textarea 
         rows="8" cols="10" placeholder='Type new add a note...' >
         </textarea>
         <div  className='note-footer' >
             <small>200 remaining</small>
             <bu
         </div>
    </div>
);
};

export default AddNote ;