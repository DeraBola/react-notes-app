import Note from './Note';

const NotesList  = ({ notes }) => {
return(
    <div className="notes-list">
        {notes.map((note) => (
        <Note  id={note.}    />
         ))}
    </div>
);
};

export default NotesList;