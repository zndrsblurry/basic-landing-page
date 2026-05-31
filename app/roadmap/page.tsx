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
  title: "Roadmap & Plans — Barangay Tugbok",
  description:
    "Short-, mid-, and long-term plans for Barangay Tugbok's infrastructure, community programs, and governance milestones.",
};

const shortTermGoals = [
  {
    title: "Barangay Hall Renovation",
    category: "Infrastructure",
    description:
      "Expand the barangay hall to include a dedicated digital services window, a waiting area with Wi-Fi, and a children's corner for families transacting business.",
    target: "Q4 2025",
  },
  {
    title: "Health Center Upgrade",
    category: "Health",
    description:
      "Procure a new dental chair, ultrasound machine, and medicines stockpile. Extend health center hours to include Saturday mornings.",
    target: "Q2 2026",
  },
  {
    title: "Street Lighting Program",
    category: "Safety",
    description:
      "Install 120 solar-powered LED streetlights along major puroks to reduce nighttime crime and improve pedestrian safety.",
    target: "Q3 2025",
  },
  {
    title: "Drainage Rehabilitation",
    category: "Infrastructure",
    description:
      "Repair and deepen the main drainage canal along Purok 5 and Purok 7 to prevent flooding during the rainy season.",
    target: "Q1 2026",
  },
  {
    title: "Free Legal Aid Clinic",
    category: "Social Services",
    description:
      "Launch a monthly free legal aid session in partnership with the Integrated Bar of the Philippines — Davao Chapter to assist residents with civil matters.",
    target: "Q3 2025",
  },
  {
    title: "Livelihood Skills Training",
    category: "Livelihood",
    description:
      "Partner with TESDA to offer quarterly skills training (food processing, electrical installation, beauty care) for unemployed residents aged 18–45.",
    target: "Q4 2025",
  },
];

const midTermGoals = [
  {
    title: "Multi-Purpose Hall Construction",
    category: "Infrastructure",
    description:
      "Build a 500-capacity covered multi-purpose hall to host community assemblies, sports events, and emergency shelter operations during typhoons.",
    target: "2027",
  },
  {
    title: "Barangay Health Insurance Drive",
    category: "Health",
    description:
      "Achieve 95% PhilHealth coverage among permanent residents through an assisted enrollment drive in partnership with the City Health Office.",
    target: "2027",
  },
  {
    title: "Road Concreting — Purok 3 & 6",
    category: "Infrastructure",
    description:
      "Concrete the remaining 1.2 km of unpaved roads in Purok 3 and Purok 6 to reduce flood damage and improve access for tricycles and emergency vehicles.",
    target: "2028",
  },
  {
    title: "Senior Citizens Day Care Center",
    category: "Social Services",
    description:
      "Establish a dedicated senior citizens day care facility offering daily meals, physical therapy sessions, and social activities for residents 60 and above.",
    target: "2027",
  },
];

const longTermVision = [
  {
    title: "Zero Informal Settlements",
    category: "Housing",
    description:
      "Coordinate with the City Government and NHA to provide legal land tenure and decent housing to all informal settler families within Barangay Tugbok by 2030.",
    target: "2030",
  },
  {
    title: "100% Waste Segregation Compliance",
    category: "Environment",
    description:
      "Achieve full household compliance with RA 9003 (Ecological Solid Waste Management Act) through a combination of enforcement, education, and community-run MRF operations.",
    target: "2030",
  },
  {
    title: "Barangay Learning Hub",
    category: "Education",
    description:
      "Establish a community learning center with free internet access, tablets, and a library — providing continuing education and digital literacy resources for all ages.",
    target: "2029",
  },
  {
    title: "Model Barangay Recognition",
    category: "Governance",
    description:
      "Earn DILG's Seal of Good Local Governance and a Galing Pook Award, cementing Barangay Tugbok's status as a nationally recognized model of participatory governance.",
    target: "2029",
  },
];

const infrastructureProjects = [
  {
    name: "Purok 2 Footbridge",
    status: "Funded",
    budget: "₱1.2M",
    description:
      "Construction of a reinforced concrete footbridge to connect Purok 2 to the main road, cutting transit time for 400+ households that currently wade through a creek during rains.",
    startDate: "August 2025",
  },
  {
    name: "Community Playground & Park",
    status: "Design Stage",
    budget: "₱850K",
    description:
      "Development of a child-friendly park with playground equipment, benches, and native tree planting at the vacant lot adjacent to the covered court.",
    startDate: "Q1 2026",
  },
  {
    name: "Barangay CCTV Network",
    status: "Procurement",
    budget: "₱600K",
    description:
      "Installation of 24 CCTV cameras at strategic intersections and public spaces, monitored at the barangay hall with a 30-day footage retention policy.",
    startDate: "October 2025",
  },
  {
    name: "Water System Extension",
    status: "Under Study",
    budget: "TBD",
    description:
      "Extension of the DCWD pipeline network to the 3 puroks that currently rely on deep wells, in coordination with the Davao City Water District.",
    startDate: "2026",
  },
];

const communityPrograms = [
  {
    title: "Hatid-Aral Scholarship",
    category: "Education",
    description:
      "Annual stipends of ₱5,000 per semester for 20 college scholars from indigent families, funded through the barangay's 20% development fund.",
  },
  {
    title: "Bahay Kubo Garden Program",
    category: "Food Security",
    description:
      "Distribute seed kits and compost bags to 500 households to establish backyard vegetable gardens, reducing food insecurity and household expenses.",
  },
  {
    title: "Kabataan Ko, Kinabukasan Ko",
    category: "Youth",
    description:
      "After-school sports, arts, and leadership program for ages 10–17, held at the covered court on weekday afternoons — keeping youth engaged and off the streets.",
  },
  {
    title: "Tulong Gabay Mental Health",
    category: "Health",
    description:
      "Monthly free counseling sessions offered by licensed social workers for residents experiencing stress, anxiety, or family difficulties.",
  },
  {
    title: "Livelihood Lending Circle",
    category: "Livelihood",
    description:
      "Zero-interest micro-loans of up to ₱10,000 for small businesses run by women and returning OFWs, repaid over 12 months with peer group accountability.",
  },
  {
    title: "Linis Barangay Monthly Drive",
    category: "Environment",
    description:
      "First Saturday of every month community clean-up, with prizes for the cleanest purok and a public waste audit dashboard posted on the barangay bulletin board.",
  },
];

const statusColors: Record<string, string> = {
  Funded: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Design Stage": "bg-blue-100 text-blue-800 border-blue-200",
  Procurement: "bg-amber-100 text-amber-800 border-amber-200",
  "Under Study": "bg-slate-100 text-slate-600 border-slate-200",
};

const categoryColors: Record<string, string> = {
  Infrastructure: "bg-blue-100 text-blue-800 border-blue-200",
  Health: "bg-rose-100 text-rose-800 border-rose-200",
  Safety: "bg-amber-100 text-amber-800 border-amber-200",
  "Social Services": "bg-purple-100 text-purple-700 border-purple-200",
  Livelihood: "bg-green-100 text-green-800 border-green-200",
  Housing: "bg-orange-100 text-orange-800 border-orange-200",
  Environment: "bg-teal-100 text-teal-800 border-teal-200",
  Education: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Governance: "bg-slate-100 text-slate-700 border-slate-200",
  "Food Security": "bg-lime-100 text-lime-800 border-lime-200",
  Youth: "bg-violet-100 text-violet-800 border-violet-200",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-12">
        <Badge variant="outline" className="mb-3">
          Roadmap & Plans
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Barangay Tugbok Roadmap
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Concrete goals, infrastructure projects, and community programs that
          Barangay Tugbok is committing to deliver — organized by timeframe so
          residents can track progress and hold their officials accountable.
        </p>
      </section>

      <section className="mb-12 rounded-xl border border-border bg-muted/30 px-8 py-8">
        <h2 className="mb-3 text-xl font-semibold">Our Commitment</h2>
        <blockquote className="border-l-4 border-primary pl-6 text-lg italic">
          &ldquo;Every project on this roadmap is a promise to the people of
          Tugbok. We publish our plans publicly so that every resident can ask
          us, at any time: have you delivered what you said you would?&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">
          — Barangay Tugbok Development Council, 2025
        </p>
      </section>

      <Separator className="mb-12" />

      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-bold">Short-Term Goals (2025–2026)</h2>
        <p className="mb-8 text-muted-foreground">
          Immediate priorities that will produce visible improvements within the
          next 12 to 18 months.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shortTermGoals.map((goal) => (
            <Card key={goal.title} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[goal.category] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                  >
                    {goal.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {goal.target}
                  </span>
                </div>
                <CardTitle className="mt-2 text-base">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-bold">Mid-Term Goals (2027–2028)</h2>
        <p className="mb-8 text-muted-foreground">
          Larger investments and structural improvements requiring multi-year
          planning and coordination with city agencies.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {midTermGoals.map((goal) => (
            <Card key={goal.title} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[goal.category] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                  >
                    {goal.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Target: {goal.target}
                  </span>
                </div>
                <CardTitle className="mt-2 text-base">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-bold">Long-Term Vision (2029–2030)</h2>
        <p className="mb-8 text-muted-foreground">
          Ambitious targets that define what Barangay Tugbok will look like at
          the end of this generation of leadership.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {longTermVision.map((goal) => (
            <Card key={goal.title} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[goal.category] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                  >
                    {goal.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Target: {goal.target}
                  </span>
                </div>
                <CardTitle className="mt-2 text-base">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section className="mb-16">
        <h2 className="mb-2 text-2xl font-bold">Key Infrastructure Projects</h2>
        <p className="mb-8 text-muted-foreground">
          Specific construction and development projects with funding status and
          timelines.
        </p>

        <div className="space-y-4">
          {infrastructureProjects.map((project) => (
            <Card key={project.name}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[project.status] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}
                  >
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Budget: {project.budget}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    Start: {project.startDate}
                  </span>
                </div>
                <CardTitle className="mt-2 text-base">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold">Community & Social Programs</h2>
        <p className="mb-8 text-muted-foreground">
          Recurring programs that support the daily lives and long-term
          well-being of Tugbok residents.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityPrograms.map((program) => (
            <Card key={program.title} className="flex flex-col">
              <CardHeader className="pb-2">
                <span
                  className={`w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[program.category] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                >
                  {program.category}
                </span>
                <CardTitle className="mt-2 text-base">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
