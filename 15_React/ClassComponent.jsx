class Block extends React.Component {
    render() {
        const title = "Hello react"
        return (
            <div>
                <h1>Hello group from Karmiel</h1>
                <h4>2025-2026</h4>
                <h4>{(Math.random() * 100).toFixed(2)}</h4>
                <h4>{title}</h4>
            </div> // returns only one element, but which can contain many elements
        )

    }
}

ReactDOM.render(<Block/>, document.getElementById('container'));