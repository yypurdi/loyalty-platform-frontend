'use client'

import { useState } from 'react'
import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/Sidebar'
import Customers from '@/components/Customers'
import Rewards from '@/components/Rewards'
import Campaigns from '@/components/Campaigns'
import AICopilot from '@/components/AICopilot'

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('Dashboard')

  const renderContent = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <Dashboard />
      case 'Customers':
        return <Customers />
      case 'Rewards':
        return <Rewards />
      case 'Campaigns':
        return <Campaigns />
      case 'AI Copilot':
        return <AICopilot />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  )
}
