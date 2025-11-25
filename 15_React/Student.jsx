class Student extends React.Component {
    // props
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>{`age: ${this.props.age}`}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Student name="Alice" age="21"/>
        <Student name="Vasya" age="22"/>
        <Student name="Ivan" age="24"/>
    </div>, document.getElementById('container')
)