import {Component} from 'react';

interface HomePageState {
    isLoading: boolean;
    title: string | null;
    text: string | null;
}

class HomePage extends Component<unknown, HomePageState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            isLoading: true,
            title: null,
            text: null,
        }
    }

    fakeFetchCampusInfo(): Promise<{title: string, text: string}> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    title: "Welcome to the Campus Portal",
                    text: "The 2015 Trophée Éric Bompard was a figure skating competition sanctioned by the International Skating Union (ISU), and the fourth event of the 2015–16 ISU Grand Prix of Figure Skating. Held at the Meriadeck Ice Rink in Bordeaux, France, on 13 November 2015, medals were awarded in men's singles, women's singles, pair skating, and ice dance. The competition was cancelled after the first day, following the November 2015 Paris terrorist attacks.",
                })
            }, 5000)
        })
    }

    async componentDidMount() {
        const storedTitle = sessionStorage.getItem("homeTitle");
        const storedText = sessionStorage.getItem("homeText");
        if (storedTitle && storedText) {
            this.setState({
                isLoading: false,
                title: storedTitle,
                text: storedText,
            })
            return;
        }
        try {
            const data = await this.fakeFetchCampusInfo();
            this.setState({
                isLoading: false,
                title: data.title,
                text: data.text,
            })
            sessionStorage.setItem("homeTitle", data.title);
            sessionStorage.setItem("homeText", data.text);
        } catch (e) {
            console.warn("Error fetch info: ", e);
            this.setState({
                isLoading: false,
                title: null,
                text: "Failed to fetch info",
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading campus info...</p>
        }
        return (
            <div>
                {this.state.title &&(<h2>{this.state.title}</h2>)}
                <p>{this.state.text}</p>
            </div>
        );
    }
}


export default HomePage;