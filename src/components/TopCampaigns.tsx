'use client'

const campaigns = [
  {
    name: 'Double Weekend',
    participants: 12400,
    roi: '3.2×',
  },
  {
    name: 'Birthday Bonus',
    participants: 3200,
    roi: '4.1×',
  },
  {
    name: 'Platinum Unlock',
    participants: 620,
    roi: '5.6×',
  },
]

export default function TopCampaigns() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Top campaigns</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 font-medium border-b border-gray-200 pb-4">
          <div>Campaign</div>
          <div>Participants</div>
          <div>ROI</div>
        </div>
        {campaigns.map((campaign, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-100 last:border-b-0">
            <div className="font-medium text-gray-900">{campaign.name}</div>
            <div className="text-gray-600">{campaign.participants.toLocaleString()}</div>
            <div className="text-amber-600 font-medium">{campaign.roi}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
