"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
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
      {/* Section Header consistent with Creative and Intellectual */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Security & Research</h2>
        <p className="text-muted-foreground">
          Independent security assessments, exploit analysis, cloud audits, and responsible vulnerability disclosure.
        </p>
      </div>

      {/* Full-width clean cards matching Creative and Intellectual */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
          >
            {/* Card Header: Title on Left, Location & Date on Right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 text-primary shrink-0" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                {item.location && <span>{item.location}</span>}
                {item.location && item.dates && <span>•</span>}
                <span className="tabular-nums font-mono">{item.dates}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>

            {/* Links styled as clean pill badges matching the rest of the site */}
            {item.links && item.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full transition-colors font-medium"
                  >
                    {link.icon && <link.icon className="size-3.5" />}
                    <span>{link.title}</span>
                    <ArrowUpRight className="size-3 opacity-70" />
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
