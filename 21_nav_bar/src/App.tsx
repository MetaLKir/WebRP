import {Component} from 'react';
import {Header} from "./components/Header.tsx";
import Main from "./components/Main.tsx";

interface AppProps {
}

interface AppState {

}

class App extends Component<AppProps, AppState> {

    render() {
        return (
            <div className="campus-wrapper">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;

// localStorage.setItem("key1","avava");
// const value = localStorage.getItem("key1");
// localStorage.removeItem("key1");
// localStorage.clear();
// const count = localStorage.length;
// JSON.stringify(object);
// JSON.parse(writing);

// local storage - to save for long time (like reminder after 3 months)
// session storage - for short things during sessions (like home page)