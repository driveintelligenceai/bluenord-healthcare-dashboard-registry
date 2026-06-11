"use client"

import { Activity, Database, GitBranch, Target } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { healthcareSystems, sampleCampaigns } from "@/data/healthcare-sample-data"

const indexFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})

export function HealthcareDashboardDemo() {
  const totalDocs = healthcareSystems.reduce((sum, system) => sum + system.docs, 0)
  const totalEdges = healthcareSystems.reduce((sum, system) => sum + system.edges, 0)
  const activeCampaigns = sampleCampaigns.filter((campaign) => campaign.status === "active").length

  return (
    <div className="grid gap-4">
      <div className="grid gap-3 md:grid-cols-4">
        <DemoMetric icon={Database} label="Public docs" value={totalDocs.toLocaleString()} />
        <DemoMetric icon={GitBranch} label="Graph edges" value={totalEdges.toLocaleString()} />
        <DemoMetric icon={Target} label="Campaigns" value={sampleCampaigns.length.toString()} />
        <DemoMetric icon={Activity} label="Active synthetic" value={activeCampaigns.toString()} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="rounded-md">
          <CardHeader>
            <CardTitle>Competitor Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>System</TableHead>
                  <TableHead>Docs</TableHead>
                  <TableHead>Nodes</TableHead>
                  <TableHead>Edges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {healthcareSystems.map((system) => (
                  <TableRow key={system.id}>
                    <TableCell className="font-medium">
                      <span className="mr-2 inline-block size-2 rounded-full" style={{ background: system.color }} />
                      {system.label}
                    </TableCell>
                    <TableCell>{system.docs.toLocaleString()}</TableCell>
                    <TableCell>{system.nodes.toLocaleString()}</TableCell>
                    <TableCell>{system.edges.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="rounded-md">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Synthetic Campaign Index</CardTitle>
              <Badge variant="secondary" className="rounded-md">
                fixture
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sampleCampaigns} layout="vertical" margin={{ left: 12, right: 12 }}>
                  <XAxis type="number" tickFormatter={(value) => indexFormatter.format(Number(value))} />
                  <YAxis type="category" dataKey="serviceLine" width={90} />
                  <Tooltip formatter={(value) => `${indexFormatter.format(Number(value))} index`} />
                  <Bar dataKey="budgetIndex" fill="#0377d3" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DemoMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Database
  label: string
  value: string
}) {
  return (
    <Card className="rounded-md">
      <CardContent className="flex items-center justify-between gap-3 pt-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <Badge variant="secondary" className="rounded-md">
          <Icon className="size-4" aria-hidden="true" />
        </Badge>
      </CardContent>
    </Card>
  )
}

export default HealthcareDashboardDemo
