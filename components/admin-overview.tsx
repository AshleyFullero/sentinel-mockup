'use client'

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react'

const kpiData = [
  { label: 'Active Chains', value: '47', trend: '+3 today', icon: '🔗' },
  { label: 'Tokens Issued', value: '312', trend: '+23 today', icon: '🎫' },
  { label: 'Attack TPR', value: '100%', trend: '[98.1%, 100%] CI', icon: '✓' },
  { label: 'False Positive Rate', value: '0%', trend: '0/366 benign', icon: '✓' }
]

const sparklineData = [
  { value: 40 },
  { value: 45 },
  { value: 42 },
  { value: 50 },
  { value: 48 },
  { value: 52 },
  { value: 47 }
]

const propertyMatrixData = [
  { id: 'P1', name: 'Authority Narrowing', type: 'Deterministic', method: 'TLA+ (2.7M states)', status: '✓' },
  { id: 'P2', name: 'Intent Preservation', type: 'Probabilistic', method: 'Contrastive Embeddings', status: '✓ ML' },
  { id: 'P3', name: 'Policy Conjunction', type: 'Deterministic', method: 'TLA+', status: '✓' },
  { id: 'P4', name: 'Forensic Reconstruct', type: 'Deterministic', method: 'TLA+', status: '✓' },
  { id: 'P5', name: 'Cascade Containment', type: 'Deterministic', method: 'TLA+', status: '✓' },
  { id: 'P6', name: 'Scope-Action Binding', type: 'Deterministic', method: 'Real HTTP DAS', status: '✓' },
  { id: 'P7', name: 'Output Schema', type: 'Deterministic', method: 'Real HTTP DAS', status: '✓' }
]

const recentEvents = [
  { time: '12:34:21', chain: 'Chain-0047', src: 'IntakeAgent', dst: 'RecordsAgent', intent: 'read_records', cosine: 0.947, verdict: 'PASS' },
  { time: '12:33:58', chain: 'Chain-0046', src: 'RecordsAgent', dst: '[EXTERNAL]', intent: 'send_external', cosine: 0.312, verdict: 'BLOCK' },
  { time: '12:33:45', chain: 'Chain-0045', src: 'IntakeAgent', dst: 'EligibilityAgent', intent: 'query_eligibility', cosine: 0.891, verdict: 'PASS' },
  { time: '12:33:12', chain: 'Chain-0044', src: 'EligibilityAgent', dst: 'DecisionAgent', intent: 'format_report', cosine: 0.928, verdict: 'PASS' },
  { time: '12:32:39', chain: 'Chain-0043', src: 'DecisionAgent', dst: 'NotifyAgent', intent: 'generate_doc', cosine: 0.854, verdict: 'PASS' },
  { time: '12:32:01', chain: 'Chain-0042', src: 'IntakeAgent', dst: 'ContractorAgent', intent: 'read_records', cosine: 0.156, verdict: 'BLOCK' },
  { time: '12:31:28', chain: 'Chain-0041', src: 'RecordsAgent', dst: 'EligibilityAgent', intent: 'query_eligibility', cosine: 0.912, verdict: 'PASS' },
  { time: '12:30:55', chain: 'Chain-0040', src: 'EligibilityAgent', dst: 'DecisionAgent', intent: 'calculate', cosine: 0.865, verdict: 'PASS' }
]

export function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="glass-card group cursor-pointer hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
                <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{kpi.trend}</p>
              </div>
              <span className="text-2xl opacity-50">{kpi.icon}</span>
            </div>
            {idx < 2 && (
              <div className="mt-3 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sparklineData}>
                    <Bar dataKey="value" fill="#06b6d4" radius={2} isAnimationActive={false}>
                      {sparklineData.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={i === sparklineData.length - 1 ? '#06b6d4' : '#334155'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verification Pipeline */}
        <div className="glass-card">
          <h3 className="text-sm font-semibold text-cyan-400 mb-4">Verification Pipeline</h3>
          
          <div className="space-y-4">
            {/* Pipeline Flow Diagram */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-white/5 border border-white/10 text-foreground font-mono text-[10px]">User Request</div>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="px-3 py-2 rounded bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-mono text-[10px] flex-1">P2: Intent Check</div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="px-3 py-2 rounded bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-mono text-[10px] flex-1">P1: Scope Narrow</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-white/5 border border-white/10 text-foreground font-mono text-[10px] flex-1">P6: API Manifest</div>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-white/5 border border-white/10 text-foreground font-mono text-[10px] flex-1">P7: Output Schema</div>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-white/5 border border-white/10 text-foreground font-mono text-[10px] flex-1">P4: Hash Chain</div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 grid grid-cols-3 gap-2 text-[10px] font-mono text-muted-foreground">
              <div>P6: 0.42ms</div>
              <div>P7: 0.38ms</div>
              <div>Delegation: 1.2ms</div>
            </div>
          </div>
        </div>

        {/* Property Matrix */}
        <div className="glass-card">
          <h3 className="text-sm font-semibold text-cyan-400 mb-4">Property Matrix</h3>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {propertyMatrixData.map((prop) => (
              <div key={prop.id} className="grid grid-cols-5 gap-2 text-xs p-2 rounded border border-white/5 hover:border-cyan-400/30 transition-colors">
                <div className="text-cyan-400 font-mono font-bold">{prop.id}</div>
                <div className="text-foreground truncate">{prop.name}</div>
                <div className="text-muted-foreground text-[10px]">{prop.type}</div>
                <div className="text-muted-foreground text-[10px] truncate">{prop.method}</div>
                <div className={`font-semibold ${prop.status.includes('ML') ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  {prop.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="glass-card">
        <h3 className="text-sm font-semibold text-cyan-400 mb-4">Recent Events</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Time</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Chain</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Src Agent</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Dst Agent</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Intent</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Cosine</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map((event, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-2 px-3 text-muted-foreground font-mono">{event.time}</td>
                  <td className="py-2 px-3 text-foreground font-mono">{event.chain}</td>
                  <td className="py-2 px-3 text-foreground">{event.src}</td>
                  <td className="py-2 px-3 text-foreground">{event.dst}</td>
                  <td className="py-2 px-3 text-cyan-400 font-mono">{event.intent}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-1.5 bg-white/5 rounded overflow-hidden">
                        <div
                          className={`h-full ${event.cosine > 0.8 ? 'bg-emerald-400' : 'bg-rose-400'}`}
                          style={{ width: `${event.cosine * 100}%` }}
                        />
                      </div>
                      <span className={event.cosine > 0.8 ? 'text-emerald-400' : 'text-rose-400'}>{event.cosine.toFixed(3)}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-1 rounded text-[10px] font-semibold ${
                      event.verdict === 'PASS'
                        ? 'bg-emerald-400/20 text-emerald-400'
                        : 'bg-rose-400/20 text-rose-400'
                    }`}>
                      {event.verdict}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
