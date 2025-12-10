import './App.css'
import {useLocalStorageState} from "./hooks/useLocalStorageState.ts";
import type {Note} from "./types.ts";
import {useDocumentTitle} from "./hooks/useDocumentTitle.ts";
import {NoteList} from "./components/NoteList.tsx";
import {NoteForm} from "./components/NoteForm.tsx";

function App() {
    const [notes, setNotes] = useLocalStorageState<Note[]>('notes', []);
    useDocumentTitle(
        notes.length === 0 ? "Notes" : `My Notes (${notes.length} notes)`
    )

    const handleAddNote = (text: string) => {
        const newNote = {
            id: notes.length + 1,
            text,
            createAt: new Date().toISOString(),
        }
        setNotes((prev: Note[]): Note[] => [newNote, ...prev]);
    }

    const handleDeleteNote = (id: number) => {
        setNotes((prev) =>
            prev.filter((note) => note.id !== id))
    }

    return (
        <>
            <h2>Notes</h2>
            <NoteForm onAdd={handleAddNote}/>
            <NoteList notes={notes} onDelete={handleDeleteNote}/>
        </>
    )
}

export default App
