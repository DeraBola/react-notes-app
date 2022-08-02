
import { MdDeleteForever } from 'react-icons/md'

const Note  = ( {id, text, date, handleDeleteNote} ) => {
    return(
        <div className='note'>
             <span>{ text }</span>
             <div className="note-footer">
                <small>{ date }</small>
                <MdDeleteForever   className='delete-icon' size='0.7cm' />
             </div>
        </div>
    );
    };
    
    export default Note;