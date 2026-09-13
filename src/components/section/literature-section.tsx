"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Feather,
  Sparkles,
  Scroll,
  Layers,
  ArrowUpRight,
  BookmarkCheck,
} from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function LiteratureSection() {
  const literature = DATA.literature;
  if (!literature) return null;

  return (
    <motion.section
      id="literature"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10 text-xs px-2.5 py-0.5">
            البعد الأدبي • Dimension 4
          </Badge>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter">Literature & Classical Poetry</h2>
        <p className="text-muted-foreground">
          Epic poetry, long-form existential novels, classical Arabic Mu&apos;allaqat, and literary philosophy.
        </p>
      </div>

      <div className="space-y-8">
        {/* Featured Epic Poem Card */}
        {literature.epicPoem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-card to-amber-950/20 p-6 sm:p-8 shadow-sm backdrop-blur-sm"
          >
            {/* Background Glow */}
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl text-right md:text-right w-full" dir="rtl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    <Sparkles className="size-3.5" />
                    العمل الملحمي المميز • Grand Epic Poem
                  </span>
                  <Badge variant="outline" className="border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 text-xs">
                    <BookmarkCheck className="size-3 ml-1 inline" />
                    {literature.epicPoem.status}
                  </Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-foreground">
                  {literature.epicPoem.titleArabic}
                </h3>
                <p className="text-sm font-sans text-muted-foreground" dir="ltr">
                  {literature.epicPoem.titleEnglish}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {literature.epicPoem.description}
                </p>

                <div className="pt-1 text-xs text-amber-700 dark:text-amber-300 font-medium">
                  {literature.epicPoem.focus}
                </div>
              </div>

              {/* Verses Counter Highlight */}
              <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-amber-500/30 bg-background/80 dark:bg-card/80 shadow-sm min-w-[200px] self-stretch md:self-auto text-center">
                <span className="text-4xl sm:text-5xl font-extrabold text-amber-600 dark:text-amber-400 tracking-tight">
                  {literature.epicPoem.verses.toLocaleString()}+
                </span>
                <span className="text-sm font-bold text-foreground mt-1 font-serif">
                  {literature.epicPoem.versesArabic}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Verses • بيت شعري
                </span>
                <div className="mt-3 text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-medium">
                  بحر الطويل / البسيط
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Novels Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            <h3 className="font-semibold text-lg">Literary Novels • الروايات الفلسفية</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {literature.novels.map((novel, index) => (
              <Card
                key={novel.titleEnglish}
                className="flex flex-col justify-between border hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-xs font-mono">
                      {novel.period}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {novel.status}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold font-serif text-right" dir="rtl">
                        {novel.titleArabic}
                      </CardTitle>
                      <span className="text-xs text-muted-foreground font-mono">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{novel.titleEnglish}</p>
                  </div>

                  <CardDescription className="text-sm leading-relaxed">
                    {novel.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  {/* Novel Architecture Display */}
                  {"structure" in novel && novel.structure && (
                    <div className="rounded-lg bg-muted/50 p-3 text-xs border border-border/50 space-y-2">
                      <div className="flex items-center gap-1.5 font-semibold text-muted-foreground">
                        <Layers className="size-3.5" />
                        <span>Novel Architecture • البنية المعمارية:</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center pt-1" dir="rtl">
                        <div className="p-2 rounded bg-background border border-border/40">
                          <div className="font-bold text-foreground text-sm">
                            {novel.structure.volumes}
                          </div>
                          <div className="text-[10px] text-muted-foreground">مجلدات (Volumes)</div>
                        </div>
                        <div className="p-2 rounded bg-background border border-border/40">
                          <div className="font-bold text-foreground text-sm">
                            {novel.structure.partsPerVolume}
                          </div>
                          <div className="text-[10px] text-muted-foreground">أجزاء/مجلد (Parts)</div>
                        </div>
                        <div className="p-2 rounded bg-background border border-border/40">
                          <div className="font-bold text-foreground text-sm">
                            {novel.structure.sectionsPerPart}
                          </div>
                          <div className="text-[10px] text-muted-foreground">فصول/جزء (Sections)</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Poetry Collections & Mu'allaqat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Scroll className="size-5 text-primary" />
            <h3 className="font-semibold text-lg">Poetry Collections & Classical Mu&apos;allaqat</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Diwan Item */}
            {literature.poetry.map((p) => (
              <div
                key={p.titleEnglish}
                className="p-4 rounded-lg bg-secondary/30 border border-border/60 flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between" dir="rtl">
                  <span className="font-serif font-bold text-lg text-foreground">
                    {p.titleArabic}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {p.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{p.titleEnglish}</p>
              </div>
            ))}

            {/* Muallaqat Collection */}
            <div className="p-4 rounded-lg bg-secondary/30 border border-border/60 flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between" dir="rtl">
                <span className="font-serif font-bold text-lg text-foreground">
                  المعلقات العشر والمجموعات
                </span>
                <Badge variant="outline" className="text-xs">
                  Classical Collection
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {literature.poetryCollections.muallaqat}
              </p>
              <p className="text-[11px] text-muted-foreground/80">
                {literature.poetryCollections.additional}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Literary Social Channels */}
        {literature.social && literature.social.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            {literature.social.map((channel) => (
              <Link
                key={channel.platform}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/70 hover:border-primary/50 hover:bg-muted/40 transition-colors text-sm font-medium bg-card shadow-sm"
              >
                <Feather className="size-4 text-primary" />
                <span>
                  {channel.platform}: {channel.handle}
                </span>
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

