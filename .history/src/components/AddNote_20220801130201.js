 
const AddNote  = ({ notes }) => {
return(
    <div className="note new">
         <textarea 
         rows="8" cols="10" placeholder='Type new add a note...' >
         </textarea>
         <div  className='note-footer' >
             <small>200 remaining</small>
             <button  className='save'>Save</button>
         </div>
    </div>
);
};

export default AddNote ;