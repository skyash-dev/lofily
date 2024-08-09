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
import img12 from "./../assets/gifs/12.gif";
import img13 from "./../assets/gifs/13.gif";
import img14 from "./../assets/gifs/14.gif";
import img15 from "./../assets/gifs/15.gif";
import img16 from "./../assets/gifs/16.gif";

import noise1 from "./../assets/noise1.gif";
import noise2 from "./../assets/noise2.gif";
import noise3 from "./../assets/noise3.gif";
import noise4 from "./../assets/noise4.gif";
import noise5 from "./../assets/noise5.gif";
import noise6 from "./../assets/noise6.gif";
import noise7 from "./../assets/noise7.gif";
import noise8 from "./../assets/noise8.gif";

export function getGifs() {
  let gifs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  return gifs;
}
export function getNoise() {
  let noises = [noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8];
  let rand = Math.floor(Math.random() * noises.length);
  let noise = noises[rand];

  return noise;
}

export function getLinks() {
  let links = [
    "https://www.youtube.com/embed/wkhLHTmS_GI?si=Ox_GmT_PIkMx9AaU?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/5yx6BWlEVcY?si=tqP2mgvp5433_GLL?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/rPjez8z61rI?si=B6DIMnksTyjIBl9r?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/rZCO-sAtP0I?si=HimrfgJnWmcVBXbt?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/TfmECBzmOn4?si=m_IFmQMahf98O9QA?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/A_hmrykwR7g?si=8gT54-Zokvj5pw0k?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/8Yqx3we3WJ4?si=doom7xT9AABLwPq_?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/7NOSDKb0HlU?si=7L8_Pk2bNx3hWccs?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/C_9FdFnE5hY?si=s-7O_t0kgCMmwrd9?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/wJSg1H8wOUg?si=W_WNkYta99X2yxBP?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/qH3fETPsqXU?si=QomLWangWk1wpEUi?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/tNkZsRW7h2c?si=cbWNjmvaDPuzz-11?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
    "https://www.youtube.com/embed/lP26UCnoH9s?si=9lxEp2NukIl3tgzI?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1",
  ];

  return links;
}
