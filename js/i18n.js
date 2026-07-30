(function () {
  "use strict";

  var TRANSLATIONS = {
    "pt-BR": {
      "lang": "pt-BR",
      "langLabel": "Portugu\u00eas",
      "meta": {
        "title": "Ottavada \u2014 Organize e sincronize partituras da sua orquestra",
        "description": "Ottavada \u00e9 um software gratuito para gerenciar, organizar e sincronizar partituras. Para Windows 10 e 11.",
        "ogTitle": "Ottavada \u2014 Organize e Sincronize Partituras",
        "ogDescription": "Software gratuito para gerenciar e sincronizar partituras da sua orquestra."
      },
      "brand": { "name": "Ottavada", "tagline": "O seu maestro de partituras" },
      "nav": { "download": "Baixar agora" },
      "hero": {
        "line1": "Encontre, organize e compartilhe",
        "line2": "partituras sem duplica\u00e7\u00e3o entre seus computadores.",
        "subtitle": "Gerencie, organize e sincronize partituras da sua orquestra. Sem complica\u00e7\u00f5es, sem mudar a sua forma de trabalhar.",
        "cta": "Baixar gratuitamente",
        "ctaNote": "Para Windows 10 e 11 (x32 e x64)"
      },
      "sections": {
        "descricao": {
          "kicker": "Por que o Ottavada?",
          "text": "O gerenciamento de partituras em orquestras ainda \u00e9 feito manualmente: troca de e-mails, pen drives, pastas e partituras duplicadas, e risco constante de perder a vers\u00e3o certa. O Ottavada resolve isso."
        },
        "organizacao": { "kicker": "Organiza\u00e7\u00e3o", "heading": "Nunca mais perca tempo procurando a partitura certa." },
        "sincronizacao": { "kicker": "Sincroniza\u00e7\u00e3o", "heading": "Um s\u00f3 aplicativo. Dois modos de uso." },
        "liberdade": { "kicker": "Liberdade", "heading": "Voc\u00ea n\u00e3o fica preso \u00e0 ferramenta." },
        "tutorial": { "kicker": "Tutorial", "heading": "O Ottavada \u00e9 cheio de recursos. Recomendamos assistir ao tutorial para aproveitar tudo que ele oferece." }
      },
      "benefits": {
        "indexacao": { "title": "Indexa\u00e7\u00e3o inteligente", "body": "Basta selecionar uma pasta com partituras. O Ottavada identifica o nome da m\u00fasica pelo diret\u00f3rio e sugere os instrumentos a partir dos arquivos \u2014 sem cadastro manual." },
        "duplicatas": { "title": "Chega de duplicatas", "body": "O sistema n\u00e3o permite dois nomes iguais de m\u00fasica ou partitura. Se tem dois violinos, ser\u00e3o \"Violino I\" e \"Violino II\" \u2014 nunca \"Violino\" repetido." },
        "busca": { "title": "Busca e filtros inteligentes", "body": "Encontre qualquer m\u00fasica em segundos. Pesquise por nome ou filtre por categoria, compositor e arranjador. Perfeito para acervos grandes." },
        "ordem": { "title": "Ordem profissional de orquestra", "body": "Ao expandir uma m\u00fasica, as partituras aparecem na ordem padr\u00e3o de grade: madeiras, metais, percuss\u00e3o, teclados e cordas \u2014 igual ao Finale." },
        "favoritos": { "title": "Favoritos e se\u00e7\u00f5es r\u00e1pidas", "body": "Marque m\u00fasicas como favoritas e acesse se\u00e7\u00f5es como \"N\u00e3o permitidas\" ou \"Sem partituras\" com um clique. Tudo ao alcance da m\u00e3o." },
        "ferramentas": { "title": "Use as ferramentas que voc\u00ea j\u00e1 conhece", "body": "Funciona com Finale, MuseScore, Sibelius, Dorico e qualquer programa que gere PDF, MusicXML ou MIDI. Voc\u00ea continua trabalhando do seu jeito, sem mudar nada." },
        "maestro": { "title": "Computador do Maestro", "body": "Controle total do repert\u00f3rio: adicione, edite e remova m\u00fasicas e partituras. Defina quais v\u00e3o para o ensaio e quais ficam s\u00f3 com voc\u00ea." },
        "ensaio": { "title": "Computador de Ensaio", "body": "Consulta r\u00e1pida para a sala de ensaio. M\u00fasicos s\u00f3 visualizam o repert\u00f3rio, sem risco de alterar ou remover nada sem querer." },
        "nuvem": { "title": "Nuvem gratuita", "body": "Sincronize pelo Google Drive ou Koofr sem custo adicional. Arquivos s\u00e3o compactados antes do envio, ocupando menos espa\u00e7o e sendo mais r\u00e1pidos." },
        "backup": { "title": "Computador quebrou? Nada se perdeu", "body": "Formatou ou trocou de m\u00e1quina? Suas partituras, categorias, compositores e arranjadores est\u00e3o seguros. Com um clique, tudo volta ao lugar." },
        "arquivos": { "title": "Seus arquivos, suas regras", "body": "O Ottavada n\u00e3o renomeia pastas nem arquivos, n\u00e3o movimenta nada e n\u00e3o imp\u00f5e formatos propriet\u00e1rios. Sua organiza\u00e7\u00e3o manual \u00e9 respeitada e incentivada." },
        "desinstalou": { "title": "Desinstalou? Seus arquivos continuam l\u00e1", "body": "Se um dia decidir n\u00e3o usar mais, suas partituras continuam exatamente onde estavam \u2014 organizadas, acess\u00edveis e sem nenhuma depend\u00eancia do Ottavada." },
        "escolha": { "title": "Voc\u00ea decide o que vai para o ensaio", "body": "Nem tudo precisa ir para o computador do ensaio. Voc\u00ea escolhe: essa partitura pode ser enviada, bloqueada ou ignorada. Voc\u00ea no controle, sempre." },
        "idiomas": { "title": "Multi-idiomas", "body": "Suporte para portugu\u00eas, ingl\u00eas, espanhol, franc\u00eas e alem\u00e3o em desenvolvimento, para atender m\u00fasicos de qualquer lugar." },
        "atualizacoes": { "title": "Atualiza\u00e7\u00f5es autom\u00e1ticas", "body": "O aplicativo se mant\u00e9m atualizado sozinho, mas voc\u00ea decide quando aplicar a atualiza\u00e7\u00e3o. Nada \u00e9 for\u00e7ado." },
        "copias": { "title": "C\u00f3pias locais", "body": "As partituras ficam salvas no seu computador. Acesse tudo mesmo sem internet durante o ensaio. R\u00e1pido e sem depender de nuvem." }
      },
      "footer": { "email": "Email de contato: ottavada@hotmail.com", "dev": "Desenvolvido por Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Ol\u00e1! Como posso ajudar? Envie sua mensagem.",
        "placeholder": "Digite sua mensagem...",
        "statusOnline": "Online",
        "statusTyping": "Digitando...",
        "tooltip": "Caso tenha alguma d\u00favida, pergunte ao nosso chatbot",
        "error": "Desculpe, ocorreu um erro. Tente novamente.",
        "ariaLabel": "Abrir chat",
        "ariaClose": "Fechar chat",
        "ariaSend": "Enviar",
        "ariaMsg": "Mensagem"
      },
      "thanks": {
        "title": "Ottavada \u2014 Obrigado",
        "description": "Obrigado pelo interesse no Ottavada.",
        "heading": "Obrigado pelo interesse na ferramenta!",
        "countdown": "Voc\u00ea ser\u00e1 redirecionado a se\u00e7\u00e3o de tutorial em {seconds} segundos..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Baixar o Ottavada"
    },
    "en": {
      "lang": "en",
      "langLabel": "English",
      "meta": {
        "title": "Ottavada \u2014 Organize and sync your orchestra's sheet music",
        "description": "Ottavada is free software to manage, organize and sync sheet music. For Windows 10 and 11.",
        "ogTitle": "Ottavada \u2014 Organize and Sync Sheet Music",
        "ogDescription": "Free software to manage and sync your orchestra's sheet music."
      },
      "brand": { "name": "Ottavada", "tagline": "Your sheet music conductor" },
      "nav": { "download": "Download now" },
      "hero": {
        "line1": "Find, organize and share",
        "line2": "sheet music without duplication across your computers.",
        "subtitle": "Manage, organize and sync your orchestra's sheet music. No complications, no changing the way you work.",
        "cta": "Download for free",
        "ctaNote": "For Windows 10 and 11 (x32 and x64)"
      },
      "sections": {
        "descricao": { "kicker": "Why Ottavada?", "text": "Sheet music management in orchestras is still done manually: email exchanges, pen drives, duplicate folders and sheets, and constant risk of losing the right version. Ottavada solves this." },
        "organizacao": { "kicker": "Organization", "heading": "Never waste time looking for the right sheet music again." },
        "sincronizacao": { "kicker": "Sync", "heading": "One app. Two usage modes." },
        "liberdade": { "kicker": "Freedom", "heading": "You're not locked into the tool." },
        "tutorial": { "kicker": "Tutorial", "heading": "Ottavada is packed with features. We recommend watching the tutorial to get the most out of it." }
      },
      "benefits": {
        "indexacao": { "title": "Smart indexing", "body": "Just select a folder with sheet music. Ottavada identifies the song name from the directory and suggests instruments from the files \u2014 no manual entry needed." },
        "duplicatas": { "title": "No more duplicates", "body": "The system does not allow two identical names for a piece or sheet. If there are two violins, they will be \"Violin I\" and \"Violin II\" \u2014 never a duplicate \"Violin\"." },
        "busca": { "title": "Smart search and filters", "body": "Find any piece in seconds. Search by name or filter by category, composer, and arranger. Perfect for large collections." },
        "ordem": { "title": "Professional orchestra order", "body": "When expanding a piece, sheet music appears in standard score order: woodwinds, brass, percussion, keyboards and strings \u2014 just like Finale." },
        "favoritos": { "title": "Favorites and quick sections", "body": "Mark pieces as favorites and access sections like \"Not allowed\" or \"No sheet music\" with a single click. Everything at your fingertips." },
        "ferramentas": { "title": "Use the tools you already know", "body": "Works with Finale, MuseScore, Sibelius, Dorico and any program that generates PDF, MusicXML or MIDI. You keep working your way, with no changes." },
        "maestro": { "title": "Conductor's Computer", "body": "Full repertoire control: add, edit and remove pieces and sheet music. Choose what goes to rehearsal and what stays with you." },
        "ensaio": { "title": "Rehearsal Computer", "body": "Quick reference for the rehearsal room. Musicians can only view the repertoire, with no risk of accidentally changing or deleting anything." },
        "nuvem": { "title": "Free cloud sync", "body": "Sync via Google Drive or Koofr at no extra cost. Files are compressed before upload, taking up less space and being faster." },
        "backup": { "title": "Computer broke? Nothing is lost", "body": "Formatted or switched machines? Your sheet music, categories, composers and arrangers are safe. One click and everything is back in place." },
        "arquivos": { "title": "Your files, your rules", "body": "Ottavada does not rename folders or files, does not move anything, and does not impose proprietary formats. Your manual organization is respected and encouraged." },
        "desinstalou": { "title": "Uninstalled? Your files stay", "body": "If you ever decide to stop using it, your sheet music stays exactly where it was \u2014 organized, accessible, and with no dependency on Ottavada." },
        "escolha": { "title": "You decide what goes to rehearsal", "body": "Not everything needs to go to the rehearsal computer. You choose: this sheet can be sent, blocked, or ignored. You're in control, always." },
        "idiomas": { "title": "Multi-language", "body": "Support for Portuguese, English, Spanish, French and German in development, to serve musicians from anywhere." },
        "atualizacoes": { "title": "Automatic updates", "body": "The app keeps itself up to date automatically, but you decide when to apply the update. Nothing is forced." },
        "copias": { "title": "Local copies", "body": "Sheet music is saved on your computer. Access everything even without internet during rehearsal. Fast and no cloud dependency." }
      },
      "footer": { "email": "Contact email: ottavada@hotmail.com", "dev": "Developed by Rhafaell (faell4328)" },
      "chat": {
        "welcome": "Hello! How can I help? Send your message.",
        "placeholder": "Type your message...",
        "statusOnline": "Online",
        "statusTyping": "Typing...",
        "tooltip": "Have any questions? Ask our chatbot",
        "error": "Sorry, an error occurred. Please try again.",
        "ariaLabel": "Open chat",
        "ariaClose": "Close chat",
        "ariaSend": "Send",
        "ariaMsg": "Message"
      },
      "thanks": {
        "title": "Ottavada \u2014 Thank You",
        "description": "Thank you for your interest in Ottavada.",
        "heading": "Thank you for your interest in the tool!",
        "countdown": "You will be redirected to the tutorial section in {seconds} seconds..."
      },
      "alt": { "logo": "Ottavada" },
      "mobileCta": "Download Ottavada"
    }
  };

  var SUPPORTED = ["pt-BR", "en"];
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

  var lang = getLang();
  var translations = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT];

  if (!getUrlParam("lang")) {
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.replace(url.toString());
    return;
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

  document.addEventListener("DOMContentLoaded", function () {
    apply(translations);
    initLangSwitcher();
  });

  window.__i18n = translations;
  window.__i18nFormat = format;
  window.__i18nSetLang = setLang;
  window.__i18nGetLang = function () { return lang; };
  window.__i18nSupported = SUPPORTED;
  window.__i18nData = TRANSLATIONS;
})();
