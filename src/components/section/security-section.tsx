"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, MapPin, Calendar, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";

export default function SecuritySection() {
  const items = DATA.securityAndResearch;

  return (
    <motion.section
      id="security"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-red-500/40 text-red-600 dark:text-red-400 bg-red-500/10 text-xs px-2.5 py-0.5">
            Security & Research
          </Badge>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter">Security & Vulnerability Research</h2>
        <p className="text-muted-foreground">
          Independent security assessments, exploit analysis, cloud audits, and responsible vulnerability disclosure.
        </p>
      </div>

      {/* Grid of Security Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col justify-between border hover:border-red-500/40 transition-all duration-300">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" />
                    <span>{item.dates}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shrink-0 mt-0.5">
                    {index % 2 === 0 ? (
                      <ShieldCheck className="size-4" />
                    ) : (
                      <Lock className="size-4" />
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold leading-snug">
                    {item.title}
                  </CardTitle>
                </div>

                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>

              {item.links && item.links.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/40">
                    {item.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-red-500 transition-colors"
                      >
                        {link.icon && <link.icon className="size-3" />}
                        <span>{link.title}</span>
                        <ArrowUpRight className="size-3 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
