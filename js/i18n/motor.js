(function () {
  "use strict";

  var SUPPORTED = ["pt-BR", "en", "es", "fr", "it", "de"];
  var DEFAULT = "en";

  function getUrlParam(name) {
    var m = window.location.search.match(new RegExp("[?&]" + name + "=([^&]*)"));
    return m ? decodeURIComponent(m[1]) : null;
  }

  function getLang() {
    var urlLang = getUrlParam("lang");
    if (urlLang && SUPPORTED.indexOf(urlLang) !== -1) return urlLang;
    var stored = localStorage.getItem("lang");
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var browser = (navigator.language || "").replace("_", "-");
    if (SUPPORTED.indexOf(browser) !== -1) return browser;
    var prefix = browser.split("-")[0];
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i].split("-")[0] === prefix) return SUPPORTED[i];
    }
    return DEFAULT;
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.href = url.toString();
  }

  function getNested(obj, path) {
    return path.split(".").reduce(function (cur, key) {
      return cur != null ? cur[key] : undefined;
    }, obj);
  }

  function isPlainObject(v) {
    return v && typeof v === "object" && !Array.isArray(v);
  }

  function deepMerge(target, src) {
    for (var k in src) {
      if (!Object.prototype.hasOwnProperty.call(src, k)) continue;
      if (isPlainObject(src[k])) {
        target[k] = isPlainObject(target[k]) ? target[k] : {};
        deepMerge(target[k], src[k]);
      } else {
        target[k] = src[k];
      }
    }
    return target;
  }

  function buildMerged(lang) {
    var merged = { lang: lang };
    var shared = (window.__i18nCommon || {})[lang]
      || (window.__i18nCommon || {})[DEFAULT]
      || {};
    var page = (window.__i18nData || {})[lang]
      || (window.__i18nData || {})[DEFAULT]
      || {};
    deepMerge(merged, shared);
    deepMerge(merged, page);
    return merged;
  }

  function apply(t) {
    var i, el, key, val;

    var els = document.querySelectorAll("[data-i18n]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n");
      val = getNested(t, key);
      if (val !== undefined) el.textContent = val;
    }

    els = document.querySelectorAll("[data-i18n-placeholder]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-placeholder");
      val = getNested(t, key);
      if (val !== undefined) el.placeholder = val;
    }

    els = document.querySelectorAll("[data-i18n-aria]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-aria");
      val = getNested(t, key);
      if (val !== undefined) {
        var attr = el.getAttribute("data-i18n-aria-attr") || "aria-label";
        el.setAttribute(attr, val);
      }
    }

    els = document.querySelectorAll("[data-i18n-title]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-title");
      val = getNested(t, key);
      if (val !== undefined) el.setAttribute("title", val);
    }

    els = document.querySelectorAll("meta[data-i18n-content]");
    for (i = 0; i < els.length; i++) {
      el = els[i];
      key = el.getAttribute("data-i18n-content");
      val = getNested(t, key);
      if (val !== undefined) el.setAttribute("content", val);
    }

    document.documentElement.lang = t.lang;

    var base = window.location.origin + window.location.pathname;
    var hreflangs = [
      { lang: "en", href: base + "?lang=en" },
      { lang: "pt-BR", href: base + "?lang=pt-BR" },
      { lang: "es", href: base + "?lang=es" },
      { lang: "fr", href: base + "?lang=fr" },
      { lang: "it", href: base + "?lang=it" },
      { lang: "de", href: base + "?lang=de" },
      { lang: "x-default", href: base },
    ];
    for (i = 0; i < hreflangs.length; i++) {
      var link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflangs[i].lang;
      link.href = hreflangs[i].href;
      document.head.appendChild(link);
    }

    document.documentElement.classList.add("i18n-ready");
  }

  function format(tpl, vars) {
    return tpl.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] !== undefined ? vars[k] : "{" + k + "}";
    });
  }

  function initLangSwitcher() {
    var btns = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      }
      btn.addEventListener("click", function () {
        setLang(this.getAttribute("data-lang"));
      });
    }
  }

  var lang = getLang();
  var translations = buildMerged(lang);

  window.__i18n = translations;
  window.__i18nFormat = format;
  window.__i18nGetLang = function () { return lang; };
  window.__i18nSupported = SUPPORTED;

  if (!getUrlParam("lang")) {
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.replace(url.toString());
    return;
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(translations);
    initLangSwitcher();
  });

  window.__i18nSetLang = setLang;
})();
