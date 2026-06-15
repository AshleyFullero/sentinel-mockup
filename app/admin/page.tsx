'use client'

import { SentinelHeader } from '@/components/sentinel-header'
import { AdminDashboard } from '@/components/admin-dashboard'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <SentinelHeader />
      <AdminDashboard />
    </div>
  )
}
