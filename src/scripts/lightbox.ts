function init() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg") as HTMLImageElement | null;
  const lightboxClose = document.getElementById("lightboxClose");
  const docsContent = document.querySelector(".docs-content");

  if (!lightbox || !lightboxImg || !lightboxClose || !docsContent) return;

  function openLightbox(src: string, alt: string) {
    lightboxImg!.src = src;
    lightboxImg!.alt = alt || "";
    lightbox!.classList.add("open");
    lightbox!.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox!.classList.remove("open");
    lightbox!.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (lightboxImg) lightboxImg.src = "";
    }, 200);
  }

  const imgs = docsContent.querySelectorAll<HTMLImageElement>("img");
  imgs.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
