// import MyComponent from "./MyComponent.tsx";
import MyComponentClass from "./MyComponentClass.tsx";
import {Component} from "react";

interface AppProps {
}

interface AppState {
    isShow: boolean;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {isShow: true};
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.setState({isShow: false})}>Remove</button>
                <MyComponentClass/>
            </div>
        )
    }
}


export default App
