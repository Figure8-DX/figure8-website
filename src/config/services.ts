export type ServiceId =
  | "digital-transformation"
  | "tqm"
  | "ea"
  | "cx"
  | "bpm"
  | "data-management"
  | "ai-governance"
  | "digital-innovation";

export type ServiceConfig = {
  id: ServiceId;
  title: string;
  description: string;
  features: string[];
};

export const SERVICES: ServiceConfig[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation Advisory",
    description:
      "Strategic guidance for comprehensive digital transformation initiatives",
    features: [
      "Digital Strategy & Roadmap Development",
      "Digital Maturity Assessment",
      "Technology Enablement Planning",
      "Change Management & Adoption",
      "Digital Governance Framework",
      "Innovation Program Design",
    ],
  },
  {
    id: "ea",
    title: "Enterprise Architecture (EA)",
    description:
      "Comprehensive EA frameworks and governance for digital transformation",
    features: [
      "EA Office Establishment & Charter",
      "Architecture Domain Modeling",
      "Tool Enablement (Alfabet, Orbus, LeanIX)",
      "Regulatory & Standard Alignment",
      "Architecture Planning & Roadmapping",
      "EA Operations & Continuous Governance",
    ],
  },
  {
    id: "ai-governance",
    title: "AI Transformation",
    description:
      "End-to-end AI strategy, enablement, and compliance",
    features: [
      "AI Readiness & Transformation Assessment",
      "AI Transformation Strategy",
      "AI CoE Establishment",
      "AI Use Cases Discovery & Enablement",
      "AI Compliance and Audit",
    ],
  },
  {
    id: "digital-innovation",
    title: "Digital Product Innovation",
    description:
      "Digital product strategy, innovation labs, and product management",
    features: [
      "Digital Product Strategy & Execution",
      "Digital Product Innovation Lab Establishment",
      "Digital Product Management",
      "Digital Product Audit & Maturity Assessment",
    ],
  },
  {
    id: "tqm",
    title: "Organizational Excellence",
    description:
      "Excellence frameworks, continuous improvement, and capability building",
    features: [
      "Organizational Excellence Frameworks (EFQM, KAQA)",
      "Lean Six Sigma & Continuous Improvement Programs",
      "Operating Model & Performance Management Design",
      "Quality Management Systems & ISO Implementation",
      "Organizational Change & Capability Building",
    ],
  },
  {
    id: "cx",
    title: "Customer Experience (CX)",
    description:
      "Human-centered design and omnichannel experience optimization",
    features: [
      "CX Strategy & Vision Development",
      "Customer Journey Mapping",
      "Experience Audits & Assessment",
      "CX Measurement & Feedback Loops",
      "Omnichannel Experience Design",
      "UX & Service Design Prototyping",
    ],
  },
  {
    id: "bpm",
    title: "Business Process Management (BPM)",
    description:
      "Process optimization and automation for operational excellence",
    features: [
      "BPM Office Establishment",
      "Business Process Mapping & Analysis",
      "Process Reengineering & Optimization",
      "BPM Tool Implementation (Orbus, ARIS)",
      "Process Mining & Bottleneck Analysis",
      "BPM Training & Best Practices",
    ],
  },
  {
    id: "data-management",
    title: "Data Management",
    description: "Comprehensive data governance and analytics frameworks",
    features: [
      "Data Governance & Quality Management",
      "Data Strategy & Roadmap",
      "Master Data Management",
      "Data Architecture Design",
      "Analytics & BI Implementation",
      "Data Privacy & Security",
    ],
  },
];
