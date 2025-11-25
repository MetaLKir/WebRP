function Button(){
    return <button>Click</button>;
}

class Button extends React.Component{
    state = {count: 0};
    // this.setState !!! worked
    // this.count = 1 !!! didn't work
    render(){
        return(<button>(this.state.count)</button>);
    }
}

// Hooks - now it is standard used by default

