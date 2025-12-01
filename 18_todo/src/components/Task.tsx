import {Component, createRef, type RefObject} from 'react';
import type {TaskProps, TaskState} from "../types";

class Task extends Component<TaskProps, TaskState> {
    newText: RefObject<HTMLTextAreaElement | null>;

    constructor(props: TaskProps) {
        super(props);
        this.edit = this.edit.bind(this);
        this.state = {isEdit: false};
        this.newText = createRef<HTMLTextAreaElement>();
    }

    edit() {
        this.setState({isEdit: true});
    }

    remove = () => {
        this.props.deleteTask(this.props.index);
    }

    save = () => {
        const value_ = this.newText.current?.value ?? "";
        this.props.updateTask(this.props.index, value_);
        this.setState({isEdit: false});
    }

    renderNorm() {
        return (
            <div className="box">
                <div>{this.props.children}</div>
                <button className="btn light" onClick={this.edit}>Edit</button>
                <button className="btn red" onClick={this.remove}>Remove</button>
            </div>
        );
    }

    renderEdit() {
        return (
            <div className="box">
                <textarea
                    defaultValue={String(this.props.children)}
                    ref={this.newText}/>
                <button className="btn success" onClick={this.save}>Save</button>
            </div>
        );
    }

    render() {
        if (this.state.isEdit) {
            return this.renderEdit();
        } else {
            return this.renderNorm();
        }
    }
}

export default Task;