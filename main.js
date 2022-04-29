import "./style.css";

import gsap from "gsap";

window.scrollTo(0, document.body.scrollHeight);

var scallUpTowers = gsap.to(".tower", {
  width: 1600,
  duration: 0.8,
  ease: "power3.inout",
  paused: true,
});
var hideTitle = gsap.to(".title", {
  opacity: 0,
  duration: 0.5,
  ease: "power1.inout",
  paused: true,
});
var centerTower = gsap.to(".center-tower", {
  opacity: 0,
  y: 200,
  duration: 0.8,
  ease: "power1.inout",
  paused: true,
});

var hideMouseScroll = gsap.to("#mouse-scroll", {
  opacity: 0,
  display: "none",
  duration: 0.3,
  ease: "power1.inout",
  paused: true,
});

var toggleMenu = gsap.to(".menu-desktop", {
  opacity: 1,
  x: 0,
  duration: 0.6,
  delay: 0.1,
  ease: "power1.inout",
  paused: true,
});

document.querySelector("#mouse-scroll").onclick = (e) => {
  e.preventDefault();
  scallUpTowers.play();
  centerTower.play();
  hideTitle.play();
  hideMouseScroll.play();
  toggleMenu.play();
};
document.querySelector("#home-button").onclick = (e) => {
  e.preventDefault();
  toggleMenu.reverse();
  hideMouseScroll.reverse();
  hideTitle.reverse();
  centerTower.reverse();
  scallUpTowers.reverse();
};
