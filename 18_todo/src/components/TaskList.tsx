import {Component} from 'react';
import Task from "./Task.tsx";
import type {TaskListState} from "../types";

class TaskList extends Component<unknown, TaskListState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            tasks: ["Task 1", "Task 2", "Task 3", "Task 4"],
            // tasks: [],
        }
    }

    taskEdit = (index: number, text: string) => {
        const arr = [...this.state.tasks];
        arr[index] = text;
        this.setState({tasks: arr});
    }

    taskRemove = (index: number) => {
        const arr = [...this.state.tasks];
        arr.splice(index, 1);
        this.setState({tasks: arr});
    }

    taskAdd = () => {
        const arr = [...this.state.tasks];
        arr.push("New Task");
        this.setState({tasks: arr});
    }

    render() {
        return (
            <div className="field">
                <button className="btn new" onClick={this.taskAdd}>Add task</button>
                {this.state.tasks.map((item, index) =>
                    (<Task
                        key={index}
                        index={index}
                        updateTask={this.taskEdit}
                        deleteTask={this.taskRemove}
                    >{item}</Task>))}
            </div>
        );
    }
}

export default TaskList;