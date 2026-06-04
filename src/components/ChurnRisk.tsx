'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Zap } from 'lucide-react'

const data = [
  { risk: 'High risk', count: 2341, percentage: 4.9 },
  { risk: 'Medium risk', count: 6720, percentage: 13.9 },
  { risk: 'Low risk', count: 29043, percentage: 60.2 },
]

export default function ChurnRisk() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Churn risk</h2>
        <span className="text-sm text-gray-500">AI analysis</span>
      </div>

      <div className="space-y-3">
        {data.map((item, idx) => {
          const colors = [
            { bar: '#ef4444', bg: '#fee2e2' },
            { bar: '#f59e0b', bg: '#fef3c7' },
            { bar: '#10b981', bg: '#dcfce7' },
          ]
          const color = colors[idx]

          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">{item.risk}</span>
                <span className="text-sm font-semibold text-gray-900">
                  {item.count.toLocaleString()} ({item.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${item.percentage * 2}%`,
                    backgroundColor: color.bar,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
        <Zap size={18} />
        Run AI Campaign Agent
      </button>
    </div>
  )
}
