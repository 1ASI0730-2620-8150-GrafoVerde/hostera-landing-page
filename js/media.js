// Video cards show a play facade and only load the SharePoint player on click,
// so the landing does not pull two heavy embeds on first paint.
document.querySelectorAll("[data-media-card]").forEach((card) => {
  const play = card.querySelector("[data-media-play]");
  const src = card.dataset.embedSrc;
  if (!play || !src) return;

  play.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = src;
    frame.title = card.dataset.embedTitle || "";
    frame.allow = "autoplay; fullscreen; picture-in-picture";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    card.classList.add("is-playing");
    play.replaceWith(frame);
    frame.focus();
  });
});
