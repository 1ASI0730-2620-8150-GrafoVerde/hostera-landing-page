// Video cards show their poster with a play button. The clip only starts
// downloading when the visitor presses play (preload="none").
document.querySelectorAll("[data-media-card]").forEach((card) => {
  const video = card.querySelector("video");
  const play = card.querySelector("[data-media-play]");
  if (!video || !play) return;

  play.addEventListener("click", () => {
    card.classList.add("is-playing");
    video.controls = true;
    video.play();
    video.focus();
  });

  video.addEventListener("ended", () => {
    card.classList.remove("is-playing");
    video.controls = false;
    video.load();
  });
});
