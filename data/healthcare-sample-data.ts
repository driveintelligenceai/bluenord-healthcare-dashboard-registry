export const healthcareSystems = [
  {
    id: "system-a",
    label: "MetroCare Health",
    color: "#0377d3",
    docs: 100,
    nodes: 72,
    edges: 118,
  },
  {
    id: "system-b",
    label: "Pine Valley Health",
    color: "#b4232a",
    docs: 64,
    nodes: 44,
    edges: 76,
  },
  {
    id: "system-c",
    label: "Riverside Medical",
    color: "#6d3a96",
    docs: 61,
    nodes: 41,
    edges: 73,
  },
]

export const sampleCampaigns = [
  {
    id: "oncology-growth",
    name: "Oncology Growth",
    serviceLine: "Oncology",
    status: "active",
    budgetIndex: 100,
    sources: 46,
    synthetic: true,
  },
  {
    id: "heart-care",
    name: "Heart Care Access",
    serviceLine: "Cardiology",
    status: "planned",
    budgetIndex: 79,
    sources: 39,
    synthetic: true,
  },
  {
    id: "joint-spine",
    name: "Joint and Spine",
    serviceLine: "Orthopedics",
    status: "active",
    budgetIndex: 69,
    sources: 35,
    synthetic: true,
  },
]

export const sampleGraphNodes = [
  { id: "master-hospitals", label: "Hospitals", type: "master", x: 22, y: 44, color: "#0377d3", size: 15 },
  { id: "master-marketing", label: "Marketing", type: "master", x: 51, y: 22, color: "#f59f00", size: 15 },
  { id: "master-agents", label: "Agents", type: "master", x: 75, y: 54, color: "#8b5cf6", size: 15 },
  { id: "system-a", label: "MetroCare", type: "hospital", x: 22, y: 62, color: "#0377d3", size: 10 },
  { id: "system-b", label: "Pine Valley", type: "hospital", x: 34, y: 43, color: "#b4232a", size: 9 },
  { id: "system-c", label: "Riverside", type: "hospital", x: 16, y: 28, color: "#6d3a96", size: 9 },
  { id: "oncology", label: "Oncology", type: "service", x: 48, y: 42, color: "#1f7a4d", size: 11 },
  { id: "campaign", label: "Campaign", type: "campaign", x: 53, y: 66, color: "#f59f00", size: 9 },
  { id: "paperclip", label: "Paperclip", type: "skill", x: 83, y: 34, color: "#14b8a6", size: 8 },
  { id: "n8n", label: "n8n", type: "automation", x: 68, y: 76, color: "#0891b2", size: 8 },
  { id: "source", label: "Receipts", type: "source", x: 88, y: 62, color: "#5b6b7a", size: 7 },
  { id: "rag", label: "LLM + RAG", type: "ai", x: 62, y: 86, color: "#111827", size: 9 },
]

export const sampleGraphEdges = [
  ["master-hospitals", "system-a", "contains"],
  ["master-hospitals", "system-b", "contains"],
  ["master-hospitals", "system-c", "contains"],
  ["master-marketing", "campaign", "contains"],
  ["master-marketing", "oncology", "contains"],
  ["master-agents", "paperclip", "uses_skill"],
  ["master-agents", "n8n", "orchestrates"],
  ["system-a", "oncology", "offers"],
  ["system-b", "oncology", "offers"],
  ["system-c", "oncology", "offers"],
  ["campaign", "system-a", "supports_campaign"],
  ["source", "system-a", "cites"],
  ["rag", "source", "indexed_by_rag"],
] as const
