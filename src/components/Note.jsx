const Note = ({ note, toggleImportance }) => {
    const label = note.important ? "make unimportant" : "make important"
    return (
        <li className="note">{note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note