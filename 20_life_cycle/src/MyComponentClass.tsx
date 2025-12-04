import {Component} from 'react';

interface MyComponentsProps {

}

interface MyComponentsState {
    title: string;
}

class MyComponentClass extends Component<MyComponentsProps, MyComponentsState> {
    constructor(props: MyComponentsProps) {
        super(props);
        this.state = {title: "old title"};
        console.log("MyComponentClass constructor");
    }

    static getDerivedStateFromProps(nextProps: MyComponentsProps, prevState: MyComponentsState): MyComponentsState | null {
        console.log("getDerivedStateFromProps: ", nextProps, prevState);
        return null;
    } // calls every time before changes

    componentDidMount() {
        console.log("Component componentDidMount");
        setInterval(() => {
            const nextTitle = Math.random() > 0.5 ? "old title" : "NEW title";
            console.log("trying to update title -> ", nextTitle);
            this.setState({title: nextTitle});
        }, 3000);
    }

    shouldComponentUpdate(nextState:Readonly<MyComponentsState>): boolean {
        console.log("Component shouldComponentUpdate");
        const should = this.state.title !== nextState.title;
        console.log("Should update");
        return should;
    }

    // getSnapshotBeforeUpdate(prevProps: Readonly<MyComponentsProps>, prevState: Readonly<MyComponentsState>): any {
    // }
    // works only in combination with ComponentDidUpdate

    // componentDidUpdate(prevProps: Readonly<MyComponentsProps>, prevState: Readonly<MyComponentsState>, snapshot?: any) {
    // }

    componentWillUnmount() {
        console.log("Component componentWillUnmount");
    }

    render() {
        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default MyComponentClass;