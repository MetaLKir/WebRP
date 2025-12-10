import {type ChangeEvent, type FC, type FormEvent, useState} from 'react';


interface NoteFormProps {
    onAdd: (text: string) => void;
}

export const NoteForm: FC<NoteFormProps> = ({onAdd}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimValue = value.trim();
        if (!trimValue) return;
        onAdd(trimValue);
        setValue("");
    }

    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} value={value} onChange={handleChange}/>
            <button type={"submit"}>Add</button>
        </form>
    );
};