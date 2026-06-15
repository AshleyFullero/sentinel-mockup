'use client'

import { useState } from 'react'
import { SentinelHeader } from '@/components/sentinel-header'
import { CitizenPortal } from '@/components/citizen-portal'
import { AdminDashboard } from '@/components/admin-dashboard'

export default function Home() {
  const [currentView, setCurrentView] = useState<'citizen' | 'admin'>('citizen')

  return (
    <div className="min-h-screen bg-background">
      <SentinelHeader currentView={currentView} onViewChange={setCurrentView} />
      
      {currentView === 'citizen' && <CitizenPortal />}
      {currentView === 'admin' && <AdminDashboard />}
    </div>
  )
}
