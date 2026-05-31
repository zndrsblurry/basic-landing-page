import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tugbok Governance Model",
  description:
    "The roadmap for Barangay Tugbok's journey to becoming the model barangay of the Philippines through digital governance and community empowerment.",
};

const phases = [
  {
    id: 1,
    name: "Digital Foundation",
    timeline: "2025 – 2026",
    status: "In Progress",
    description:
      "Establish the technical and institutional groundwork necessary for digital governance.",
    initiatives: [
      "Deploy barangay Wi-Fi hotspots in the health center, daycare, and covered court",
      "Digitize all barangay records from 2015 to present (certificates, clearances, resolutions)",
      "Launch the official Barangay Tugbok website and social media presence",
      "Set up a Barangay Management Information System (BMIS) for resident records",
      "Train barangay officials and staff on digital tools and cybersecurity basics",
      "Procure tablets and computers for the barangay hall",
    ],
  },
  {
    id: 2,
    name: "E-Governance Services",
    timeline: "2026 – 2027",
    status: "Planned",
    description:
      "Move core government services online to increase accessibility and reduce red tape.",
    initiatives: [
      "Launch an online system for barangay clearance and certification requests",
      "Deploy a budget dashboard showing real-time allocation and disbursement",
      "Create the project tracker for all barangay infrastructure and social programs",
      "Publish an ordinance repository — all resolutions and ordinances publicly searchable",
      "Set up an e-blotter system for incident reporting (privacy-compliant)",
      "Enable SMS/app-based notifications for barangay announcements and advisories",
    ],
  },
  {
    id: 3,
    name: "Community Engagement",
    timeline: "2027 – 2028",
    status: "Planned",
    description:
      "Deepen resident participation in governance through digital and in-person channels.",
    initiatives: [
      "Launch participatory budgeting — residents vote on priority projects online and in barangay assemblies",
      "Deploy a community feedback system for rating barangay services",
      "Create a volunteer registry and skills database for barangay programs",
      "Establish a youth governance council with its own digital platform",
      "Run quarterly townhall live streams (Facebook/YouTube) with open Q&A",
      "Partner with Ateneo de Davao and UP Mindanao for governance research and evaluation",
    ],
  },
  {
    id: 4,
    name: "Model Recognition",
    timeline: "2028 – 2029",
    status: "Target",
    description:
      "Achieve certification and recognition as a model barangay, and share learnings nationwide.",
    initiatives: [
      "Apply for DILG's Seal of Good Local Governance (SGLG) — barangay level",
      "Submit to Galing Pook Awards for innovative governance",
      "Host inter-barangay learning visits and open-source the BMIS for other barangays",
      "Publish a replication guide: 'The Tugbok Model' for distribution through the League of Barangays",
      "Partner with DICT for digital governance certification endorsement",
      "Present the model at the DILG National Barangay Governance Summit",
    ],
  },
];

const transparencyInitiatives = [
  {
    name: "Budget Dashboard",
    description:
      "Real-time view of the Annual Budget (AIP), releases, and actual expenditures broken down by program.",
    eta: "Q3 2026",
    category: "Finance",
  },
  {
    name: "Project Tracker",
    description:
      "Status tracking for all infrastructure projects and social programs with photos and completion percentages.",
    eta: "Q4 2026",
    category: "Projects",
  },
  {
    name: "Ordinance Repository",
    description:
      "Full text of all barangay ordinances and resolutions from 2015 onward, searchable and downloadable as PDF.",
    eta: "Q1 2027",
    category: "Legislation",
  },
  {
    name: "Procurement Registry",
    description:
      "Public log of all procurements, suppliers, amounts, and PhilGEPS reference numbers for purchases above ₱5,000.",
    eta: "Q2 2027",
    category: "Procurement",
  },
  {
    name: "Personnel & Salaries",
    description:
      "Disclosed roster of barangay officials, staff, and Barangay Tanod with their honoraria as mandated by law.",
    eta: "Q1 2027",
    category: "HR",
  },
  {
    name: "Barangay Justice Log",
    description:
      "Anonymized summary statistics of Lupong Tagapamayapa cases filed, resolved, and pending — showing settlement rates.",
    eta: "Q3 2027",
    category: "Justice",
  },
];

const plannedOrdinances = [
  {
    title: "Transparency and Open Data Ordinance",
    description:
      "Mandates the proactive publication of all barangay financial records, project data, and resolutions on the official website within 30 days of approval. Establishes a Barangay Open Data Committee.",
    targetEnactment: "2025",
    status: "Drafting",
  },
  {
    title: "Digital Governance Ordinance",
    description:
      "Creates the legal framework for digital service delivery, e-clearances, online payments, and the BMIS. Establishes data privacy compliance under RA 10173 (Data Privacy Act).",
    targetEnactment: "2026",
    status: "Pre-consultation",
  },
  {
    title: "Participatory Budgeting Ordinance",
    description:
      "Requires that at least 20% of the barangay's discretionary development fund be allocated through a community vote held annually during the Barangay Assembly, with results published online.",
    targetEnactment: "2026",
    status: "Pre-consultation",
  },
  {
    title: "Youth Governance and Representation Ordinance",
    description:
      "Formalizes the role of the Sangguniang Kabataan in barangay planning and establishes a Youth Governance Council with a seat in barangay development committee meetings.",
    targetEnactment: "2026",
    status: "Pre-consultation",
  },
  {
    title: "Environmental Accountability Ordinance",
    description:
      "Establishes quarterly public reporting on solid waste management compliance, segregation rates, and creek cleanliness. Ties barangay project funding to environmental performance metrics.",
    targetEnactment: "2027",
    status: "Concept stage",
  },
  {
    title: "Barangay Tanod Professionalization Ordinance",
    description:
      "Sets minimum training standards for Barangay Tanod, establishes a regular skills assessment program, and requires body-worn camera use during patrols with a clear footage retention policy.",
    targetEnactment: "2027",
    status: "Concept stage",
  },
];

const statusColors: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
  Planned: "bg-slate-100 text-slate-700 border-slate-200",
  Target: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Drafting: "bg-amber-100 text-amber-800 border-amber-200",
  "Pre-consultation": "bg-purple-100 text-purple-700 border-purple-200",
  "Concept stage": "bg-slate-100 text-slate-600 border-slate-200",
};

export default function TugbokPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-12">
        <Badge variant="outline" className="mb-3">
          Governance Model
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Tugbok Governance Model
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          A strategic roadmap for Barangay Tugbok, Tugbok District, Davao City
          to become the model barangay of the Philippines — through transparent
          governance, digital public services, and deep community participation.
        </p>
      </section>

      <section className="mb-12 rounded-xl border border-border bg-muted/30 px-8 py-8">
        <h2 className="mb-3 text-xl font-semibold">Vision Statement</h2>
        <blockquote className="border-l-4 border-primary pl-6 text-lg italic">
          &ldquo;By 2029, Barangay Tugbok will be recognized as the
          Philippines&rsquo; leading model of barangay-level governance — where
          every peso of public funds is accounted for, every resident has a
          voice in decisions that affect them, and every government service is
          accessible, fast, and dignified.&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">
          — Barangay Tugbok Development Council, 2025
        </p>
      </section>

      <Separator className="mb-12" />

      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-bold">Four-Phase Roadmap</h2>
        <p className="mb-8 text-muted-foreground">
          The journey is structured into four phases, each building on the
          last.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {phases.map((phase) => (
            <Card key={phase.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {phase.id}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[phase.status] ?? ""}`}
                  >
                    {phase.status}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {phase.timeline}
                  </span>
                </div>
                <CardTitle className="mt-2 text-lg">{phase.name}</CardTitle>
                <CardDescription>{phase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.initiatives.map((initiative, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {initiative}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-bold">Transparency Initiatives</h2>
        <p className="mb-8 text-muted-foreground">
          Specific open-data platforms and disclosure programs planned for the
          Transparency Portal.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transparencyInitiatives.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.eta}
                  </span>
                </div>
                <CardTitle className="mt-2 text-base">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold">Planned Ordinances</h2>
        <p className="mb-8 text-muted-foreground">
          Legislative measures that will institutionalize the Tugbok Governance
          Model in law.
        </p>

        <div className="space-y-4">
          {plannedOrdinances.map((ord) => (
            <Card key={ord.title}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[ord.status] ?? ""}`}
                  >
                    {ord.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Target: {ord.targetEnactment}
                  </span>
                </div>
                <CardTitle className="mt-2 text-base">{ord.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {ord.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
