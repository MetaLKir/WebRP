const root = ReactDOM.createRoot(document.getElementById('container'))


function Address(props) {
    return <p>address: {props.city}</p>;
}

//     // props
//     /*
//     name: string,
//     age: string,
//      */

// class Student extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <h3>{`age: ${this.props.age}`}</h3>
//                 <Address city={this.props.city}/>
//             </div>
//         )
//     }
// }

function Student(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{`age: ${props.age}`}</h3>
            <Address city={props.city}/>
        </div>
    )
}

function App() {
    return (
        <div>
            <Student name="Alice" age="21" city={"Haifa"}/>
            <Student name="Vasya" age="22" city={"Karmiel"}/>
            <Student name="Ivan" age="24" city={"Akko"}/>
        </div>)
}

root.render(<App/>);