import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { files } from "../utils/Constants";
import Contact from "./Contact";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(mainRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: mainRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const devicePixelRatio = window.devicePixelRatio || 1;

        canvas.width = window.innerWidth * devicePixelRatio;
        canvas.height = window.innerHeight * devicePixelRatio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.scale(devicePixelRatio, devicePixelRatio);

        render();
      }
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 350;
    if (isMobile) {
      frameCount = 350;
    } else {
      frameCount = 350;
    }
    const images2 = [];
    const imageSeq = { frame: 1 };

    for (let i = 1; i < frameCount - 1; i++) {
      const img = new Image();
      img.src = files(i);
      img.onload = () => {
        if (i === 1) {
          render();
        }
      };
      images2.push(img);
    }
    if (isMobile) {
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 0.05,
          trigger: canvas,
          start: "top top",
          end: "600% top",
          scroller: mainRef.current,
        },
        onUpdate: render,
      });
    } else {
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 0.05,
          trigger: canvas,
          start: "top top",
          end: "600% top",
          scroller: mainRef.current,
        },
        onUpdate: render,
      });
    }

    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;

      const canvasAspectRatio = canvas.width / canvas.height;
      const imageAspectRatio = img.width / img.height;

      let imgWidth, imgHeight;

      if (canvasAspectRatio > imageAspectRatio) {
        imgHeight = canvas.height;
        imgWidth = imgHeight * imageAspectRatio;
      } else {
        imgWidth = canvas.width;
        imgHeight = imgWidth / imageAspectRatio;
      }

      const centerShiftX = 0;
      const centerShiftY = 0;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isMobile) {
        ctx.drawImage(
          img,
          680,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          (imgWidth = 1600),
          (imgHeight = 900)
        );
      } else {
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          imgWidth,
          imgHeight
        );
      }
    }

    function render() {
      if (images2[imageSeq.frame]) {
        scaleImage(images2[imageSeq.frame], context);
      }
    }
    if (isMobile) {
      ScrollTrigger.create({
        trigger: canvas,
        pin: true,
        scroller: mainRef.current,
        start: "top top",
        end: "550% top",
      });
    } else {
      ScrollTrigger.create({
        trigger: canvas,
        pin: true,
        scroller: mainRef.current,
        start: "top top",
        end: "600% top",
      });
    }

    gsap.to("#page1", {
      scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "bottom top",
        pin: true,
        scroller: mainRef.current,
      },
    });

    gsap.to("#page2", {
      scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "bottom top",
        pin: true,
        scroller: mainRef.current,
      },
    });

    gsap.to("#page3", {
      scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        pin: true,
        scroller: mainRef.current,
        end: isMobile ? "460px top" : "100% 80%",
      },
    });

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div ref={mainRef} id="main">
        <div id="page">
          <div id="loop" className="flex justify-center items-center ">
            <h1 className="flex text-center sm:text-[sm] sm:mr-4 md:text-lg font-bold mb-4 sm:mb-20 md:mb-8">
              <b className="text-center justify-center  text-base sm:text-[sm] sm:mr-4 md:text-lg font-bold mb-4 sm:mb-20 md:mb-8">
                <div className="mb-2 sm:mb-40 md:mb-36 lg:mb-8 ">
                  <i class="quattrocento-bold text-sm">
                    YOU SEE THE WORLD AS BINARY, WHEN IT'S MOSIAC.
                  </i>{" "}
                </div>
              </b>
            </h1>
          </div>

          <canvas id="canvas-container" ref={canvasRef}></canvas>
        </div>
        <div id="page1">
          <div id="right-text">
            <h3>A STORY I ALWAYS IMAGINED</h3>
            <h1>
              DONT LIMIT YOURSELF
              <br />
              SOUNDS CORNY
              <br />
              BUT IT'S THE TRUTH
            </h1>
          </div>
          <div id="left-text">
            <h1>
              MAKE A STORY
              <br />
              TAKE A CHANCE
              <br />
              BUILD AND OWN
            </h1>
            <h3>..AND MAINTAIN GOOD HUMANITY</h3>
          </div>
        </div>
        <div id="page2">
          <div id="text1">
            <h3>A SUBLIMAL CONCEPT</h3>
            <h1>
              OF
              <br />
              HOW
              <br />
              REALITY WORKS
            </h1>
          </div>
          <div id="text2">
            <p>
              FIND WHAT LIGHTS THE FIRE INSIDE YOU, <br />
              AND GIVE IT MORE FUEL; OTHERWISE, YOU MAY JUST BURN OUT.
            </p>
          </div>
        </div>
        <div id="page3">
          <div id="text3">
            <h3>TEACHING MYSELF </h3>
            <h1>
              HOW TO ROLL
              <br />
              WITH
              <br />
              THE CHANGES.
            </h1>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
