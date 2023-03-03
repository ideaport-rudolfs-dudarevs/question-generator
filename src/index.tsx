import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
