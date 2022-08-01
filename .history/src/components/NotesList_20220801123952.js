import Note from './Note';

const NotesList  = ({ notes }) => {
return(
    <div className="notes-list">
        {notes.map((notes) =>)}
        <Note />
        <Note />
        <Note />
        <Note />
    </div>
);
};

export default NotesList;