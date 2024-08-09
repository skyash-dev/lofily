import img1 from "./../assets/gifs/1.gif";
import img2 from "./../assets/gifs/2.gif";
import img3 from "./../assets/gifs/3.gif";
import img4 from "./../assets/gifs/4.gif";
import img5 from "./../assets/gifs/5.gif";
import img6 from "./../assets/gifs/6.gif";
import img7 from "./../assets/gifs/7.gif";
import img8 from "./../assets/gifs/8.gif";
import img9 from "./../assets/gifs/9.gif";
import img10 from "./../assets/gifs/10.gif";
import img11 from "./../assets/gifs/11.gif";

import noise1 from "./../assets/noise1.gif";
import noise2 from "./../assets/noise2.gif";
import noise3 from "./../assets/noise3.gif";
import noise4 from "./../assets/noise4.gif";
import noise5 from "./../assets/noise5.gif";
import noise6 from "./../assets/noise6.gif";
import noise7 from "./../assets/noise7.gif";
import noise8 from "./../assets/noise8.gif";

export function getGifs() {
  return [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
}
export function getNoise() {
  let noises = [noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8];
  let rand = Math.floor(Math.random() * noises.length);
  let noise = noises[rand];

  return noise;
}
