import React from 'react';
import ChatBot from './ChatBot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">ChatGPT Clone</h1>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        <ChatBot />
      </main>
      <footer className="p-2 bg-gray-200 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noreferrer" className="cursor-pointer text-blue-600">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}