import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join Barangay Tugbok's community participation programs — assemblies, feedback, and volunteer opportunities.",
};

const programs = [
  {
    title: "Barangay Assembly",
    description:
      "Quarterly assemblies open to all residents. The next assembly will be live-streamed on the official Facebook page.",
    badge: "Quarterly",
  },
  {
    title: "Participatory Budgeting",
    description:
      "Vote on priority barangay projects during the annual budgeting process. Launching as part of Phase 3 in 2027.",
    badge: "2027",
  },
  {
    title: "Feedback & Concerns",
    description:
      "Submit concerns, report issues, or commend barangay services through the upcoming digital feedback system.",
    badge: "Coming Soon",
  },
  {
    title: "Volunteer Registry",
    description:
      "Register your skills and availability to assist in barangay programs — health drives, clean-up campaigns, and more.",
    badge: "Coming Soon",
  },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Badge variant="outline" className="mb-3">
        Community
      </Badge>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        Community Participation
      </h1>
      <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
        Good governance is built with the people, not just for them. Join
        Barangay Tugbok&rsquo;s programs for resident participation, feedback,
        and community service.
      </p>

      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        {programs.map((program) => (
          <Card key={program.title}>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {program.badge}
              </Badge>
              <CardTitle className="mt-2 text-base">{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-muted/30 p-8 text-center">
        <h2 className="mb-2 text-lg font-semibold">Stay Connected</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Follow Barangay Tugbok on social media for announcements, assembly
          schedules, and community news.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Facebook Page
          </a>
          <a
            href="mailto:barangay.tugbok@example.gov.ph"
            className={buttonVariants({ variant: "outline" })}
          >
            Email the Barangay
          </a>
        </div>
      </div>
    </div>
  );
}
