import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useMessages } from '../context/MessageContext';
import MessageList from './MessageList';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const { messages, addMessage } = useMessages();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    addMessage({ role: 'user', content: input });
    setInput('');

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      addMessage({
        role: 'assistant',
        content: 'This is a simulated AI response. Connect to your preferred AI API for real responses.',
      });
    }, 1000);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
      <div className="h-[calc(100vh-12rem)] flex flex-col">
        <MessageList messages={messages} />
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatInterface;