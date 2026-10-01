import type { Metadata } from "next";
import CourseCatalog from "@/components/courses/course-catalog";
import SiteFooter from "../component/siteFooter";

export const metadata: Metadata = {
  title: "Explore courses | ByteSpace",
  description: "Explore design, development, business, and more with ByteSpace.",
};

export default async function CoursesPage({ searchParams }: {
  searchParams: Promise<{ q?: string | string[]; category?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const category = typeof params.category === "string" ? params.category : "All";
  return <><CourseCatalog key={`${query}:${category}`} initialQuery={query} initialCategory={category} /><SiteFooter /></>;
}
