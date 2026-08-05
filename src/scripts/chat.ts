const STORAGE_KEY = "ottavadaChatHistory";
const WEBHOOK_URL = "https://servidor.rhafaell.com.br/bot";

type ChatEntry = { role: "user" | "bot"; msg: string };

function safeStorageGet(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function loadHistory(): ChatEntry[] {
  const raw = safeStorageGet(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ChatEntry[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: ChatEntry[]) {
  safeStorageSet(STORAGE_KEY, JSON.stringify(history));
}

function init() {
  const fab = document.getElementById("chatFAB") as HTMLButtonElement | null;
  const popup = document.getElementById("chatPopup");
  const closeBtn = document.getElementById("chatClose") as HTMLButtonElement | null;
  const form = document.getElementById("chatForm") as HTMLFormElement | null;
  const input = document.getElementById("chatInput") as HTMLTextAreaElement | null;
  const messages = document.getElementById("chatMessages");
  const sendBtn = document.getElementById("chatSendBtn") as HTMLButtonElement | null;
  const dot = document.getElementById("chatDot");
  const statusEl = document.getElementById("chatStatus");
  const fabImg = document.getElementById("fabImg") as HTMLImageElement | null;
  const tooltip = document.getElementById("chatTooltip");

  if (!fab || !popup || !closeBtn || !form || !input || !messages || !sendBtn || !dot || !statusEl) {
    return;
  }

  const tooltipsAttr = tooltip?.getAttribute("data-tooltips");
  const tooltips = tooltipsAttr
    ? (JSON.parse(tooltipsAttr) as string[])
    : [
        "Caso tenha alguma dúvida, pergunte ao nosso chatbot",
        "Caso tenha alguma dúvida sobre a ferramenta, pode me perguntar",
        "Precisa de ajuda com o Ottavada? Pergunte aqui!",
      ];

  const errorMessage = tooltip?.getAttribute("data-error") ??
    "Desculpe, ocorreu um erro. Tente novamente.";
  const statusTyping = tooltip?.getAttribute("data-status-typing") ?? "Digitando...";
  const statusOnline = tooltip?.getAttribute("data-status-online") ?? "Online";

  let isOpen = false;
  let isSending = false;
  let hasInteracted = false;
  let history: ChatEntry[] = [];
  let tooltipVisible = false;
  let tooltipTimer: ReturnType<typeof setTimeout> | null = null;
  let tooltipIndex = 0;

  function autoResize() {
    input!.style.height = "auto";
    input!.style.height = input!.scrollHeight + "px";
  }

  function resetTextarea() {
    input!.style.height = "";
  }

  function setBotImages(src: string) {
    if (fabImg) fabImg.src = src;
  }

  function setStatus(text: string) {
    if (statusEl) statusEl.textContent = text;
  }

  function openChat() {
    isOpen = true;
    popup!.classList.add("open");
    dot!.classList.remove("visible");
    if (tooltip) {
      tooltip.classList.remove("visible");
      tooltipVisible = false;
    }
    if (tooltipTimer) {
      clearTimeout(tooltipTimer);
      tooltipTimer = null;
    }
    input!.focus();
  }

  function closeChat() {
    isOpen = false;
    popup!.classList.remove("open");
    hasInteracted = true;
  }

  function toggleChat() {
    if (isOpen) closeChat();
    else openChat();
  }

  function addMessage(text: string, type: "user" | "bot" | "thinking") {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    messages!.appendChild(bubble);
    messages!.scrollTop = messages!.scrollHeight;
    return bubble;
  }

  function showThinking() {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble bot thinking-bubble";
    bubble.id = "thinkingBubble";
    for (let i = 0; i < 3; i += 1) {
      const span = document.createElement("span");
      span.className = "thinking-dot";
      bubble.appendChild(span);
    }
    messages!.appendChild(bubble);
    messages!.scrollTop = messages!.scrollHeight;
  }

  function removeThinking() {
    const bubble = document.getElementById("thinkingBubble");
    if (bubble) bubble.remove();
  }

  function sendMessage(text: string) {
    if (!text.trim() || isSending) return;
    const msg = text.trim();
    addMessage(msg, "user");
    history.push({ role: "user", msg });
    saveHistory(history);

    input!.value = "";
    resetTextarea();
    sendBtn!.disabled = true;
    isSending = true;

    setBotImages("/files/bot-pensando.avif");
    showThinking();
    setStatus(statusTyping);

    const body = {
      old_msg: history.length > 1 ? history.slice(0, -1) : null,
      msg,
    };

    const timeoutId = setTimeout(() => {
      removeThinking();
      setBotImages("/files/bot.avif");
      setStatus(statusOnline);
      addMessage(errorMessage, "bot");
      isSending = false;
    }, 120000);

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error(`Erro ${res.status}`);
        return res.json();
      })
      .then((data: { msg?: string }) => {
        removeThinking();
        setBotImages("/files/bot.avif");
        setStatus(statusOnline);
        if (data && data.msg) {
          addMessage(data.msg, "bot");
          history.push({ role: "bot", msg: data.msg });
          saveHistory(history);
        }
      })
      .catch(() => {
        clearTimeout(timeoutId);
        removeThinking();
        setBotImages("/files/bot.avif");
        setStatus(statusOnline);
        addMessage(errorMessage, "bot");
      })
      .finally(() => {
        isSending = false;
      });
  }

  function initChat() {
    if (tooltip) tooltip.style.display = "";

    const saved = loadHistory();
    if (saved.length) {
      history = saved;
      history.forEach((entry) => {
        addMessage(entry.msg, entry.role === "user" ? "user" : "bot");
      });
    }

    fab!.style.display = "";
    fab!.addEventListener("click", toggleChat);
    closeBtn!.addEventListener("click", closeChat);

    input!.addEventListener("input", () => {
      sendBtn!.disabled = !input!.value.trim() || isSending;
      autoResize();
    });

    input!.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        if (!input!.value.trim() || isSending) return;
        sendMessage(input!.value);
      }
      if (event.key === "Escape") {
        closeChat();
        fab!.focus();
      }
    });

    form!.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!input!.value.trim() || isSending) return;
      sendMessage(input!.value);
    });

    dot!.classList.add("visible");

    function showTooltip() {
      if (isOpen) return;
      if (tooltip) {
        tooltip.textContent = tooltips[tooltipIndex] || tooltips[0];
        tooltip.classList.add("visible");
        tooltipVisible = true;
        tooltipIndex = (tooltipIndex + 1) % tooltips.length;
        tooltipTimer = setTimeout(() => {
          tooltip!.classList.remove("visible");
          tooltipVisible = false;
        }, 8000);
      }
    }

    function scheduleTooltip() {
      if (hasInteracted) return;
      const delay = 30000 + Math.random() * 30000;
      setTimeout(() => {
        if (hasInteracted) return;
        if (!isOpen && !tooltipVisible) showTooltip();
        scheduleTooltip();
      }, delay);
    }

    showTooltip();
    scheduleTooltip();
  }

  fetch(`${WEBHOOK_URL}/status`, { method: "POST" })
    .then((res) => {
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      return res.json();
    })
    .then((data: { status?: string }) => {
      if (data && data.status === "ok") {
        initChat();
      }
    })
    .catch(() => {
      /* swallow */
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
