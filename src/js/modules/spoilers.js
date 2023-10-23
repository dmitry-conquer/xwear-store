const spoilers = {
  spoiler() {
    document.addEventListener("click", function (e) {
      const spoilerTrigger = e.target.closest("[data-spoiler]");
      if (spoilerTrigger) {
        spoilers.openSpoiler(spoilerTrigger);
      }
    });
  },

  openSpoiler(spoilerTrigger) {
    spoilerTrigger.classList.toggle("active-spoiler");
    const spoilerContent = spoilerTrigger.nextElementSibling;
    spoilerContent.classList.toggle("active-spoiler-content");
    spoilerContent.style.maxHeight = spoilerContent.style.maxHeight ? null : `${spoilerContent.scrollHeight}px`;
  },
};

export const useSpoiler = spoilers.spoiler;
