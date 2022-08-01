import Note from './Note';

const AddNote  = ({ notes }) => {
return(
    <div className="note n">
        {notes.map((note) => (
        <Note  id={note.id}  text={note.text}  date={note.date} />
         ))}
    </div>
);
};

export default AddNote ;