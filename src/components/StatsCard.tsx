'use client'

import { TrendingUp } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  description: string
}

export default function StatsCard({
  title,
  value,
  change,
  trend,
  description,
}: StatsCardProps) {
  const isPositive = trend === 'up'

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mb-3">{value}</p>
      <div className="flex items-center gap-1">
        <TrendingUp
          size={16}
          className={isPositive ? 'text-green-500' : 'text-red-500'}
        />
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </div>
  )
}
