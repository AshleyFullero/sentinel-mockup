'use client'

import { Shield, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SentinelHeaderProps {
  currentView: 'citizen' | 'admin'
  onViewChange: (view: 'citizen' | 'admin') => void
}

export function SentinelHeader({ currentView, onViewChange }: SentinelHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md transition-all duration-300 hover:bg-background/90">
      <div className="flex items-center justify-between h-16 px-6 max-w-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Shield className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
            <Link2 className="w-4 h-4 text-cyan-400 absolute" strokeWidth={2} />
          </div>
          <h1 className="text-xl font-bold text-foreground">SentinelAgent</h1>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 border border-white/10">
          <Button
            onClick={() => onViewChange('citizen')}
            variant={currentView === 'citizen' ? 'default' : 'ghost'}
            size="sm"
            className={currentView === 'citizen' ? 'bg-cyan-500 hover:bg-cyan-600 text-background' : 'text-foreground hover:text-cyan-400'}
          >
            Citizen Portal
          </Button>
          <Button
            onClick={() => onViewChange('admin')}
            variant={currentView === 'admin' ? 'default' : 'ghost'}
            size="sm"
            className={currentView === 'admin' ? 'bg-cyan-500 hover:bg-cyan-600 text-background' : 'text-foreground hover:text-cyan-400'}
          >
            Admin Dashboard
          </Button>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full pulse-soft" />
          <span className="text-xs text-emerald-400 font-medium">LIVE</span>
        </div>
      </div>
    </header>
  )
}
