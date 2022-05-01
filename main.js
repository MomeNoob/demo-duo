import "./style.css";

import gsap from "gsap";
import PanelSnap from "panelsnap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  // PanelSnap Setup
  let panelSnapInstance = new PanelSnap({
    panelSelector: "> #app > .triggers-wrapper > section",
    directionThreshold: 50,
    duration: 200,
  });

  // GSAP Setup
  gsap.registerPlugin(ScrollTrigger);

  var toggleTowersScall = gsap.to(".tower", {
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top bottom",
      end: "top center",
      // markers: true,
      toggleActions: "restart resume reverse reverse",
      // toggleActions: "restart resume reverse reset",
      // onUpdate: (self) => console.log("direction:", self.direction),
    },
    scale: 2,
    y: -500,
    duration: 0.4,
    paused: true,
  });

  var toggleTitle = gsap.to(".title", {
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top bottom",
      end: "top center",
      // markers: true,
      toggleActions: "restart resume reverse reverse",
    },
    opacity: 0,
    duration: 0.5,
    paused: true,
  });
  var toggleDescription = gsap.to(".description", {
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top bottom",
      end: "top center",
      // markers: true,
      toggleActions: "restart resume reverse reverse",
    },
    opacity: 0,
    x: 100,
    duration: 0.2,
    paused: true,
  });
  var togglecenterTower = gsap.to(".center-tower", {
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top bottom",
      end: "top center",
      // markers: true,
      toggleActions: "restart resume reverse reverse",
    },
    opacity: 0,
    y: 200,
    duration: 0.4,
    paused: true,
  });

  var toggleMouseScroll = gsap.to("#mouse-scroll", {
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top bottom",
      end: "top center",
      // markers: true,
      toggleActions: "restart resume reverse reverse",
    },
    opacity: 0,
    display: "none",
    duration: 0.3,
    onComplete: () =>
      document.querySelector("#trigger-2").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      }),
    paused: true,
  });

  var toggleDesktopMenu = gsap.to(".menu-desktop", {
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top bottom",
      end: "top center",
      // markers: true,
      toggleActions: "restart resume reverse reverse",
    },
    opacity: 1,
    x: 0,
    duration: 0.6,
    delay: 0.1,
    paused: true,
  });

  document.querySelector("#mouse-scroll").onclick = (e) => {
    e.preventDefault();
    document
      .querySelector("#trigger-2")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  document.querySelector("#home-button").onclick = (e) => {
    e.preventDefault();
    document
      .querySelector("#trigger-1")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  //document.addEventListener("scroll", function (e) {
  //  let lastKnownScrollPosition = window.scrollY;
  //  console.log(lastKnownScrollPosition);
  //});

  // ------------------
  // scroll handlling
  // ------------------

  // let panels = gsap.utils.toArray(".triggers"),
  //   scrollTween;

  // function goToSection(i) {
  //   scrollTween = gsap.to(window, {
  //     scrollTo: { y: i * innerHeight, autoKill: false },
  //     duration: 0.1,
  //     onComplete: () => (scrollTween = null),
  //     overwrite: true,
  //   });
  // }

  // panels.forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger: panel,
  //     start: "top bottom",
  //     end: "+=200%",
  //     onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
  //   });
  // });

  // just in case the user forces the scroll to an inbetween spot
  // ScrollTrigger.create({
  //   start: 0,
  //   end: "max",
  //   snap: 1,
  // });
});
