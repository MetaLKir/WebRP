import {Component} from 'react';


const TIME_KEY = "books_timestamp";
const DELAY_TIME = 1000 * 5;


interface LibraryPageState {
    showReminder: boolean;
}

class LibraryPage extends Component<unknown, LibraryPageState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            showReminder: false,
        }
    }

    componentDidMount() {
        const now = Date.now();
        const storedTime = localStorage.getItem(TIME_KEY);
        if (!storedTime) {
            localStorage.setItem(TIME_KEY, now.toString());
            return;
        }
        const parsedTime = Number(storedTime);
        if (!Number.isFinite(parsedTime)) {
            localStorage.setItem(TIME_KEY, now.toString());
            return;
        }
        const differentTime = now - parsedTime;
        if (differentTime >= DELAY_TIME) {
            this.setState({showReminder: true});
        }
    }

    handleReturnBooks = () => {
        const now = Date.now();
        localStorage.setItem(TIME_KEY, now.toString());
        this.setState({showReminder: false});
    }

    render() {
        const {showReminder} = this.state;
        return (
            <div>
                <h2>Library</h2>
                {showReminder && (
                    <div>
                        <p>You shall return you books</p>
                        <button onClick={this.handleReturnBooks}>I have returned</button>
                    </div>
                )}
            </div>
        );
    }
}

export default LibraryPage;