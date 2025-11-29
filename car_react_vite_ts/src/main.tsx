import {createRoot} from "react-dom/client";
import App from "./App";
import "./styles.css"


const rootElement: HTMLElement | null = document.querySelector("#root");
if (!rootElement) {
    throw new Error("Could not find root element");
}
const root = createRoot(rootElement);
root.render(<App/>);