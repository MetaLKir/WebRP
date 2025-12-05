import {Component} from 'react';
import {type NavItem, navItems} from "./navItems.ts";
import {Header} from "./components/Header.tsx";
import Main from "./components/Main.tsx";

interface AppProps {
}

interface AppState {
    activePage: NavItem;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {activePage: navItems[0]};
    }

    changePage = (page: NavItem) => {
        if (page === this.state.activePage) {
            return
        }
        this.setState({activePage: page});
    }

    render() {
        return (
            <div className="campus-wrapper">
                <Header
                    activePage={this.state.activePage}
                    changePage={this.changePage}
                />
                <Main
                    page={this.state.activePage}
                />
            </div>
        );
    }
}

export default App;