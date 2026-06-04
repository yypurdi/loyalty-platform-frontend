'use client'

import { MessageCircle, Plus } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <MessageCircle size={20} />
          Ask AI
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white hover:bg-amber-600 rounded-lg font-medium">
          <Plus size={20} />
          New campaign
        </button>
      </div>
    </div>
  )
}
