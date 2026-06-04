'use client'

import { Plus } from 'lucide-react'

export default function Rewards() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rewards</h1>
          <p className="text-sm text-gray-600">Manage loyalty rewards and benefits</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white hover:bg-amber-600 rounded-lg font-medium transition-colors">
          <Plus size={20} />
          New Reward
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-gray-600">Rewards management page - Coming soon</p>
      </div>
    </div>
  )
}
