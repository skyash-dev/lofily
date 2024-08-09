import { useState } from "react";
import { getGifs, getLinks, getNoise } from "../utils/constants";
import {
  ChevronsLeft,
  ChevronsRight,
  ShuffleIcon,
  Play,
  Pause,
} from "lucide-react";
import noise_sfx from "./../assets/noise_sfx.mp3";

export default function () {
  const [imgIndex, setImgIndex] = useState<any>(0);
  const [gifs, setGifs] = useState<any>(getGifs());
  const [linkIndex, setLinkIndex] = useState<any>(0);
  const [links, setLinks] = useState<any>(getLinks());
  const [noise, setNoise] = useState<any>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  let randImg = Math.floor(Math.random() * (gifs.length + 1));
  let randLink = Math.floor(Math.random() * (links.length + 1));

  function forward() {
    setNoise(true);
    setTimeout(() => {
      if (imgIndex < gifs.length - 1 && linkIndex < links.length) {
        setLinkIndex(linkIndex + 1);
        setImgIndex(imgIndex + 1);
      } else {
        setLinkIndex(0);
        setImgIndex(0);
      }
      setNoise(false);
    }, 300);
  }
  function backward() {
    setNoise(true);
    setTimeout(() => {
      if (imgIndex > 0) {
        setLinkIndex(linkIndex - 1);
        setImgIndex(imgIndex - 1);
      } else {
        setImgIndex(gifs.length - 1);
      }
      setNoise(false);
    }, 300);
  }
  function shuffle() {
    setNoise(true);
    setTimeout(() => {
      setLinkIndex(randLink);
      setImgIndex(randImg);
      randImg = Math.floor(Math.random() * (gifs.length + 1));
      setNoise(false);
    }, 300);
  }

  return (
    <div className="container">
      <div className="ui">
        <div className="flex">
          <button onClick={backward}>
            <ChevronsLeft color="white" size={30}></ChevronsLeft>
          </button>
          {isPlaying ? (
            <button onClick={() => setIsPlaying(false)}>
              <Pause color="white" size={22}></Pause>
            </button>
          ) : (
            <button onClick={() => setIsPlaying(true)}>
              <Play color="white" size={22}></Play>
            </button>
          )}
          <button onClick={shuffle}>
            <ShuffleIcon color="white" size={20}></ShuffleIcon>
          </button>
          <button onClick={forward}>
            <ChevronsRight color="white" size={30}></ChevronsRight>
          </button>
        </div>
        <iframe
          src={links[linkIndex]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
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