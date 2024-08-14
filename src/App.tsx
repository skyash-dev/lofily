import "./App.css";
import Wall from "./components/Wall";

function App() {
  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      return false;
    },
    { capture: true }
  );
  return <Wall></Wall>;
}

export default App;
