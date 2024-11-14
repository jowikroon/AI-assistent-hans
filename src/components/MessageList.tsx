import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex gap-3 ${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          {message.role === 'assistant' && (
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
          )}
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.role === 'user'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/10 text-white'
            }`}
          >
            {message.content}
          </div>
          {message.role === 'user' && (
            <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;