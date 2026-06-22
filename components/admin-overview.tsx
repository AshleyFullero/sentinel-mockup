'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
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
          <div key={idx} className="glass-card group cursor-pointer hover:border-blue-300 transition-all duration-300 hover:shadow-md glow-hover" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs text-slate-500 mb-1">{kpi.label}</p>
                <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                <p className="text-xs text-slate-500 mt-2">{kpi.trend}</p>
              </div>
              <span className="text-2xl opacity-60">{kpi.icon}</span>
            </div>
            {idx < 2 && (
              <div className="mt-3 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sparklineData}>
                    <Bar dataKey="value" fill="#2563eb" radius={2} isAnimationActive={false}>
                      {sparklineData.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={i === sparklineData.length - 1 ? '#2563eb' : '#bfdbfe'} />
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
          <h3 className="text-sm font-semibold text-blue-700 mb-4">Verification Pipeline</h3>
          
          <div className="space-y-4">
            {/* Pipeline Flow Diagram */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px]">User Request</div>
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="px-3 py-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] flex-1">P2: Intent Check</div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="px-3 py-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] flex-1">P1: Scope Narrow</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] flex-1">P6: API Manifest</div>
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] flex-1">P7: Output Schema</div>
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] flex-1">P4: Hash Chain</div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-500">
              <div>P6: 0.42ms</div>
              <div>P7: 0.38ms</div>
              <div>Delegation: 1.2ms</div>
            </div>
          </div>
        </div>

        {/* Property Matrix */}
        <div className="glass-card">
          <h3 className="text-sm font-semibold text-blue-700 mb-4">Property Matrix</h3>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {propertyMatrixData.map((prop) => (
              <div key={prop.id} className="grid grid-cols-5 gap-2 text-xs p-2 rounded border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
                <div className="text-blue-600 font-mono font-bold">{prop.id}</div>
                <div className="text-slate-800 truncate">{prop.name}</div>
                <div className="text-slate-500 text-[10px]">{prop.type}</div>
                <div className="text-slate-500 text-[10px] truncate">{prop.method}</div>
                <div className={`font-semibold ${prop.status.includes('ML') ? 'text-blue-600' : 'text-emerald-600'}`}>
                  {prop.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="glass-card">
        <h3 className="text-sm font-semibold text-blue-700 mb-4">Recent Events</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Time</th>
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Chain</th>
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Src Agent</th>
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Dst Agent</th>
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Intent</th>
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Cosine</th>
                <th className="text-left py-2 px-3 text-slate-500 font-semibold">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map((event, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-2 px-3 text-slate-500 font-mono">{event.time}</td>
                  <td className="py-2 px-3 text-slate-800 font-mono">{event.chain}</td>
                  <td className="py-2 px-3 text-slate-700">{event.src}</td>
                  <td className="py-2 px-3 text-slate-700">{event.dst}</td>
                  <td className="py-2 px-3 text-blue-600 font-mono">{event.intent}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-1.5 bg-slate-100 rounded overflow-hidden">
                        <div
                          className={`h-full ${event.cosine > 0.8 ? 'bg-emerald-500' : 'bg-red-400'}`}
                          style={{ width: `${event.cosine * 100}%` }}
                        />
                      </div>
                      <span className={event.cosine > 0.8 ? 'text-emerald-600' : 'text-red-500'}>{event.cosine.toFixed(3)}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-1 rounded text-[10px] font-semibold ${
                      event.verdict === 'PASS'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
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
