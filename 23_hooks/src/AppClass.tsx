import {Component} from 'react';
import './App.css'


interface AppProps {
}

interface AppState {
    count: number;
}

class AppClass extends Component<AppProps, AppState> {
    intervalId?: number;

    constructor(props: AppProps) {
        super(props);
        this.state = {count: 0};
    }

    handleClick = () => {
        this.setState((prevState) =>
            ({count: prevState.count + 1}))
    }

    handleUnmounted = () => {
        if(this.intervalId !== undefined){
            console.log("Func unmounted clear interval =)");
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }

    componentDidMount() {
        console.log('Class component mounted \\m/');
        this.intervalId = setInterval(() => {
            console.log("tick");
        }, 1000)
    }

    componentDidUpdate() {
        console.log('Class component updated .!.');
    }

    render() {
        const {count} = this.state;

        return (
            <>
                <div className="card">
                    <button onClick={this.handleClick}>
                        count is {count}
                    </button>
                    <button onClick={this.handleUnmounted}>unmounted</button>
                </div>
            </>
        );
    }
}

export default AppClass;
