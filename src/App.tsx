import React from 'react';
import ChatInterface from './components/ChatInterface';
import { MessageProvider } from './context/MessageContext';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <MessageProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <header className="p-4 border-b border-white/10">
          <div className="container mx-auto flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-300" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
              AI Assistant
            </h1>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <ChatInterface />
        </main>
      </div>
    </MessageProvider>
  );
}

export default App;