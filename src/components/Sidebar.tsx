'use client'

import { LayoutDashboard, Users, Gift, Zap, TrendingUp, Upload } from 'lucide-react'

const menuItems = [
  {
    category: 'OVERVIEW',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', active: true },
      { icon: Users, label: 'Customers', badge: '2.3k' },
    ]
  },
  {
    category: 'LOYALTY',
    items: [
      { icon: Gift, label: 'Rewards' },
      { icon: Zap, label: 'Campaigns' },
    ]
  },
  {
    category: 'AI TOOLS',
    items: [
      { icon: Zap, label: 'AI Copilot' },
      { icon: TrendingUp, label: 'Predictions' },
    ]
  },
  {
    category: 'GRAPH',
    items: [
      { icon: TrendingUp, label: 'Knowledge Graph' },
      { icon: Upload, label: 'Upload File' },
    ]
  },
]

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold">
          L
        </div>
        <div>
          <h1 className="font-bold text-sm">Loyalty Assistant</h1>
          <p className="text-xs text-gray-500">Reward Platform</p>
        </div>
      </div>

      {/* Menu Items */}
      {menuItems.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {section.category}
          </h3>
          <nav className="space-y-1">
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon
              return (
                <button
                  key={itemIdx}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    item.active
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      ))}

      {/* Admin Profile */}
      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center text-sm font-bold text-amber-700">
            AD
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">Platform Manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
