import { Bot, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatbotButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 z-50">

      <button
        onClick={() => navigate("/chatbot")}
        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
      >

        {/* Bot Icon */}
        <div className="relative">

          <Bot size={26} />

          {/* Ping Animation */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>

        </div>

        {/* Text */}
        <div className="hidden sm:block text-left">

          <p className="font-semibold leading-none">
            AI Health Assistant
          </p>

          <span className="text-xs text-blue-100">
            Ask your health questions
          </span>

        </div>

        {/* Chat Icon */}
        <MessageCircle
          size={20}
          className="group-hover:translate-x-1 transition"
        />

      </button>

    </div>
  );
};

export default ChatbotButton;