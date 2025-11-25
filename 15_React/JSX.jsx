const hello = "Hello Jawa-Scwipt pwogwamma"
// ReactDOM.render(hello, document.querySelector('root'));
const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);

const element = <h1>{hello}</h1>

root.render(element);