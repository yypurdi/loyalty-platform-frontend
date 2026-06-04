'use client'

import { Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AICopilot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m LoyalAI, your loyalty copilot. Ask me anything about members, rewards, tier upgrades, or campaigns.',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { role: 'user', content: input }])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I understand. Based on the loyalty data, I can help you with that. What specific information do you need?',
        },
      ])
    }, 500)
  }

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <MessageCircle size={32} className="text-amber-500" />
          AI Copilot
        </h1>
        <p className="text-sm text-gray-600">Chat with LoyalAI for instant insights</p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6 overflow-y-auto mb-6">
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-amber-500 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask anything..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          onClick={handleSend}
          className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2"
        >
          <Send size={18} />
          Send
        </button>
      </div>
    </div>
  )
}
