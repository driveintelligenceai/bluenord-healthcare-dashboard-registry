import { Bot, Network } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sampleGraphEdges, sampleGraphNodes } from "@/data/healthcare-sample-data"

export function KnowledgeGraphDemo() {
  const nodesById = new Map(sampleGraphNodes.map((node) => [node.id, node]))

  return (
    <Card className="overflow-hidden rounded-md">
      <CardHeader className="border-b bg-slate-950 text-white">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="flex items-center gap-2">
            <Network className="size-5" aria-hidden="true" />
            Healthcare Knowledge Graph
          </CardTitle>
          <Badge variant="secondary" className="rounded-md">
            sanitized
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 bg-slate-950 p-4 text-white lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="relative aspect-[16/9] min-h-[340px] rounded-md border border-white/10 bg-[radial-gradient(circle_at_center,#18324f_0,#07111f_58%,#030712_100%)]">
          <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" role="img" aria-label="Sanitized healthcare graph">
            <circle cx="50" cy="52" r="38" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
            <circle cx="50" cy="52" r="25" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.35" />
            {sampleGraphEdges.map(([sourceId, targetId, type]) => {
              const source = nodesById.get(sourceId)
              const target = nodesById.get(targetId)
              if (!source || !target) return null
              return (
                <line
                  key={`${sourceId}-${targetId}-${type}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="rgba(255,255,255,0.34)"
                  strokeWidth={type === "competes_with" ? 0.7 : 0.42}
                  strokeDasharray={type === "standardizes_prompt" ? "2 2" : undefined}
                />
              )
            })}
          </svg>
          {sampleGraphNodes.map((node) => (
            <div
              key={node.id}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-center"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span
                className="flex items-center justify-center rounded-full border border-white/40 shadow-lg"
                style={{ background: node.color, width: node.size, height: node.size }}
              >
                {node.type === "ai" ? <Bot className="size-4" aria-hidden="true" /> : null}
              </span>
              <span className="max-w-24 text-[11px] font-medium leading-tight text-slate-100">{node.label}</span>
            </div>
          ))}
        </div>

        <div className="grid content-start gap-3">
          {["contains", "offers", "uses_skill", "orchestrates", "indexed_by_rag"].map((edge) => (
            <div key={edge} className="rounded-md border border-white/10 bg-white/5 p-3">
              <p className="text-sm font-medium">{edge}</p>
              <p className="mt-1 text-xs text-slate-300">Typed relationship included in the sample graph contract.</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default KnowledgeGraphDemo
