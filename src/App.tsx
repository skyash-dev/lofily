import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { getGifs } from "./utils/constants";
import { ChevronsLeft, ChevronsRight, ShuffleIcon } from "lucide-react";
import { useState } from "react";

function App() {
  const [imgIndex, setImgIndex] = useState<any>(0);
  // document.addEventListener(
  //   "contextmenu",
  //   (e) => {
  //     e.preventDefault();
  //     return false;
  //   },
  //   { capture: true }
  // );
  return (
    <div className="container">
      <div className="ui">
        <div className="flex">
          <button
            onClick={() => {
              if (imgIndex > 0) {
                setImgIndex(imgIndex - 1);
              }
            }}
          >
            <ChevronsLeft color="white" size={32}></ChevronsLeft>
          </button>
          <button
            onClick={() => {
              let randInt = Math.floor(Math.random() * (getGifs().length + 1));
              setImgIndex(randInt);
            }}
          >
            <ShuffleIcon color="white" size={20}></ShuffleIcon>
          </button>
          <button
            onClick={() => {
              if (imgIndex < getGifs().length - 1) {
                setImgIndex(imgIndex + 1);
              }
            }}
          >
            <ChevronsRight color="white" size={32}></ChevronsRight>
          </button>
        </div>
      </div>
      <img src={getGifs()[imgIndex]} alt="" />
    </div>
  );
}

export default App;
