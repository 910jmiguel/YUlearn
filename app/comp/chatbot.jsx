"use client";
import React, { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(true); // Start minimized

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("/api/cohere-chat", { message: input });
      const aiMessage = { role: "ai", content: response.data.content };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white text-black shadow-lg rounded-lg w-64">
      <div className="bg-red-600 text-white px-3 py-1 rounded-t-lg cursor-pointer"
        onClick={() => setIsMinimized(!isMinimized)}>
        <h1 className="text-sm font-semibold">
          {isMinimized ? "Chat (Click to Expand)" : "YuLearn Support"}
        </h1>
      </div>

      {!isMinimized && (
        <div className="flex flex-col h-72">
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2 text-sm">
                <strong className="block">
                  {msg.role === "user" ? "You" : "YuLearn Support"}:
                </strong>
                <span>{msg.content}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Message..."
              className="flex-1 px-3 py-1 border rounded-lg text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-600/40 transition text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
