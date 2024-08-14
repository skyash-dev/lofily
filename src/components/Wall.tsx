import { useState } from "react";
import { getGifs, getNoise } from "../utils/constants";
import PomodoroTimer from "./ui/PomodoroTimer";
import Player from "./Player";
import noise_sfx from "./../assets/noise_sfx.mp3";

export default function () {
  const gifs = getGifs();
  const [imgIndex, setImgIndex] = useState<any>(
    Math.floor(Math.random() * (gifs.length + 1))
  );
  const [noise, setNoise] = useState<any>(true);

  return (
    <div className="">
      <div className="absolute z-10 w-screen h-[90vh]">
        <Player
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          gifs={gifs}
          setNoise={setNoise}
        ></Player>
        <PomodoroTimer></PomodoroTimer>
      </div>
      {noise ? (
        <img src={getNoise()} alt="" />
      ) : (
        <img src={gifs[imgIndex]} alt="" />
      )}
      {noise ? (
        <audio autoPlay>
          <source src={noise_sfx} />
        </audio>
      ) : null}
      <div id="crt-lines"></div>
      <div id="darken"></div>
      <div id="vignette"></div>
    </div>
  );
}
