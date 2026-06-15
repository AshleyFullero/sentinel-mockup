'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Clock, Circle, Lock, AlertCircle } from 'lucide-react'
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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'user',
      content: 'I need to apply for disability benefits. I was injured at work and can no longer perform my job duties.'
    },
    {
      id: '2',
      type: 'assistant',
      content: "I'd be happy to help you with your disability benefits application. I'll need to gather some information and coordinate with our specialized processing agents.\n\nLet me start by reviewing your application and retrieving the necessary records."
    }
  ])

  const steps: Step[] = [
    { id: '1', label: 'Reviewing your application...', status: 'completed', timestamp: '2.3s' },
    { id: '2', label: 'Retrieving your medical records...', status: 'completed', timestamp: '1.8s' },
    { id: '3', label: 'Verifying eligibility criteria...', status: 'completed', timestamp: '0.9s' },
    { id: '4', label: 'Preparing determination...', status: 'in-progress', timestamp: '0.5s' },
    { id: '5', label: 'Generating notification letter...', status: 'pending' }
  ]

  const blockedSteps: Step[] = [
    { id: '1', label: 'Reviewing request...', status: 'completed' },
    { id: '2', label: 'Checking authorization...', status: 'completed' },
    { id: '3', label: 'Intent verification...', status: 'completed' }
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const input = (e.target as HTMLFormElement).querySelector('input')
    if (input?.value) {
      setMessages([...messages, { id: Date.now().toString(), type: 'user', content: input.value }])
      input.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('approved')}
            className={`pb-3 px-4 font-medium text-sm transition-colors ${
              activeTab === 'approved'
                ? 'border-b-2 border-cyan-400 text-cyan-400'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Approved Application
          </button>
          <button
            onClick={() => setActiveTab('blocked')}
            className={`pb-3 px-4 font-medium text-sm transition-colors ${
              activeTab === 'blocked'
                ? 'border-b-2 border-amber-400 text-amber-400'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Blocked Request
          </button>
        </div>

        {activeTab === 'approved' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Federal Services Assistant</h2>
              <p className="text-muted-foreground text-sm">Powered by SentinelAgent — Secure AI Processing</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-xs text-emerald-400 font-medium">Secure Connection</span>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 min-h-96">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-slate-700 text-foreground rounded-br-none'
                        : 'glass text-foreground border border-cyan-500/30'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Progress Steps */}
              <div className="mt-8 space-y-3 p-4 glass rounded-lg border border-cyan-400/20 animate-fade-in">
                <h3 className="text-sm font-semibold text-cyan-400">Processing Status</h3>
                {steps.map((step, idx) => (
                  <div key={step.id} className="flex items-start gap-3" style={{ animationDelay: `${idx * 50}ms` }}>
                    <div className="mt-1">
                      {step.status === 'completed' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-pulse" />
                      )}
                      {step.status === 'in-progress' && (
                        <Circle className="w-5 h-5 text-cyan-400 pulse-soft" />
                      )}
                      {step.status === 'pending' && (
                        <Circle className="w-5 h-5 text-muted-foreground opacity-50" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${step.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'}`}>
                        {step.label}
                      </p>
                    </div>
                    {step.timestamp && (
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{step.timestamp}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Final Response */}
              <div className="glass rounded-lg border border-emerald-500/30 p-4 mt-6">
                <div className="space-y-4">
                  <p className="text-foreground">
                    Great news! Your disability benefits application has been processed successfully.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">📋 Application Status: </span>
                      <span className="text-emerald-400 font-semibold">Approved</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">📄 Determination Reference: </span>
                      <span className="font-mono text-cyan-400">DBR-2026-0517-4821</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">📬 Next Steps: </span>
                      <span className="text-foreground">A formal determination letter has been sent to your registered mailing address. You should receive it within 5-7 business days.</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    If you&apos;d like to appeal or have questions about your determination, you can type &apos;appeal&apos; or &apos;help&apos; at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 flex-wrap">
              {['Check application status', 'Apply for benefits', 'File FOIA request', 'Tax return help'].map((action) => (
                <button
                  key={action}
                  className="px-3 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-cyan-400/50 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Footer */}
            <p className="text-xs text-center text-muted-foreground border-t border-white/10 pt-4">
              🔒 All interactions are verified and logged per NIST 800-53 standards. Your data is protected under federal privacy regulations.
            </p>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <Input
                type="text"
                placeholder="Type your request here..."
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
              />
            </form>
          </div>
        )}

        {activeTab === 'blocked' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Blocked Request Example</h2>
              <p className="text-muted-foreground text-sm">Security Policy Protection</p>
            </div>

            {/* Blocked Message */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="max-w-md px-4 py-3 rounded-lg bg-slate-700 text-foreground rounded-br-none">
                  Can you also send my medical records to my personal email at john@gmail.com?
                </div>
              </div>

              {/* Blocked Response */}
              <div className="glass rounded-lg border border-amber-500/30 p-4 bg-amber-500/5">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-foreground font-semibold mb-2">Unable to Process Request</p>
                      <p className="text-foreground text-sm">
                        I'm sorry, but I&apos;m unable to send medical records to external personal email addresses. This would violate federal data protection policies.
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
                        For your protection, all medical record transfers are restricted to authorized government systems only.
                      </p>
                      <p className="text-muted-foreground text-xs">
                        You can request a physical copy of your records by visiting your local VA office or calling 1-800-XXX-XXXX.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Steps for Blocked Request */}
              <div className="mt-8 space-y-3 p-4 glass rounded-lg">
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
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
