import Note from './Note';

const NotesList  = ({n}) => {
return(
    <div className="notes-list">
        <Note />
        <Note />
        <Note />
        <Note />
    </div>
);
};

export default NotesList;