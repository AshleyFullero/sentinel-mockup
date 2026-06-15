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
        className="fixed left-4 top-20 z-40 p-2 rounded-lg hover:bg-white/10 lg:hidden"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-background border-r border-white/10 p-4 overflow-y-auto transition-all duration-300 z-30 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="space-y-2">
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-cyan-400 border-l-2 border-cyan-400'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* LIVE Badge */}
        <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-2 px-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-emerald-400">LIVE SYSTEM</span>
          </div>
          <div className="text-xs text-muted-foreground px-4 space-y-1">
            <p>Status: <span className="text-emerald-400">Operational</span></p>
            <p>Uptime: <span className="text-cyan-400">99.97%</span></p>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-16 bg-black/40 z-20 lg:hidden"
        />
      )}
    </>
  )
}
