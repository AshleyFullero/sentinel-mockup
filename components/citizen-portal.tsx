'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Circle, Lock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
}

interface Step {
  id: string
  label: string
  status: 'completed' | 'in-progress' | 'pending'
  timestamp?: string
}

export function CitizenPortal() {
  const [activeTab, setActiveTab] = useState<'approved' | 'blocked'>('approved')
  const [inputVal, setInputVal] = useState('')

  // Approved State
  const [apprPhase, setApprPhase] = useState<'idle'|'processing'|'done'>('idle')
  const [apprMessages, setApprMessages] = useState<Message[]>([
    { id: 'init', type: 'assistant', content: 'Hello. I am the Federal Services Assistant. How can I help you today?' }
  ])

  // Blocked State
  const [blkPhase, setBlkPhase] = useState<'idle'|'processing'|'done'>('idle')
  const [blkMessages, setBlkMessages] = useState<Message[]>([
    { id: 'init', type: 'assistant', content: 'Hello. I am the Federal Services Assistant. How can I help you today? Try asking me to send your records to a personal email.' }
  ])

  const steps: Step[] = [
    { id: '1', label: 'Reviewing your application...', status: 'completed', timestamp: '2.3s' },
    { id: '2', label: 'Retrieving your records...', status: 'completed', timestamp: '1.8s' },
    { id: '3', label: 'Verifying eligibility criteria...', status: 'completed', timestamp: '0.9s' },
    { id: '4', label: 'Preparing determination...', status: 'completed', timestamp: '0.5s' },
    { id: '5', label: 'Generating notification letter...', status: 'completed', timestamp: '0.1s' }
  ]

  const blockedSteps: Step[] = [
    { id: '1', label: 'Reviewing request...', status: 'completed' },
    { id: '2', label: 'Checking authorization...', status: 'completed' },
    { id: '3', label: 'Intent verification...', status: 'completed' }
  ]

  const handleApprSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return
    setApprMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', content: inputVal }])
    setInputVal('')
    setApprPhase('processing')
    setTimeout(() => {
      setApprMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I'd be happy to help you with that. I'm coordinating with our specialized processing agents to handle your request."
      }])
      setTimeout(() => setApprPhase('done'), 2500)
    }, 1000)
  }

  const handleBlkSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return
    setBlkMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', content: inputVal }])
    setInputVal('')
    setBlkPhase('processing')
    setTimeout(() => {
      setBlkPhase('done')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/10">
          <button
            onClick={() => { setActiveTab('approved'); setInputVal(''); }}
            className={`pb-3 px-4 font-medium text-sm transition-colors ${
              activeTab === 'approved'
                ? 'border-b-2 border-cyan-400 text-cyan-400'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Approved Request Flow
          </button>
          <button
            onClick={() => { setActiveTab('blocked'); setInputVal(''); }}
            className={`pb-3 px-4 font-medium text-sm transition-colors ${
              activeTab === 'blocked'
                ? 'border-b-2 border-amber-400 text-amber-400'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Blocked Request Flow
          </button>
        </div>

        {activeTab === 'approved' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Federal Services Assistant</h2>
              <p className="text-muted-foreground text-sm">Powered by SentinelAgent — Secure AI Processing</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-xs text-emerald-400 font-medium">Secure Connection</span>
              </div>
            </div>

            <div className="space-y-4 min-h-96">
              {apprMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-slate-700 text-foreground rounded-br-none'
                        : 'glass text-foreground border border-cyan-500/30 whitespace-pre-wrap'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {apprPhase === 'processing' && (
                <div className="flex justify-start">
                  <div className="max-w-md px-4 py-3 rounded-lg glass text-muted-foreground border border-cyan-500/30 animate-pulse">
                    Processing request...
                  </div>
                </div>
              )}

              {apprPhase === 'done' && (
                <>
                  <div className="mt-8 space-y-3 p-4 glass rounded-lg border border-cyan-400/20 animate-fade-in">
                    <h3 className="text-sm font-semibold text-cyan-400">Processing Status</h3>
                    {steps.map((step, idx) => (
                      <div key={step.id} className="flex items-start gap-3" style={{ animationDelay: `${idx * 50}ms` }}>
                        <div className="mt-1">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground">{step.label}</p>
                        </div>
                        {step.timestamp && (
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{step.timestamp}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="glass rounded-lg border border-emerald-500/30 p-4 mt-6 animate-fade-in">
                    <div className="space-y-4">
                      <p className="text-foreground">
                        Great news! Your request has been processed successfully.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">📋 Status: </span>
                          <span className="text-emerald-400 font-semibold">Approved</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">📄 Reference: </span>
                          <span className="font-mono text-cyan-400">DBR-2026-0517-4821</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">📬 Next Steps: </span>
                          <span className="text-foreground">A formal notification letter has been sent to your registered mailing address. You should receive it within 5-7 business days.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <form onSubmit={handleApprSubmit} className="space-y-4 pt-4 border-t border-white/10">
              <Input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                type="text"
                placeholder="Type your request here..."
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                disabled={apprPhase === 'processing'}
              />
            </form>
          </div>
        )}

        {activeTab === 'blocked' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Federal Services Assistant</h2>
              <p className="text-muted-foreground text-sm">Security Policy Protection Demo</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-xs text-emerald-400 font-medium">Secure Connection</span>
              </div>
            </div>

            <div className="space-y-4 min-h-96">
              {blkMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-slate-700 text-foreground rounded-br-none'
                        : 'glass text-foreground border border-cyan-500/30 whitespace-pre-wrap'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {blkPhase === 'processing' && (
                <div className="flex justify-start">
                  <div className="max-w-md px-4 py-3 rounded-lg glass text-muted-foreground border border-cyan-500/30 animate-pulse">
                    Verifying request...
                  </div>
                </div>
              )}

              {blkPhase === 'done' && (
                <>
                  <div className="glass rounded-lg border border-amber-500/30 p-4 bg-amber-500/5 animate-fade-in">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="text-foreground font-semibold mb-2">Unable to Process Request</p>
                          <p className="text-foreground text-sm">
                            I'm sorry, but I am unable to fulfill this request. This action would violate federal data protection policies.
                          </p>
                        </div>
                      </div>

                      <div className="bg-background/50 rounded p-3 border border-white/10">
                        <div className="text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-400 font-medium">Security Notice:</span>
                          </div>
                          <p className="text-foreground text-sm">
                            For your protection, certain data transfers and actions are restricted to authorized government systems only.
                          </p>
                          <p className="text-muted-foreground text-xs">
                            You can request physical copies or perform actions through official portals by visiting your local agency office.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3 p-4 glass rounded-lg animate-fade-in">
                    <h3 className="text-sm font-semibold text-amber-400">Security Checks</h3>
                    {blockedSteps.map((step) => (
                      <div key={step.id} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground">{step.label}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                      <AlertCircle className="w-5 h-5 text-rose-400 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-rose-400">Intent Verification Failed</p>
                        <p className="text-xs text-muted-foreground mt-1">Request detected as drift from original scope</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <form onSubmit={handleBlkSubmit} className="space-y-4 pt-4 border-t border-white/10">
              <Input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                type="text"
                placeholder="Type your request here..."
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                disabled={blkPhase === 'processing'}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
