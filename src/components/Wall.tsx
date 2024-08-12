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
import YouTube from "react-youtube";
import { Slider } from "./ui/slider";

export default function () {
  const [imgIndex, setImgIndex] = useState<any>(0);
  const [gifs, setGifs] = useState<any>(getGifs());
  const [linkIndex, setLinkIndex] = useState<any>(0);
  const [links, setLinks] = useState<any>(getLinks());
  const [noise, setNoise] = useState<any>(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [player, setPlayer] = useState<any>();
  let randImg = Math.floor(Math.random() * (gifs.length + 1));
  let randLink = Math.floor(Math.random() * (links.length + 1));
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function forward() {
    setNoise(true);
    if (imgIndex < gifs.length - 1 && linkIndex < links.length) {
      setLinkIndex(linkIndex + 1);
      setImgIndex(imgIndex + 1);
    } else {
      setLinkIndex(0);
      setImgIndex(0);
    }
  }
  function backward() {
    setNoise(true);
    if (imgIndex > 0 && linkIndex > 0) {
      setLinkIndex(linkIndex - 1);
      setImgIndex(imgIndex - 1);
    } else {
      setLinkIndex(links.length - 1);
      setImgIndex(gifs.length - 1);
    }
  }
  function shuffle() {
    setNoise(true);
    setLinkIndex(randLink);
    setImgIndex(randImg);
    randImg = Math.floor(Math.random() * (gifs.length + 1));
  }

  return (
    <div className="">
      <div className="absolute z-10 w-screen">
        <div className="flex items-start flex-col ml-4 mt-4 opacity-50 hover:opacity-80 transition-opacity">
          <div className="flex w-48 justify-between">
            <button onClick={backward}>
              <ChevronsLeft color="white" size={30}></ChevronsLeft>
            </button>
            <button
              onClick={() => {
                console.log(player);

                if (isPlaying) {
                  player.pauseVideo();
                  setIsPlaying(false);
                } else {
                  player.playVideo();
                  setIsPlaying(true);
                }
              }}
            >
              {isPlaying ? (
                <Pause color="white" size={22}></Pause>
              ) : (
                <Play color="white" size={22}></Play>
              )}
            </button>
            <button onClick={shuffle}>
              <ShuffleIcon color="white" size={20}></ShuffleIcon>
            </button>
            <button onClick={forward}>
              <ChevronsRight color="white" size={30}></ChevronsRight>
            </button>
          </div>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="w-48"
            color="#FFF"
          />
          {player ? (
            <span className="highlight font-thin w-64 text-sm">
              {player.videoTitle}
            </span>
          ) : null}
        </div>
        <YouTube
          videoId={links[linkIndex]}
          opts={opts}
          onReady={(e: any) => {
            setNoise(false);
            setPlayer(e.target);
          }}
        />
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
