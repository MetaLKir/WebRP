class CarClass extends React.Component {
    render() {
        return (
            <div className={this.props.cardStyle}>
                <h2>{this.props.model}</h2>
                <h3>{this.props.manuf}</h3>
                <h4>{this.props.year}</h4>
                <p>{this.props.vin}</p>
            </div>
        )
    }
}

function CarFunc(props) {
    return (
        <div className={props.cardStyle}>
            <h2>{props.model}</h2>
            <h3>{props.manuf}</h3>
            <h4>{props.year}</h4>
            <p>{props.vin}</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <div className={"row"}>
                {cars.map(c =>
                    <CarClass key={c.vin} vin={c.vin} model={c.model}
                              manuf={c.manuf} year={c.year}
                              cardStyle={"carCard"}/>)}
            </div>
            <div className={"row"}>
                {cars.map((c, index) =>
                    <CarFunc key={index} {...c} cardStyle={"carCard"}/>)}
            </div>
        </div>
    )
}

// ReactDOM.render(<App/>, document.querySelector('#container'))

const root = ReactDOM.createRoot(document.querySelector('#container'))
root.render(<App/>);