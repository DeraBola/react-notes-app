import Note from './Note';

const NotesList  = ({ notes }) => {
return(
    <div className="notes-list">
        {notes.map((n) =>)}
        <Note />
        <Note />
        <Note />
        <Note />
    </div>
);
};

export default NotesList;