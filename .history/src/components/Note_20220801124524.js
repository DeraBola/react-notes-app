
import { MdDeleteForever } from 'react-icons/md'

const Note  = ( {id, text, date} ) => {
    return(
        <div className='note'>
             <span> span>
             <div className="note-footer">
                <small>01/08/2022</small>
                <MdDeleteForever className='delete-icon' size='0.7cm' />
             </div>
        </div>
    );
    };
    
    export default Note;