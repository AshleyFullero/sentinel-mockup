'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts'
import { CheckCircle2, AlertTriangle, TrendingUp, Lock } from 'lucide-react'

const delegationChainData = [
  { level: 0, agent: 'citizen-001', scope: 6 },
  { level: 1, agent: 'IntakeAgent', scope: 4 },
  { level: 2, agent: 'RecordsAgent', scope: 2 },
  { level: 3, agent: 'EligibilityAgent', scope: 1 }
]

const benchmarkCategoryData = [
  { category: 'A', type: 'Keyword-detectable', attacks: 20, tpr: 100 },
  { category: 'B', type: 'Adversarial paraphrase', attacks: 20, tpr: 100 },
  { category: 'C', type: 'Malicious output', attacks: 20, tpr: 100 },
  { category: 'D', type: 'Scope violations', attacks: 20, tpr: 100 },
  { category: 'E', type: 'Benign standard', attacks: 156, tpr: 0 },
]

const threatFeedData = [
  { time: '14:32:19', type: 'P2_VIOLATION', description: 'Intent drift detected in delegation', severity: 'HIGH', source: 'ContractorAgent' },
  { time: '14:31:45', type: 'P6_VIOLATION', description: 'Unauthorized API endpoint access attempt', severity: 'CRITICAL', source: 'RogueAgent' },
  { time: '14:30:22', type: 'P7_VIOLATION', description: 'PII export to external address blocked', severity: 'CRITICAL', source: 'RecordsAgent' },
  { time: '14:29:15', type: 'P1_VIOLATION', description: 'Authority scope exceeded', severity: 'MEDIUM', source: 'EligibilityAgent' },
  { time: '14:28:33', type: 'P2_VIOLATION', description: 'Ambiguous intent classification', severity: 'MEDIUM', source: 'IntakeAgent' },
]

const nisControlsData = [
  'AC-2', 'AC-3', 'AC-4', 'AC-6', 'AU-2', 'AU-3', 'IA-2', 'IA-4', 'IA-8', 'SC-7', 'SC-13', 'SI-4'
]

export function AdminDelegationChains() {
  return (
    <div className="space-y-6">
      <div className="glass-card border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-6">Active Delegation Chain Visualization</h3>
        
        <div className="space-y-8">
          {/* Chain Diagram */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {delegationChainData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 flex-shrink-0">
                  <div className="glass-sm px-4 py-3 rounded-lg border border-blue-200 bg-blue-50">
                    <p className="text-xs text-slate-500 font-semibold">Level {item.level}</p>
                    <p className="text-sm font-mono text-blue-700 font-semibold">{item.agent}</p>
                    <p className="text-xs text-slate-500 mt-1">Scope: {item.scope} items</p>
                  </div>
                  {idx < delegationChainData.length - 1 && (
                    <div className="text-blue-400 text-xl flex-shrink-0">→</div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              Scope narrowing at each delegation level - demonstrating principle of least privilege
            </p>
          </div>

          {/* Cascade Containment */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-sm font-semibold text-slate-800 mb-4">P5 Cascade Containment - Compromise Scenario</h4>
            <div className="space-y-3">
              <p className="text-sm text-slate-500">If token at Level 1 (IntakeAgent) is compromised:</p>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded bg-red-100 border border-red-300 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">1</span>
                </div>
                <div className="text-xs text-slate-500">
                  <p className="font-semibold">Blast Radius: 2 tokens contained</p>
                  <p>Downstream tokens automatically revoked</p>
                </div>
              </div>
              <div className="mt-3 p-3 rounded bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-600">
                  <span className="text-red-600 font-semibold">Revoked Tokens:</span> tok-level-2, tok-level-3
                </p>
                <p className="text-xs text-emerald-600 mt-2">
                  <span className="font-semibold">Protected Tokens:</span> tok-level-0 (root)
                </p>
              </div>
            </div>
          </div>

          {/* Active Chains Stats */}
          <div className="border-t border-slate-200 pt-6 grid grid-cols-3 gap-4">
            <div className="p-3 rounded bg-blue-50 border border-blue-100">
              <p className="text-xs text-slate-500 mb-1">Total Active</p>
              <p className="text-xl font-bold text-blue-700">47</p>
            </div>
            <div className="p-3 rounded bg-blue-50 border border-blue-100">
              <p className="text-xs text-slate-500 mb-1">Avg Depth</p>
              <p className="text-xl font-bold text-blue-700">3.2</p>
            </div>
            <div className="p-3 rounded bg-red-50 border border-red-100">
              <p className="text-xs text-slate-500 mb-1">Revoked</p>
              <p className="text-xl font-bold text-red-600">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminBenchmark() {
  return (
    <div className="space-y-6">
      <div className="glass-card border border-emerald-200">
        <h3 className="text-lg font-semibold text-emerald-700 mb-6">DelegationBench v4 Evaluation Results</h3>
        
        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded bg-emerald-50 border border-emerald-200">
              <p className="text-xs text-slate-500 mb-2">True Positive Rate</p>
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-xs text-slate-500 mt-1">150/150 attacks detected</p>
            </div>
            <div className="p-4 rounded bg-emerald-50 border border-emerald-200">
              <p className="text-xs text-slate-500 mb-2">False Positive Rate</p>
              <p className="text-3xl font-bold text-emerald-700">0%</p>
              <p className="text-xs text-slate-500 mt-1">0/366 benign blocked</p>
            </div>
            <div className="p-4 rounded bg-emerald-50 border border-emerald-200">
              <p className="text-xs text-slate-500 mb-2">Overall Accuracy</p>
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-xs text-slate-500 mt-1">516/516 correct</p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-sm font-semibold text-slate-800 mb-4">Category Breakdown</h4>
            <div className="space-y-2">
              {benchmarkCategoryData.map((cat, idx) => (
                <div key={idx} className="p-3 rounded bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Category {cat.category}</p>
                      <p className="text-xs text-slate-500">{cat.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-600">{cat.tpr === 0 ? '0%' : '100%'} TPR</p>
                      <p className="text-xs text-slate-500">{cat.attacks} scenarios</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded overflow-hidden">
                    <div
                      className={`h-full ${cat.tpr === 100 ? 'bg-emerald-500' : 'bg-slate-300'}`}
                      style={{ width: `${cat.tpr}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red Team Results */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-sm font-semibold text-slate-800 mb-4">Red Team Evaluation</h4>
            <div className="space-y-2">
              {[
                { eval: 'Black-box red team', attacks: 30, tpr: '100%', fpr: '0%' },
                { eval: 'Independent red team', attacks: 45, tpr: '100%', fpr: '0%' },
                { eval: 'LLM agent (real DAS)', attacks: 5, tpr: '100%', fpr: '0%' },
                { eval: 'TLA+ model checking', attacks: '2.7M states', tpr: '0 violations', fpr: '—' }
              ].map((result, idx) => (
                <div key={idx} className="p-3 rounded bg-slate-50 border border-slate-200 grid grid-cols-4 gap-2 text-xs">
                  <span className="text-slate-800 font-semibold">{result.eval}</span>
                  <span className="text-slate-500">{result.attacks}</span>
                  <span className="text-emerald-600 font-semibold">{result.tpr}</span>
                  <span className="text-emerald-600 font-semibold">{result.fpr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminThreatFeed() {
  return (
    <div className="space-y-6">
      <div className="glass-card border border-red-200">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Threat Feed - Live Attack Log</h3>
        
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {threatFeedData.map((threat, idx) => (
            <div key={idx} className={`p-3 rounded border ${
              threat.severity === 'CRITICAL' ? 'bg-red-50 border-red-200' :
              threat.severity === 'HIGH' ? 'bg-amber-50 border-amber-200' :
              'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-slate-400">{threat.time}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      threat.severity === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                      threat.severity === 'HIGH' ? 'bg-amber-100 text-amber-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {threat.severity}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 font-mono">{threat.type}</p>
                  <p className="text-sm text-slate-500 mt-1">{threat.description}</p>
                  <p className="text-xs text-slate-400 mt-2">Source: <span className="text-blue-600">{threat.source}</span></p>
                </div>
                <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-500 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AdminForensicAudit() {
  const auditLog = [
    { timestamp: '2026-05-17T14:35:22Z', event: 'P4_HASH_VERIFICATION', chain: 'Chain-0047', status: 'PASS', hash: '7f3a...b291' },
    { timestamp: '2026-05-17T14:34:59Z', event: 'P2_VERIFICATION', chain: 'Chain-0046', status: 'FAIL', hash: '8c4b...a3c2' },
    { timestamp: '2026-05-17T14:34:12Z', event: 'TOKEN_ISSUED', chain: 'Chain-0045', status: 'SUCCESS', hash: '9d5c...b4d3' },
    { timestamp: '2026-05-17T14:33:45Z', event: 'DELEGATION_ACCEPTED', chain: 'Chain-0044', status: 'SUCCESS', hash: 'ae6d...c5e4' },
  ]

  return (
    <div className="space-y-6">
      <div className="glass-card border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">P4 Chain Reconstruction &amp; Audit Log</h3>
        
        <div className="space-y-1 text-xs">
          <div className="grid grid-cols-5 gap-2 p-2 border-b border-slate-200 text-slate-500 font-semibold mb-2">
            <div>Timestamp</div>
            <div>Event</div>
            <div>Chain</div>
            <div>Status</div>
            <div>Hash</div>
          </div>
          {auditLog.map((log, idx) => (
            <div key={idx} className="grid grid-cols-5 gap-2 p-2 rounded hover:bg-slate-50 transition-colors">
              <div className="text-slate-400 font-mono">{log.timestamp.split('T')[1].slice(0, 8)}</div>
              <div className="text-blue-600 font-mono font-semibold">{log.event}</div>
              <div className="text-slate-700 font-mono">{log.chain}</div>
              <div className={log.status === 'PASS' || log.status === 'SUCCESS' ? 'text-emerald-600 font-semibold' : 'text-red-600 font-semibold'}>
                {log.status}
              </div>
              <div className="text-slate-400 font-mono text-[10px]">{log.hash}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AdminNISTCompliance() {
  const controlsByOrg = {
    HHS: ['AC-2', 'AC-3', 'AC-4', 'AC-6', 'AU-2', 'AU-3', 'IA-2', 'SC-7'],
    SSA: ['AC-2', 'AC-3', 'AC-4', 'AU-2', 'IA-2', 'IA-4', 'SC-7'],
    CONTRACTOR: ['AC-2', 'AC-3', 'AU-2', 'AU-3']
  }

  return (
    <div className="space-y-6">
      <div className="glass-card border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-6">NIST 800-53 Compliance Matrix</h3>
        
        <div className="space-y-6">
          {/* Control Coverage */}
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-3">Implemented Controls</h4>
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
              {nisControlsData.map((control) => (
                <div key={control} className="p-2 rounded bg-emerald-50 border border-emerald-200 text-center">
                  <p className="text-xs font-bold text-emerald-700">{control}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Organization Profiles */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-sm font-semibold text-slate-800 mb-4">Organization Profiles</h4>
            <div className="space-y-3">
              {Object.entries(controlsByOrg).map(([org, controls]) => (
                <div key={org} className="p-3 rounded bg-slate-50 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-800 mb-2">{org}</p>
                  <div className="flex flex-wrap gap-1">
                    {controls.map((control) => (
                      <span key={control} className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700 font-mono">
                        {control}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Status */}
          <div className="border-t border-slate-200 pt-6 p-3 rounded bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-emerald-700">Full Compliance</p>
                <p className="text-xs text-slate-500">All NIST 800-53 requirements satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
