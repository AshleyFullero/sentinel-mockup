'use client'

import { useState } from 'react'
import { AdminSidebar } from './admin-sidebar'
import { AdminOverview } from './admin-overview'
import { AdminLivePipeline, AdminAgentRegistry, AdminP2Model } from './admin-pages'
import { AdminDelegationChains, AdminBenchmark, AdminThreatFeed, AdminForensicAudit, AdminNISTCompliance } from './admin-pages-extended'

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverview />
      case 'pipeline':
        return <AdminLivePipeline />
      case 'registry':
        return <AdminAgentRegistry />
      case 'chains':
        return <AdminDelegationChains />
      case 'benchmark':
        return <AdminBenchmark />
      case 'p2-model':
        return <AdminP2Model />
      case 'threats':
        return <AdminThreatFeed />
      case 'audit':
        return <AdminForensicAudit />
      case 'compliance':
        return <AdminNISTCompliance />
      default:
        return <AdminOverview />
    }
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="lg:ml-64 px-4 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  )
}
