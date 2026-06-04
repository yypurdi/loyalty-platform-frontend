'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', earned: 4000, redeemed: 2400 },
  { month: 'Feb', earned: 3500, redeemed: 1398 },
  { month: 'Mar', earned: 4200, redeemed: 2800 },
  { month: 'Apr', earned: 3800, redeemed: 1900 },
  { month: 'May', earned: 4500, redeemed: 2200 },
]

export default function PointsActivityChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Points activity — last 5 months</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Bar dataKey="earned" fill="#f59e0b" name="Points earned (K)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="redeemed" fill="#10b981" name="Redemptions (K)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
