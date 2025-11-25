// class Check extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: false,
//         }
//     }
//
//     handleChange = () => {
//         this.setState({checked: !this.state.checked});
//     }
//
//     render() {
//         const message = this.state.checked ? "Checked" : "Unchecked";
//         return (
//             <div>
//                 <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
//                 <p>Checkbox {message}</p>
//             </div>
//         )
//     }
// }

function Check() {
    const [checked, setChecked] = React.useState(false);
    const message = checked ? "Checked" : "Unchecked";

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            <p>Checkbox {message}</p>
        </div>
    );
}

// ReactDOM.render(<Check/>, document.getElementById('container'));

const root = ReactDOM.createRoot(document.querySelector('#container'))
root.render(<Check/>);