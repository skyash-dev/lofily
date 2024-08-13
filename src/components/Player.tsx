import {
  ChevronsLeft,
  ChevronsRight,
  ShuffleIcon,
  Play,
  Pause,
} from "lucide-react";
import YouTube from "react-youtube";
import { Slider } from "./ui/slider";
import { getLinks } from "./../utils/constants";
import { useState } from "react";

export default function ({ imgIndex, setImgIndex, gifs, setNoise }: any) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [player, setPlayer] = useState<any>();
  const [linkIndex, setLinkIndex] = useState<any>(0);
  const [links, setLinks] = useState<any>(getLinks());

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
    <>
      <div className="absolute top-0 left-0 flex items-start flex-col ml-4 mt-4 opacity-50 hover:opacity-80 transition-opacity">
        <div className="flex w-48 justify-between">
          <button onClick={backward}>
            <ChevronsLeft color="white" size={30}></ChevronsLeft>
          </button>
          <button
            onClick={() => {
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
          onValueChange={(e) => {
            player.setVolume(e);
          }}
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
    </>
  );
}
