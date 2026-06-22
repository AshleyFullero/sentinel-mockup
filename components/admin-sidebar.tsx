'use client'

import { Grid3X3, Workflow, Users, Link2, BarChart3, Brain, AlertTriangle, Search, Lock, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: Grid3X3 },
  { id: 'pipeline', label: 'Live Pipeline', icon: Workflow },
  { id: 'registry', label: 'Agent Registry', icon: Users },
  { id: 'chains', label: 'Delegation Chains', icon: Link2 },
  { id: 'benchmark', label: 'DelegationBench', icon: BarChart3 },
  { id: 'p2-model', label: 'Contrastive P2', icon: Brain },
  { id: 'threats', label: 'Threat Feed', icon: AlertTriangle },
  { id: 'audit', label: 'Forensic Audit', icon: Search },
  { id: 'compliance', label: 'NIST Compliance', icon: Lock }
]

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-20 z-40 p-2 rounded-lg hover:bg-slate-100 lg:hidden"
      >
        {isOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white border-r border-slate-200 p-4 overflow-y-auto transition-all duration-300 z-30 shadow-sm lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* LIVE Badge */}
        <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
          <div className="flex items-center gap-2 px-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-emerald-600">LIVE SYSTEM</span>
          </div>
          <div className="text-xs text-slate-500 px-4 space-y-1">
            <p>Status: <span className="text-emerald-600 font-medium">Operational</span></p>
            <p>Uptime: <span className="text-blue-600 font-medium">99.97%</span></p>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-16 bg-slate-900/20 z-20 lg:hidden"
        />
      )}
    </>
  )
}
