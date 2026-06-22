'use client'

import { AlertCircle, CheckCircle2, TrendingUp, Brain, Zap } from 'lucide-react'

export function AdminLivePipeline() {
  return (
    <div className="space-y-6">
      <div className="glass-card border border-blue-200 bg-blue-50/50">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Processing Request</h3>
        <p className="text-sm text-slate-700 mb-4">
          &quot;Apply for disability benefits — workplace injury&quot;
        </p>
        <p className="text-xs text-slate-500 font-mono">user:citizen-2026-05-17</p>
      </div>

      <div className="grid gap-4">
        {/* Delegation 1 - PASS */}
        <div className="glass-card border border-emerald-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-semibold text-slate-900">DELEGATION 1</h4>
              <p className="text-sm text-slate-500">IntakeAgent → RecordsAgent</p>
            </div>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-700">PASSED</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 1 — Identity: did:fed:records-001 registered</span>
              <span className="text-slate-400 text-xs ml-auto">{'<'} 0.1ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 2 — Authority (P1): read_records ⊆ parent scope</span>
              <span className="text-slate-400 text-xs ml-auto">{'<'} 0.1ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 3 — Intent (P2): Cosine 0.847</span>
              <span className="text-slate-400 text-xs ml-auto">12.3ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 4 — Policy (P3): Inherited policies validated</span>
              <span className="text-slate-400 text-xs ml-auto">0.2ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 5 — Expiry: 3547s remaining</span>
              <span className="text-slate-400 text-xs ml-auto">0.1ms</span>
            </div>

            <div className="border-t border-slate-200 pt-3">
              <p className="text-xs text-slate-500">Token Issued: <span className="font-mono text-blue-600">tok-a1b2c3d4e5f6</span></p>
              <p className="text-xs text-slate-500">Signature: <span className="font-mono text-blue-600">7f3a...b291</span></p>
            </div>
          </div>
        </div>

        {/* Delegation 2 - BLOCKED */}
        <div className="glass-card border border-red-200 bg-red-50/30">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-semibold text-slate-900">DELEGATION X</h4>
              <p className="text-sm text-slate-500">RecordsAgent → [EXTERNAL]</p>
            </div>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-red-100 text-red-700">BLOCKED</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 1 — Identity: PASS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-700">CHECK 2 — Authority: PASS</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-red-600 font-medium">CHECK 3 — Intent (P2): FAILED</span>
            </div>
            <div className="text-xs text-slate-500 space-y-1 ml-6">
              <p>Cosine Similarity: <span className="text-red-500">0.312</span> (RED ZONE)</p>
              <p>Verdict: <span className="text-red-500">Intent drift detected</span></p>
            </div>

            <div className="border-t border-slate-200 pt-3">
              <p className="text-xs text-red-600 font-semibold">BLOCKED: P2_VIOLATION</p>
              <p className="text-xs text-slate-500 mt-1">Intent verification failed. Request would also be blocked by:</p>
              <p className="text-xs text-slate-500 ml-2">• P6: POST /api/external/send — BLOCKED (not in manifest)</p>
              <p className="text-xs text-slate-500 ml-2">• P7: Output {'{pii_to_external}'} — BLOCKED (not in permitted set)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminAgentRegistry() {
  const agents = [
    { name: 'IntakeAgent', org: 'HHS', level: 'MODERATE', capabilities: ['read_records', 'query_eligibility', 'format_report'] },
    { name: 'RecordsAgent', org: 'HHS', level: 'HIGH', capabilities: ['read_records', 'query_eligibility'] },
    { name: 'EligibilityAgent', org: 'SSA', level: 'MODERATE', capabilities: ['query_eligibility', 'calculate', 'format_report'] },
    { name: 'DecisionAgent', org: 'HHS', level: 'MODERATE', capabilities: ['format_report', 'generate_document'] },
    { name: 'NotifyAgent', org: 'HHS', level: 'LOW', capabilities: ['generate_document', 'send_notification'] },
    { name: 'ContractorAgent', org: 'CONTRACTOR', level: 'MODERATE', capabilities: ['read_records', 'format_report'] },
    { name: 'RogueAgent', org: 'UNKNOWN', level: 'LOW', capabilities: ['admin_override'], status: 'UNREGISTERED' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((agent, idx) => (
        <div key={idx} className={`glass-card ${agent.status === 'UNREGISTERED' ? 'border-red-200 bg-red-50/30' : 'border-blue-100'}`}>
          <div className="mb-3">
            <h4 className="font-semibold text-slate-900">{agent.name}</h4>
            <p className="text-xs text-slate-400 font-mono">did:fed:{agent.name.toLowerCase()}</p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className={`px-2 py-1 rounded text-[10px] font-semibold ${
                agent.org === 'HHS' ? 'bg-blue-100 text-blue-700' :
                agent.org === 'SSA' ? 'bg-purple-100 text-purple-700' :
                agent.org === 'CONTRACTOR' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>
                {agent.org}
              </span>
              <span className="px-2 py-1 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                {agent.level}
              </span>
            </div>
            {agent.status && (
              <span className="px-2 py-1 rounded text-[10px] font-semibold bg-red-100 text-red-700 w-fit inline-block">
                {agent.status}
              </span>
            )}
          </div>

          <div className="mt-3 border-t border-slate-100 pt-3">
            <p className="text-[10px] text-slate-500 font-semibold mb-2">Capabilities:</p>
            <div className="flex flex-wrap gap-1">
              {agent.capabilities.map((cap, i) => (
                <span key={i} className="px-2 py-1 rounded bg-slate-100 text-[10px] text-slate-600">
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function AdminP2Model() {
  return (
    <div className="space-y-6">
      <div className="glass-card border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">Contrastive P2 Intent Verification</h3>
        
        <div className="space-y-6">
          {/* Architecture */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-800">Architecture</h4>
            <div className="text-xs space-y-2 text-slate-500">
              <p>Backbone: <span className="text-blue-600 font-mono">all-MiniLM-L6-v2 (sentence-transformers)</span></p>
              <p>Fine-tuning: <span className="text-blue-600 font-mono">TripletLoss with hard negatives</span></p>
              <p>Training Data: <span className="text-blue-600 font-mono">200 NLI triples → 1000 contrastive triples</span></p>
            </div>
          </div>

          {/* Thresholds */}
          <div className="space-y-3 border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-800">Classification Thresholds</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-full h-3 rounded bg-slate-100 overflow-hidden">
                  <div className="h-full w-1/4 bg-red-400" style={{ width: '25%' }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <p className="text-red-600 font-semibold">FLAGGED</p>
                  <p className="text-slate-500">&lt; 0.60</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-600 font-semibold">AMBIGUOUS</p>
                  <p className="text-slate-500">0.60 - 0.89</p>
                </div>
                <div className="text-center">
                  <p className="text-emerald-600 font-semibold">ALIGNED</p>
                  <p className="text-slate-500">≥ 0.90</p>
                </div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-3 border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-800">Example Classifications</h4>
            <div className="space-y-2 text-xs">
              {[
                { goal: 'Process disability benefits', task: 'Retrieve medical records', score: 0.92, verdict: 'ALIGNED' },
                { goal: 'File federal tax return', task: 'Collect W-2 income documents', score: 0.91, verdict: 'ALIGNED' },
                { goal: 'Process disability benefits', task: 'Export to external analytics', score: 0.31, verdict: 'FLAGGED' },
                { goal: 'File federal tax return', task: 'Forward to marketing firm', score: 0.28, verdict: 'FLAGGED' }
              ].map((ex, i) => (
                <div key={i} className="space-y-1 p-2 rounded bg-slate-50 border border-slate-200">
                  <p className="text-slate-500">{ex.goal} → {ex.task}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-200 rounded overflow-hidden">
                      <div
                        className={`h-full ${ex.score > 0.8 ? 'bg-emerald-500' : 'bg-red-400'}`}
                        style={{ width: `${ex.score * 100}%` }}
                      />
                    </div>
                    <span className={ex.score > 0.8 ? 'text-emerald-600' : 'text-red-500'}>{ex.score.toFixed(2)}</span>
                    <span className={ex.verdict === 'ALIGNED' ? 'text-emerald-600 font-semibold' : 'text-red-600 font-semibold'}>{ex.verdict}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CV Results */}
          <div className="space-y-3 border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-800">5-Fold Cross-Validation Results</h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-slate-500 mb-1">TPR</p>
                  <p className="text-emerald-600 font-semibold">97.2% ± 1.1%</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">FPR</p>
                  <p className="text-emerald-600 font-semibold">0.0% ± 0.0%</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">F1</p>
                  <p className="text-emerald-600 font-semibold">97.2% ± 1.1%</p>
                </div>
              </div>
              <p className="text-slate-500 mt-2">Statistical Significance: <span className="text-emerald-600 font-semibold">p &lt; 0.05 ✓</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminPlaceholder({ title }: { title: string }) {
  return (
    <div className="glass-card border border-blue-100 h-96 flex items-center justify-center">
      <div className="text-center">
        <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-slate-500">Coming soon...</p>
      </div>
    </div>
  )
}
