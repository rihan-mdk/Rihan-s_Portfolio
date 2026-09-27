import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { ProjectHero } from "@/components/ProjectHero";
import { RevealElement } from "@/components/RevealElement";
import { Button } from "@/components/Button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} — Mohammad Rihan MR`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-24">
      {/* Back Link */}
      <div className="pt-28 sm:pt-32">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 hover:text-[#F4F4F4] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>ALL PROJECTS</span>
        </Link>
      </div>

      {/* Hero Visual & Headline */}
      <ProjectHero project={project} />

      {/* Editorial Content Sections */}
      <div className="py-20 sm:py-28 space-y-24 sm:space-y-32">
        {/* OVERVIEW & ROLE */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                01 / CONTEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                OVERVIEW
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg sm:text-2xl text-[#F4F4F4]/85 font-light leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </RevealElement>

        {/* ROLE & RESPONSIBILITY */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-16">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                02 / INVOLVEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                ROLE
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-xl text-[#F4F4F4]/80 font-light leading-relaxed">
                {project.role}
              </p>
            </div>
          </div>
        </RevealElement>

        {/* TECHNOLOGY STACK */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-16">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                03 / ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                TECHNOLOGY
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-mono border border-white/[0.12] bg-[#141414] text-[#F4F4F4]/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealElement>

        {/* PROCESS BREAKDOWN */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-16">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                04 / EXECUTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                PROCESS
              </h2>
            </div>
            <div className="md:col-span-8 space-y-10">
              {project.process.map((step, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#F4F4F4]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F4F4F4]/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealElement>

        {/* RESULTS & METRICS */}
        <RevealElement>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-white/[0.08] pt-16">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40">
                05 / VERIFICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-editorial text-[#F4F4F4] mt-2">
                RESULT
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-white/[0.08] bg-[#141414] space-y-2"
                  >
                    <div className="text-2xl sm:text-3xl font-light text-[#F4F4F4]">
                      {res.value}
                    </div>
                    <div className="text-xs font-mono text-[#F4F4F4]/50 uppercase tracking-wider">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealElement>
      </div>

      {/* PROJECT LINKS REPEAT */}
      <div className="py-12 border-t border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
        <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50">
          EXPLORE DEPLOYMENT &amp; SOURCE
        </div>
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button href={project.liveUrl} external arrow="up-right" variant="primary">
              Live Project
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} external arrow="up-right" variant="outline">
              Source Code
            </Button>
          )}
        </div>
      </div>

      {/* PREVIOUS / NEXT PROJECT NAVIGATION */}
      <nav aria-label="Adjacent projects" className="pt-16 sm:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {prev && (
            <Link
              href={`/work/${prev.slug}`}
              className="group block p-8 border border-white/[0.08] bg-[#121212] hover:border-white/[0.2] transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F4F4]/40 uppercase tracking-widest mb-3">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <div className="text-xl sm:text-2xl font-light text-[#F4F4F4]">
                {prev.name}
              </div>
              <div className="text-xs font-mono text-[#F4F4F4]/50 mt-1">
                {prev.category}
              </div>
            </Link>
          )}

          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group block p-8 border border-white/[0.08] bg-[#121212] hover:border-white/[0.2] transition-colors text-left sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 text-xs font-mono text-[#F4F4F4]/40 uppercase tracking-widest mb-3">
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="text-xl sm:text-2xl font-light text-[#F4F4F4]">
                {next.name}
              </div>
              <div className="text-xs font-mono text-[#F4F4F4]/50 mt-1">
                {next.category}
              </div>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
