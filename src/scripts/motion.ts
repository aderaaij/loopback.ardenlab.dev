// Page motion: entrance and scroll reveals, the runner on the "How it works" track, and
// playback of the background footage.
// Everything here is skipped under prefers-reduced-motion; the page is complete without it.
import { inView, scroll, stagger } from "motion";
import { animate } from "motion/mini";

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

const root = document.documentElement;

if (root.classList.contains("motion")) {
  window.__motionReady = true;

  const rise = (elements: Element[]) => {
    animate(
      elements,
      { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0)"] },
      { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: stagger(0.07) },
    ).finished.then(() => elements.forEach((element) => element.classList.add("shown")));
  };

  // On load: the hero, or a document page's heading block.
  document.querySelectorAll("[data-enter]").forEach((group) => rise([...group.children]));

  // On scroll: single elements, or the children of a group in sequence.
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
    const targets = element.dataset.reveal === "children" ? [...element.children] : [element];
    inView(element, () => rise(targets), { amount: 0.15 });
  });

  runTrack();

  // Background footage plays only while it is on screen. Without this script, under
  // reduced motion or with data saving on, each clip stays on its poster frame.
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (!saveData) {
    document.querySelectorAll<HTMLVideoElement>("video.clip").forEach((video) => {
      inView(video, () => {
        video.play().catch(() => {});
        return () => video.pause();
      });
    });
  }
}

/** Moves the runner round the track as the six steps scroll past, lighting each step in turn. */
function runTrack() {
  const list = document.querySelector(".loop");
  const base = document.querySelector<SVGPathElement>(".track-base");
  const progress = document.querySelector<SVGPathElement>(".track-progress");
  const dot = document.querySelector<SVGCircleElement>(".track-dot");
  if (!list || !base || !progress || !dot) return;

  const steps = [...list.children];
  const stops = [...document.querySelectorAll(".track-stop")];
  const back = document.querySelector(".loop-return");
  const length = base.getTotalLength();

  scroll(
    (p: number) => {
      const point = base.getPointAtLength(p * length);
      dot.setAttribute("cx", String(point.x));
      dot.setAttribute("cy", String(point.y));
      progress.style.strokeDashoffset = String(1 - p);

      // Nothing is lit before the loop starts; once it closes, the "back to 01" line takes over.
      const active = p > 0 && p < 1 ? Math.floor(p * steps.length) : -1;
      steps.forEach((step, i) => step.classList.toggle("is-active", i === active));
      stops.forEach((stop, i) => stop.classList.toggle("is-passed", p > 0 && i <= Math.floor(p * steps.length)));
      back?.classList.toggle("is-active", p >= 1);
    },
    { target: list, offset: ["start 0.7", "end 0.7"] },
  );
}
