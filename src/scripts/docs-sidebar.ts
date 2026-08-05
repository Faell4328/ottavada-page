function init() {
  const sidebar = document.getElementById("docsSidebar");
  const backdrop = document.getElementById("docsSidebarBackdrop");
  const toggle = document.getElementById("docsSidebarToggle");
  const closeBtn = document.getElementById("docsSidebarClose");
  const header = document.querySelector<HTMLElement>(".header");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".docs-nav-link");

  if (!sidebar || !backdrop) return;

  function syncHeaderHeight() {
    if (!header) return;
    const h = header.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${h}px`);
  }

  function openSidebar() {
    sidebar!.classList.add("open");
    backdrop!.classList.add("visible");
    toggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar!.classList.remove("open");
    backdrop!.classList.remove("visible");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle?.addEventListener("click", openSidebar);
  closeBtn?.addEventListener("click", closeSidebar);
  backdrop.addEventListener("click", closeSidebar);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1024) closeSidebar();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("open")) {
      closeSidebar();
    }
  });

  const sections: { id: string; el: HTMLElement; link: HTMLAnchorElement }[] = [];
  navLinks.forEach((link) => {
    const id = link.getAttribute("data-nav-target");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) sections.push({ id, el, link });
  });

  let currentActive: string | null = null;

  function setActive(id: string) {
    if (id === currentActive) return;
    currentActive = id;
    navLinks.forEach((l) => l.classList.remove("active"));
    const match = sections.find((s) => s.id === id);
    if (match) match.link.classList.add("active");
    if (history.replaceState) {
      history.replaceState(null, "", `#${id}`);
    } else {
      window.location.hash = id;
    }
  }

  function onScroll() {
    if (!sections.length) return;
    const headerH = header ? header.offsetHeight : 0;
    const scrollPos = window.scrollY + headerH + 40;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.el.offsetTop <= scrollPos) {
        current = section.id;
      } else {
        break;
      }
    }
    setActive(current);
  }

  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);

  if (sections.length) {
    setActive(sections[0].id);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("load", onScroll);
    onScroll();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
