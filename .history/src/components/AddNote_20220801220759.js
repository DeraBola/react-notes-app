import { useState }  from 'react';
const AddNote  = () => {
    const [noteText, setnoteText] = useState('');

    const handleChange = (event) =>{
        setnoteText=(event.target.value);
    };

return(
    <div className="note new">
         <textarea 
         rows="8" cols="10" placeholder='Type add new note...' 
         value=
         onChange={handleChange}
         ></textarea>
         <div  className='note-footer' >
             <small>200 remaining</small>
             <button  className='save'>Save</button>
         </div>
    </div>
);
};

export default AddNote ;