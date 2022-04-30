import "./style.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var scallUpTowers = gsap.to(".tower", {
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "bottom center",
    end: "bottom center",
    markers: true,
    toggleActions: "reverse reverse restart play",
    // toggleActions: "restart resume reverse reset",
    onUpdate: (self) => console.log("direction:", self.direction),
  },
  scale: 2,
  y: -500,
  duration: 0.4,
  paused: true,
});

var hideTitle = gsap.to(".title", {
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "bottom center",
    end: "bottom center",
    markers: true,
    toggleActions: "reverse reverse restart play",
  },
  opacity: 0,
  duration: 0.5,
  paused: true,
});
var centerTower = gsap.to(".center-tower", {
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "bottom center",
    end: "bottom center",
    markers: true,
    toggleActions: "reverse reverse restart play",
  },
  opacity: 0,
  y: 200,
  duration: 0.4,
  paused: true,
});

var MouseScroll = gsap.to("#mouse-scroll", {
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "bottom center",
    end: "bottom center",
    markers: true,
    toggleActions: "reverse reverse restart play",
  },
  opacity: 0,
  display: "none",
  duration: 0.3,
  onComplete: () =>
    document
      .querySelector("#trigger-2")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }),
  paused: true,
});

var toggleMenu = gsap.to(".menu-desktop", {
  scrollTrigger: {
    trigger: ".trigger-2",
    start: "bottom center",
    end: "bottom center",
    markers: true,
    toggleActions: "reverse reverse restart play",
  },
  opacity: 1,
  x: 0,
  duration: 0.6,
  delay: 0.1,
  paused: true,
});

document.querySelector("#mouse-scroll").onclick = (e) => {
  e.preventDefault();
  scallUpTowers.play();
  centerTower.play();
  hideTitle.play();
  MouseScroll.play();
  toggleMenu.play();
};
document.querySelector("#home-button").onclick = (e) => {
  e.preventDefault();
  toggleMenu.reverse();
  MouseScroll.reverse();
  hideTitle.reverse();
  centerTower.reverse();
  scallUpTowers.reverse();
  document
    .querySelector("#trigger-1")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }),
    setTimeout(() => {}, 1000);
};

//document.addEventListener("scroll", function (e) {
//  let lastKnownScrollPosition = window.scrollY;
//  console.log(lastKnownScrollPosition);
//});

// ------------------
// scroll handlling
// ------------------

let panels = gsap.utils.toArray(".triggers"),
  scrollTween;

function goToSection(i) {
  scrollTween = gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false },
    duration: 0.1,
    onComplete: () => (scrollTween = null),
    overwrite: true,
  });
}

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top bottom",
    end: "+=200%",
    onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
  });
});

// just in case the user forces the scroll to an inbetween spot 
ScrollTrigger.create({
  start: 0,
  end: "max",
  snap: 1 / 5,
});

