function init() {
  const rawHash = window.location.hash;
  if (rawHash && rawHash.length > 1) {
    const sectionId = rawHash.slice(1);
    const el = document.getElementById(sectionId);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
