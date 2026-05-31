import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparency Portal",
  description:
    "Open data and public disclosures for Barangay Tugbok — budgets, projects, ordinances, and procurement.",
};

const comingSoon = [
  {
    title: "Budget Dashboard",
    description:
      "Real-time annual budget allocation and disbursement data, broken down by program and project.",
    eta: "Q3 2026",
  },
  {
    title: "Project Tracker",
    description:
      "Status and photo updates for all infrastructure and social programs with completion percentages.",
    eta: "Q4 2026",
  },
  {
    title: "Ordinance Repository",
    description:
      "Searchable full-text archive of all barangay ordinances and resolutions from 2015 onward.",
    eta: "Q1 2027",
  },
  {
    title: "Procurement Registry",
    description:
      "Public log of all barangay procurement transactions with supplier info and PhilGEPS references.",
    eta: "Q2 2027",
  },
];

export default function TransparencyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Badge variant="outline" className="mb-3">
        Coming Soon
      </Badge>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        Transparency Portal
      </h1>
      <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
        This portal will provide open access to Barangay Tugbok&rsquo;s
        financial records, project updates, legislation, and procurement data.
        Launch is planned for 2026 as part of Phase 2 of the Tugbok Governance
        Model.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {comingSoon.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Planned</Badge>
                <span className="text-xs text-muted-foreground">{item.eta}</span>
              </div>
              <CardTitle className="mt-2 text-base">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Subscribe to updates to be notified when this goes live.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
