import type {Note} from "../types.ts";
import type {FC} from "react";

interface NoteListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

export const NoteList: FC<NoteListProps> =
    ({notes, onDelete}) => {
        if (notes.length === 0) return (<p>No notes yet. Please add</p>);

        return (
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <div>{note.text}</div>
                        <div>{new Date(note.createAt).toLocaleString()}</div>
                        <button onClick={() => onDelete(note.id)}>X</button>
                    </li>
                ))}
            </ul>
        )
    }
