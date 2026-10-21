const tour = document.querySelector("[data-tour]");

if (tour) {
  const tabs = [...tour.querySelectorAll('[role="tab"]')];

  const select = (tab, focus) => {
    tabs.forEach((other) => {
      const selected = other === tab;
      other.setAttribute("aria-selected", String(selected));
      other.tabIndex = selected ? 0 : -1;
      document.getElementById(other.getAttribute("aria-controls")).hidden = !selected;
    });
    if (focus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab, false));
    tab.addEventListener("keydown", (event) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (step) {
        event.preventDefault();
        select(tabs[(index + step + tabs.length) % tabs.length], true);
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        select(tabs[event.key === "Home" ? 0 : tabs.length - 1], true);
      }
    });
  });
}
