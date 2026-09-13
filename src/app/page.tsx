/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import CreativeSection from "@/components/section/creative-section";
import IntellectualSection from "@/components/section/intellectual-section";
import LiteratureSection from "@/components/section/literature-section";
import SecuritySection from "@/components/section/security-section";
import HeroAvatar from "@/components/hero-avatar";
import DimensionNav from "@/components/dimension-nav";
import DimensionCards from "@/components/dimension-cards";
import KeyStrengths from "@/components/key-strengths";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative pb-16">
      {/* 1. HERO SECTION */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl leading-relaxed"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <HeroAvatar />
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

      {/* 3. FOUR DIMENSIONS FLOATING STICKY SCROLLSPY BAR */}
      <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
        <DimensionNav />
      </BlurFade>

      {/* 4. 3D FEATURED DIMENSION CARDS (MATCHING IMAGE 4) */}
      <BlurFade delay={BLUR_FADE_DELAY * 4.8}>
        <DimensionCards />
      </BlurFade>

      {/* ===== DIMENSION 1: ENGINEERING ===== */}
      <div id="engineering" className="flex flex-col gap-14">
        {/* Work */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
              <KeyStrengths />
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
            <div className="flex flex-col gap-3">
              {DATA.education.map((education, index) => (
                <BlurFade
                  key={education.school + education.degree}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3.5 justify-between group rounded-2xl p-3 sm:p-3.5 border border-transparent hover:border-border/70 dark:hover:border-white/10 hover:bg-muted/30 dark:hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-3.5 flex-1 min-w-0">
                      <div className="relative group/edu flex-none">
                        <div className="absolute -inset-1 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        {education.logoUrl ? (
                          <img
                            src={education.logoUrl}
                            alt={education.school}
                            className="size-10 md:size-12 p-0.5 border border-border/80 dark:border-white/15 rounded-full shadow-md overflow-hidden object-contain flex-none transition-all duration-300 group-hover:scale-115 group-hover:rotate-6 group-hover:ring-2 group-hover:ring-primary/40 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] bg-card dark:bg-[#12141c]"
                          />
                        ) : (
                          <div className="size-10 md:size-12 p-1 border rounded-full shadow-xs ring-2 ring-border/50 bg-muted flex-none" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <div className="font-semibold text-sm sm:text-base leading-snug flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                          <span className="truncate">{education.school}</span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-none"
                            aria-hidden
                          />
                        </div>
                        <div className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none font-mono px-2.5 py-1 rounded-md bg-muted/30 dark:bg-white/[0.03] border border-border/40">
                      <span>
                        {education.start === education.end
                          ? education.start
                          : `${education.start} - ${education.end}`}
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

      </div>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
      </div>

      {/* ===== SECURITY & RESEARCH ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <SecuritySection />
      </BlurFade>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* ===== DIMENSION 2: CREATIVE ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <CreativeSection />
      </BlurFade>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>

      {/* ===== DIMENSION 3: INTELLECTUAL ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <IntellectualSection />
      </BlurFade>

      {/* DIMENSION DIVIDER */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      {/* ===== DIMENSION 4: LITERATURE ===== */}
      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <LiteratureSection />
      </BlurFade>

      {/* CONTACT SECTION */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
