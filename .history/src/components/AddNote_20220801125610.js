import Note from './Note';

const AddNote  = ({ notes }) => {
return(
    <div className="note new">
         <textarea rows="8" cols="10" placeholder=''  ></textarea>
    </div>
);
};

export default AddNote ;