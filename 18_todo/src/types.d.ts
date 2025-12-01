// export type TaskProps = {
//     task: string,
// }
import type {ReactNode} from "react";

export type TaskProps = {
    index: number;
    updateTask: (index: number, text: string) => void;
    deleteTask: (index: number) => void;
    children?: ReactNode; // every prop has "children", built-in stuff
}

export type TaskState = {
    isEdit: boolean,
}

export type TaskListState = {
    tasks: ReactNode[],
}