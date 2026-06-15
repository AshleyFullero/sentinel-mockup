'use client'

import { AlertCircle, CheckCircle2, TrendingUp, Brain, Zap } from 'lucide-react'

export function AdminLivePipeline() {
  return (
    <div className="space-y-6">
      <div className="glass-card border border-cyan-400/30 bg-cyan-400/5">
        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Processing Request</h3>
        <p className="text-sm text-foreground mb-4">
          &quot;Apply for disability benefits — workplace injury&quot;
        </p>
        <p className="text-xs text-muted-foreground font-mono">user:citizen-2026-05-17</p>
      </div>

      <div className="grid gap-4">
        {/* Delegation 1 - PASS */}
        <div className="glass-card border border-emerald-400/30">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-semibold text-foreground">DELEGATION 1</h4>
              <p className="text-sm text-muted-foreground">IntakeAgent → RecordsAgent</p>
            </div>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-emerald-400/20 text-emerald-400">PASSED</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 1 — Identity: did:fed:records-001 registered</span>
              <span className="text-muted-foreground text-xs ml-auto">{'<'} 0.1ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 2 — Authority (P1): read_records ⊆ parent scope</span>
              <span className="text-muted-foreground text-xs ml-auto">{'<'} 0.1ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 3 — Intent (P2): Cosine 0.847</span>
              <span className="text-muted-foreground text-xs ml-auto">12.3ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 4 — Policy (P3): Inherited policies validated</span>
              <span className="text-muted-foreground text-xs ml-auto">0.2ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 5 — Expiry: 3547s remaining</span>
              <span className="text-muted-foreground text-xs ml-auto">0.1ms</span>
            </div>

            <div className="border-t border-white/10 pt-3">
              <p className="text-xs text-muted-foreground">Token Issued: <span className="font-mono text-cyan-400">tok-a1b2c3d4e5f6</span></p>
              <p className="text-xs text-muted-foreground">Signature: <span className="font-mono text-cyan-400">7f3a...b291</span></p>
            </div>
          </div>
        </div>

        {/* Delegation 2 - BLOCKED */}
        <div className="glass-card border border-rose-400/30 bg-rose-400/5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-semibold text-foreground">DELEGATION X</h4>
              <p className="text-sm text-muted-foreground">RecordsAgent → [EXTERNAL]</p>
            </div>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-rose-400/20 text-rose-400">BLOCKED</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 1 — Identity: PASS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-foreground">CHECK 2 — Authority: PASS</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span className="text-rose-400 font-medium">CHECK 3 — Intent (P2): FAILED</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1 ml-6">
              <p>Cosine Similarity: <span className="text-rose-400">0.312</span> (RED ZONE)</p>
              <p>Verdict: <span className="text-rose-400">Intent drift detected</span></p>
            </div>

            <div className="border-t border-white/10 pt-3">
              <p className="text-xs text-rose-400 font-semibold">BLOCKED: P2_VIOLATION</p>
              <p className="text-xs text-muted-foreground mt-1">Intent verification failed. Request would also be blocked by:</p>
              <p className="text-xs text-muted-foreground ml-2">• P6: POST /api/external/send — BLOCKED (not in manifest)</p>
              <p className="text-xs text-muted-foreground ml-2">• P7: Output {'{pii_to_external}'} — BLOCKED (not in permitted set)</p>
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
        <div key={idx} className={`glass-card ${agent.status === 'UNREGISTERED' ? 'border-rose-400/30 bg-rose-400/5' : 'border-cyan-400/30'}`}>
          <div className="mb-3">
            <h4 className="font-semibold text-foreground">{agent.name}</h4>
            <p className="text-xs text-muted-foreground font-mono">did:fed:{agent.name.toLowerCase()}</p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className={`px-2 py-1 rounded text-[10px] font-semibold ${
                agent.org === 'HHS' ? 'bg-blue-400/20 text-blue-400' :
                agent.org === 'SSA' ? 'bg-purple-400/20 text-purple-400' :
                agent.org === 'CONTRACTOR' ? 'bg-amber-400/20 text-amber-400' :
                'bg-rose-400/20 text-rose-400'
              }`}>
                {agent.org}
              </span>
              <span className="px-2 py-1 rounded text-[10px] font-semibold bg-cyan-400/20 text-cyan-400">
                {agent.level}
              </span>
            </div>
            {agent.status && (
              <span className="px-2 py-1 rounded text-[10px] font-semibold bg-rose-400/20 text-rose-400 w-fit">
                {agent.status}
              </span>
            )}
          </div>

          <div className="mt-3 border-t border-white/10 pt-3">
            <p className="text-[10px] text-muted-foreground font-semibold mb-2">Capabilities:</p>
            <div className="flex flex-wrap gap-1">
              {agent.capabilities.map((cap, i) => (
                <span key={i} className="px-2 py-1 rounded bg-white/5 text-[10px] text-muted-foreground">
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
      <div className="glass-card border border-cyan-400/30">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contrastive P2 Intent Verification</h3>
        
        <div className="space-y-6">
          {/* Architecture */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Architecture</h4>
            <div className="text-xs space-y-2 text-muted-foreground">
              <p>Backbone: <span className="text-cyan-400 font-mono">all-MiniLM-L6-v2 (sentence-transformers)</span></p>
              <p>Fine-tuning: <span className="text-cyan-400 font-mono">TripletLoss with hard negatives</span></p>
              <p>Training Data: <span className="text-cyan-400 font-mono">200 NLI triples → 1000 contrastive triples</span></p>
            </div>
          </div>

          {/* Thresholds */}
          <div className="space-y-3 border-t border-white/10 pt-4">
            <h4 className="text-sm font-semibold text-foreground">Classification Thresholds</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-full h-3 rounded bg-white/5 overflow-hidden">
                  <div className="h-full w-1/4 bg-rose-400" style={{ width: '25%' }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <p className="text-rose-400 font-semibold">FLAGGED</p>
                  <p className="text-muted-foreground">&lt; 0.60</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-400 font-semibold">AMBIGUOUS</p>
                  <p className="text-muted-foreground">0.60 - 0.89</p>
                </div>
                <div className="text-center">
                  <p className="text-emerald-400 font-semibold">ALIGNED</p>
                  <p className="text-muted-foreground">≥ 0.90</p>
                </div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-3 border-t border-white/10 pt-4">
            <h4 className="text-sm font-semibold text-foreground">Example Classifications</h4>
            <div className="space-y-2 text-xs">
              {[
                { goal: 'Process disability benefits', task: 'Retrieve medical records', score: 0.92, verdict: 'ALIGNED' },
                { goal: 'File federal tax return', task: 'Collect W-2 income documents', score: 0.91, verdict: 'ALIGNED' },
                { goal: 'Process disability benefits', task: 'Export to external analytics', score: 0.31, verdict: 'FLAGGED' },
                { goal: 'File federal tax return', task: 'Forward to marketing firm', score: 0.28, verdict: 'FLAGGED' }
              ].map((ex, i) => (
                <div key={i} className="space-y-1 p-2 rounded bg-white/5 border border-white/10">
                  <p className="text-muted-foreground">{ex.goal} → {ex.task}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/5 rounded overflow-hidden">
                      <div
                        className={`h-full ${ex.score > 0.8 ? 'bg-emerald-400' : 'bg-rose-400'}`}
                        style={{ width: `${ex.score * 100}%` }}
                      />
                    </div>
                    <span className={ex.score > 0.8 ? 'text-emerald-400' : 'text-rose-400'}>{ex.score.toFixed(2)}</span>
                    <span className={ex.verdict === 'ALIGNED' ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>{ex.verdict}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CV Results */}
          <div className="space-y-3 border-t border-white/10 pt-4">
            <h4 className="text-sm font-semibold text-foreground">5-Fold Cross-Validation Results</h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-muted-foreground mb-1">TPR</p>
                  <p className="text-emerald-400 font-semibold">97.2% ± 1.1%</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">FPR</p>
                  <p className="text-emerald-400 font-semibold">0.0% ± 0.0%</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">F1</p>
                  <p className="text-emerald-400 font-semibold">97.2% ± 1.1%</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-2">Statistical Significance: <span className="text-emerald-400 font-semibold">p &lt; 0.05 ✓</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminPlaceholder({ title }: { title: string }) {
  return (
    <div className="glass-card border border-cyan-400/30 h-96 flex items-center justify-center">
      <div className="text-center">
        <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">Coming soon...</p>
      </div>
    </div>
  )
}
