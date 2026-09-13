/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import CreativeSection from "@/components/section/creative-section";
import IntellectualSection from "@/components/section/intellectual-section";
import LiteratureSection from "@/components/section/literature-section";
import SecuritySection from "@/components/section/security-section";
import { ArrowUpRight, Code2, ShieldAlert, Palette, Brain, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative pb-16">
      {/* 1. HERO SECTION */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 3. FOUR DIMENSIONS QUICK JUMP PILLS */}
      <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl border bg-muted/30 backdrop-blur-sm">
          <a
            href="#engineering"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background hover:bg-muted border border-border/60 transition-colors"
          >
            <Code2 className="size-3.5 text-blue-500" />
            <span>Engineering</span>
          </a>
          <a
            href="#security"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background hover:bg-muted border border-border/60 transition-colors"
          >
            <ShieldAlert className="size-3.5 text-red-500" />
            <span>Security</span>
          </a>
          <a
            href="#creative"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background hover:bg-muted border border-border/60 transition-colors"
          >
            <Palette className="size-3.5 text-purple-500" />
            <span>Creative</span>
          </a>
          <a
            href="#intellectual"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background hover:bg-muted border border-border/60 transition-colors"
          >
            <Brain className="size-3.5 text-emerald-500" />
            <span>Intellectual</span>
          </a>
          <a
            href="#literature"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background hover:bg-muted border border-border/60 transition-colors"
          >
            <BookOpen className="size-3.5 text-amber-500" />
            <span>Literature</span>
          </a>
        </div>
      </BlurFade>

      {/* ===== DIMENSION 1: ENGINEERING ===== */}
      <div id="engineering" className="flex flex-col gap-14">
        {/* Work */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection />
            </BlurFade>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            <div className="flex flex-col gap-8">
              {DATA.education.map((education, index) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade
                  key={skill.name}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                    {skill.icon && (
                      <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                    )}
                    <span className="text-foreground text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ProjectsSection />
          </BlurFade>
        </section>

        {/* Hackathons */}
        <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection />
          </BlurFade>
        </section>
      </div>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4">
        <Separator className="opacity-40" />
      </div>

      {/* ===== SECURITY & RESEARCH ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <SecuritySection />
      </BlurFade>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4">
        <Separator className="opacity-40" />
      </div>

      {/* ===== DIMENSION 2: CREATIVE ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <CreativeSection />
      </BlurFade>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4">
        <Separator className="opacity-40" />
      </div>

      {/* ===== DIMENSION 3: INTELLECTUAL ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <IntellectualSection />
      </BlurFade>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4">
        <Separator className="opacity-40" />
      </div>

      {/* ===== DIMENSION 4: LITERATURE ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <LiteratureSection />
      </BlurFade>

      {/* CONTACT SECTION */}
      <div className="relative py-4">
        <Separator className="opacity-40" />
      </div>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
