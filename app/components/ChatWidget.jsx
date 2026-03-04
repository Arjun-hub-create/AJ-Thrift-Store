'use client';

import { useState, useRef, useEffect } from 'react';
import { IoSend, IoClose } from 'react-icons/io5';
import { BsChat } from 'react-icons/bs';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi! 👋 I can help you find products. Try searching for "hoodies", "caps", "black shoes", etc.',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call backend API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputValue }),
      });

      const data = await response.json();

      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: data.message || 'Sorry, no products found.',
        products: data.products || [],
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: 'Sorry, something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        title="Open chat"
      >
        {isOpen ? (
          <IoClose size={24} />
        ) : (
          <BsChat size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 bg-white rounded-lg shadow-2xl flex flex-col h-96 transition-all duration-300">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-lg">Product Search</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded transition-colors"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                {/* Message Text */}
                <div
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>

                {/* Products Grid */}
                {message.products && message.products.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer flex gap-3"
                      >
                        {/* Product Image */}
                        {product.image && (
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-800 truncate">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-600 capitalize">
                            {product.category}
                          </p>
                          <p className="text-blue-600 font-bold text-sm mt-1">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-3 bg-white rounded-b-lg flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 transition-colors disabled:bg-gray-400"
              disabled={isLoading || !inputValue.trim()}
              title="Send message"
            >
              <IoSend size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
