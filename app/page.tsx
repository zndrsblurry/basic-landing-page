import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to the official digital governance portal of Barangay Tugbok, Davao City.",
};

const highlights = [
  {
    title: "Tugbok Governance Model",
    description:
      "Our roadmap to becoming a model barangay for the entire Philippines through phased digital governance.",
    href: "/tugbok",
    badge: "Flagship",
  },
  {
    title: "Transparency Portal",
    description:
      "Access barangay budgets, project trackers, and ordinances — open to every resident.",
    href: "/transparency",
    badge: "Open Data",
  },
  {
    title: "Community",
    description:
      "Participate in barangay assemblies, submit concerns, and engage with your local government.",
    href: "/community",
    badge: "Participate",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="mb-20 text-center">
        <Badge variant="outline" className="mb-4">
          Davao City, Philippines
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Barangay Tugbok
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Building a transparent, participatory, and digitally empowered
          community. Tugbok is on a journey to become the model barangay of the
          Philippines.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/tugbok" className={buttonVariants()}>
            View Governance Roadmap
          </Link>
          <Link
            href="/transparency"
            className={buttonVariants({ variant: "outline" })}
          >
            Transparency Portal
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-semibold">
          What We Are Building
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.href} className="flex flex-col">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {item.badge}
                </Badge>
                <CardTitle className="mt-2">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link
                  href={item.href}
                  className={cn(buttonVariants({ variant: "ghost" }), "w-full")}
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
