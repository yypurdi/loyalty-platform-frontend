'use client'

import StatsCard from './StatsCard'
import PointsActivityChart from './PointsActivityChart'
import TopCampaigns from './TopCampaigns'
import TierDistribution from './TierDistribution'
import ChurnRisk from './ChurnRisk'
import Header from './Header'

export default function Dashboard() {
  return (
    <div className="p-8">
      <Header />

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total members"
          value="48,231"
          change="12.3%"
          trend="up"
          description="vs last month"
        />
        <StatsCard
          title="Points issued"
          value="125.4M"
          change="8.7%"
          trend="up"
          description=""
        />
        <StatsCard
          title="Redemption rate"
          value="37.6%"
          change="3.1%"
          trend="up"
          description=""
        />
        <StatsCard
          title="At-risk members"
          value="2,341"
          change="5.2%"
          trend="up"
          description="churn risk"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <PointsActivityChart />
        </div>
        <div>
          <TierDistribution />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-2 gap-6">
        <TopCampaigns />
        <ChurnRisk />
      </div>
    </div>
  )
}
