
import { MdDeleteForever } from 'react-icons/md'

const Note  = ({}) => {
    return(
        <div className='note'>
             <span>frist note Hurrah!</span>
             <div className="note-footer">
                <small>01/08/2022</small>
                <MdDeleteForever className='delete-icon' size='0.7cm' />
             </div>
        </div>
    );
    };
    
    export default Note;