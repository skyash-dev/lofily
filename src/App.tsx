import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import kakashi from "./assets/kakashi.gif";

function App() {
  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      return false;
    },
    { capture: true }
  );
  return <div className="container"></div>;
}

export default App;
