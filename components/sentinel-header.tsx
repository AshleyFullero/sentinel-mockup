'use client'

import { Shield, Link2 } from 'lucide-react'

export function SentinelHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between h-16 px-6 max-w-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Shield className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
            <Link2 className="w-4 h-4 text-blue-600 absolute" strokeWidth={2} />
          </div>
          <h1 className="text-xl font-bold text-slate-900">SentinelAgent</h1>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full pulse-soft" />
          <span className="text-xs text-emerald-600 font-semibold">LIVE</span>
        </div>
      </div>
    </header>
  )
}
