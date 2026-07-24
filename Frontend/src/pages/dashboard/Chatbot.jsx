import { useState, useRef, useEffect } from "react";
import { Send, Bot, UserRound, Sparkles, Menu, X, MessageSquare, Plus } from "lucide-react";

const QUICK_REPLIES = [
  "Explain my heart risk report",
  "What does BMI mean?",
  "Tips to lower cholesterol",
];

// TODO: replace with real chat history fetched from backend
const DUMMY_HISTORY = [
  { id: "h1", title: "Heart risk report explained", date: "Today" },
  { id: "h2", title: "BMI and healthy range", date: "Today" },
  { id: "h3", title: "Cholesterol diet tips", date: "Yesterday" },
  { id: "h4", title: "Blood pressure readings", date: "2 days ago" },
  { id: "h5", title: "Diabetes screening questions", date: "Last week" },
    { id: "h1", title: "Heart risk report explained", date: "Today" },
  { id: "h2", title: "BMI and healthy range", date: "Today" },
  { id: "h3", title: "Cholesterol diet tips", date: "Yesterday" },
  { id: "h4", title: "Blood pressure readings", date: "2 days ago" },
  { id: "h5", title: "Diabetes screening questions", date: "Last week" },
    { id: "h1", title: "Heart risk report explained", date: "Today" },
  { id: "h2", title: "BMI and healthy range", date: "Today" },
  { id: "h3", title: "Cholesterol diet tips", date: "Yesterday" },
  { id: "h4", title: "Blood pressure readings", date: "2 days ago" },
  { id: "h5", title: "Diabetes screening questions", date: "Last week" },
];

const SIDEBAR_WIDTH = 288; // px, matches w-72
const EDGE_ZONE = 24; // px from left edge that triggers open-swipe

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0d5c63] to-[#0b4a50] text-white shadow-md">
        <Bot size={16} />
      </div>
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/70 backdrop-blur px-4 py-3 shadow-sm">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#0d5c63]/50 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hi! I'm your health assistant. Ask me anything about your reports, symptoms, or general wellness.",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Swipe/drag state
  const [dragX, setDragX] = useState(null); // current translateX while dragging, null when not dragging
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const draggingRef = useRef(false);
  const startedFromEdgeRef = useRef(false);

  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: trimmed, time: new Date() },
    ]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    setIsTyping(true);

    // TODO: replace with real Flask/chatbot API call — append the actual bot reply here
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "bot",
          text: "Got it — let me look into that for you.",
          time: new Date(),
        },
      ]);
    }, 1200);
  };

  const handleSend = () => sendMessage(input);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
    }
  };

  const startNewChat = () => {
    setMessages([
      {
        id: Date.now(),
        from: "bot",
        text: "Hi! I'm your health assistant. Ask me anything about your reports, symptoms, or general wellness.",
        time: new Date(),
      },
    ]);
    setShowHistory(false);
  };

  // ---- Swipe handlers (whole screen container) ----
  const onTouchStart = (e) => {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    touchStartX.current = x;
    touchStartY.current = y;
    draggingRef.current = false;

    // Allow opening only if touch starts near left edge (and sidebar is closed),
    // or anywhere on the sidebar itself (to allow closing it)
    startedFromEdgeRef.current = !showHistory && x <= EDGE_ZONE;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;

    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const dx = x - touchStartX.current;
    const dy = y - touchStartY.current;

    if (!draggingRef.current) {
      // Only start dragging if horizontal movement dominates (avoid hijacking vertical scroll)
      if (Math.abs(dx) < 8 || Math.abs(dy) > Math.abs(dx)) return;
      if (!showHistory && !startedFromEdgeRef.current) return;
      draggingRef.current = true;
    }

    let next;
    if (showHistory) {
      // Sidebar open: dragging left closes it
      next = SIDEBAR_WIDTH + Math.min(0, dx);
    } else {
      // Sidebar closed: dragging right from edge opens it
      next = Math.max(0, dx);
    }

    setDragX(Math.max(0, Math.min(SIDEBAR_WIDTH, next)));
  };

  const onTouchEnd = () => {
    if (draggingRef.current && dragX !== null) {
      const shouldOpen = dragX > SIDEBAR_WIDTH * 0.4;
      setShowHistory(shouldOpen);
    }
    setDragX(null);
    touchStartX.current = null;
    touchStartY.current = null;
    draggingRef.current = false;
  };

  // Sidebar's live transform: dragging takes priority, else snap based on state
  const sidebarTransform =
    dragX !== null
      ? `translateX(${dragX - SIDEBAR_WIDTH}px)`
      : showHistory
      ? "translateX(0)"
      : `translateX(-${SIDEBAR_WIDTH}px)`;

  const backdropOpacity =
    dragX !== null ? dragX / SIDEBAR_WIDTH : showHistory ? 1 : 0;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative flex h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef5f4] via-white to-[#e6f7f5] shadow-xl border border-black/5"
    >

      {/* Backdrop for mobile when history is open/dragging */}
      {(showHistory || dragX !== null) && (
        <div
          onClick={() => setShowHistory(false)}
          style={{ opacity: backdropOpacity }}
          className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm sm:hidden transition-opacity"
        />
      )}

      {/* History sidebar */}
      <div
        style={{
          width: SIDEBAR_WIDTH,
          transform: window.innerWidth < 640 ? sidebarTransform : undefined,
          transition: dragX !== null ? "none" : "transform 300ms ease-in-out",
        }}
        className={`absolute sm:relative sm:translate-x-0 z-30 flex h-full shrink-0 flex-col border-r border-black/5 bg-white/95 backdrop-blur
          ${showHistory ? "sm:flex" : "sm:hidden sm:flex"}
        `}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <p className="text-sm font-semibold text-[#0b1f24]">Chat History</p>
          <button
            onClick={() => setShowHistory(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#5b7a75] hover:bg-[#eef5f4] sm:hidden"
            aria-label="Close history"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-3">
          <button
            onClick={startNewChat}
            className="flex w-full items-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#0b4a50] px-3 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            <Plus size={16} />
            New chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {DUMMY_HISTORY.map((h) => (
            <button
              key={h.id}
              className="flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left transition hover:bg-[#eef5f4]"
            >
              <MessageSquare size={15} className="mt-0.5 shrink-0 text-[#0d5c63]" />
              <div className="min-w-0">
                <p className="truncate text-sm text-[#0b1f24]">{h.title}</p>
                <p className="text-[11px] text-[#5b7a75]">{h.date}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Grab handle hint, mobile only */}
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 h-16 w-1 rounded-full bg-[#0d5c63]/15 sm:hidden" />
      </div>

      {/* Main chat area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#0d5c63] via-[#0f6a72] to-[#ff8552] px-4 py-4 sm:px-6">
          <button
            onClick={() => setShowHistory((s) => !s)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15"
            aria-label="Toggle chat history"
          >
            <Menu size={20} />
          </button>

          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white ring-2 ring-white/30">
            <Bot size={22} />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
          </div>
          <div>
            <p className="text-base font-semibold text-white">Health Assistant</p>
            <p className="flex items-center gap-1 text-xs text-white/80">
              <Sparkles size={12} /> AI-powered • Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-8"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.from === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-md ${
                  msg.from === "user"
                    ? "bg-gradient-to-br from-[#ff8552] to-[#ff6b35]"
                    : "bg-gradient-to-br from-[#0d5c63] to-[#0b4a50]"
                }`}
              >
                {msg.from === "user" ? <UserRound size={16} /> : <Bot size={16} />}
              </div>

              <div className={`flex max-w-[78%] flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`px-4 py-2.5 text-sm leading-relaxed shadow-md ${
                    msg.from === "user"
                      ? "rounded-2xl rounded-br-sm bg-gradient-to-br from-[#ff8552] to-[#ff6b35] text-white"
                      : "rounded-2xl rounded-bl-sm bg-white/80 backdrop-blur text-[#0b1f24] border border-black/5"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1 px-1 text-[10px] text-[#5b7a75]">
                  {formatTime(msg.time)}
                </span>
              </div>
            </div>
          ))}

          {isTyping && <TypingIndicator />}

          {/* Quick replies — only before the conversation gets going */}
          {messages.length === 1 && !isTyping && (
            <div className="flex flex-wrap gap-2 pt-2 pl-10">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="rounded-full border border-[#0d5c63]/20 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-[#0d5c63] shadow-sm transition hover:bg-white hover:shadow"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-black/5 bg-white/50 backdrop-blur p-3 sm:p-4">
          <div className="flex items-end gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-sm focus-within:border-[#0d5c63] focus-within:ring-2 focus-within:ring-[#0d5c63]/10 transition">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
              className="max-h-[120px] flex-1 resize-none bg-transparent py-1.5 text-sm outline-none placeholder:text-[#5b7a75]/70"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0d5c63] to-[#0b4a50] text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="mt-1.5 px-1 text-center text-[10px] text-[#5b7a75]">
            Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;