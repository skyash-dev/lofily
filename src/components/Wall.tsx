import { useState } from "react";
import { getGifs, getNoise } from "../utils/constants";
import { ChevronsLeft, ChevronsRight, ShuffleIcon } from "lucide-react";

export default function () {
  const [imgIndex, setImgIndex] = useState<any>(0);
  const [gifs, setGifs] = useState<any>(getGifs());
  const [noise, setNoise] = useState<any>(false);
  let randInt = Math.floor(Math.random() * (gifs.length + 1));

  function forward() {
    setNoise(true);
    setTimeout(() => {
      if (imgIndex < gifs.length - 1) {
        setImgIndex(imgIndex + 1);
      } else {
        setImgIndex(0);
      }
      setNoise(false);
    }, 150);
  }
  function backward() {
    setNoise(true);
    setTimeout(() => {
      if (imgIndex > 0) {
        setImgIndex(imgIndex - 1);
      } else {
        setImgIndex(gifs.length - 1);
      }
      setNoise(false);
    }, 150);
  }
  function shuffle() {
    setNoise(true);
    setTimeout(() => {
      setImgIndex(randInt);
      randInt = Math.floor(Math.random() * (gifs.length + 1));
      setNoise(false);
    }, 150);
  }

  return (
    <div className="container">
      <div className="ui">
        <div className="flex">
          <button onClick={backward}>
            <ChevronsLeft color="white" size={32}></ChevronsLeft>
          </button>
          <button onClick={shuffle}>
            <ShuffleIcon color="white" size={20}></ShuffleIcon>
          </button>
          <button onClick={forward}>
            <ChevronsRight color="white" size={32}></ChevronsRight>
          </button>
        </div>
      </div>
      {noise ? <img src={getNoise()} alt="" /> : null}
      <img src={gifs[imgIndex]} alt="" />
      <div id="crt-lines"></div>
      <div id="darken"></div>
      <div id="vignette"></div>
    </div>
  );
}
