'use client'

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Bronze', value: 22105 },
  { name: 'Silver', value: 14320 },
  { name: 'Gold', value: 8906 },
  { name: 'Platinum', value: 2900 },
]

const COLORS = ['#f59e0b', '#a0aec0', '#fbbf24', '#60a5fa']

export default function TierDistribution() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Tier distribution</h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value.toLocaleString()}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
