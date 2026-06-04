'use client'

import { Search, Plus } from 'lucide-react'

const customers = [
  {
    code: 'CUST-2026-0001',
    name: '—',
    email: '—',
    type: 'INDIVIDUAL',
    phone: '—',
    status: 'ACTIVE',
    created: '4/6/2026',
  },
  {
    code: 'CUST0003',
    name: '—',
    email: '—',
    type: 'INDIVIDUAL',
    phone: '—',
    status: 'ACTIVE',
    created: '4/6/2026',
  },
  {
    code: 'CUST0016',
    name: '—',
    email: '—',
    type: 'INDIVIDUAL',
    phone: '—',
    status: 'ACTIVE',
    created: '4/6/2026',
  },
  {
    code: 'CUST0005',
    name: '—',
    email: '—',
    type: 'INDIVIDUAL',
    phone: '—',
    status: 'ACTIVE',
    created: '4/6/2026',
  },
  {
    code: 'CUST0006',
    name: 'Doliono Latupono',
    email: 'gunawantimedid.or.id',
    type: 'INDIVIDUAL',
    phone: '—',
    status: 'ACTIVE',
    created: '4/6/2026',
  },
  {
    code: 'CUST0007',
    name: 'Wardaya Rahimah',
    email: 'nasyidahvisem@yahoo.com',
    type: 'INDIVIDUAL',
    phone: '—',
    status: 'ACTIVE',
    created: '4/6/2026',
  },
]

export default function Customers() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-sm text-gray-600">101 registered customers</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-gray-900 hover:bg-lime-500 rounded-lg font-medium transition-colors">
          <Plus size={20} />
          New Customer
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by code, email, phone..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
          <option>All Status</option>
          <option>ACTIVE</option>
          <option>INACTIVE</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">CODE</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">NAME / EMAIL</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">TYPE</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">PHONE</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">CREATED</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.code}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>{customer.name}</div>
                    <div className="text-xs text-gray-500">{customer.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{customer.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{customer.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{customer.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
