"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function IntellectualSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Intellectual</h2>
        <p className="text-muted-foreground">
          Research, philosophy, and scientific thinking across academic and public platforms.
        </p>
      </div>

      <div className="space-y-8">
        {/* Scientific & Academic Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{DATA.intellectual.research.title}</h3>
            <p className="text-sm text-muted-foreground">{DATA.intellectual.research.period}</p>
          </div>
          <p className="text-sm">{DATA.intellectual.research.description}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Expertise Areas</p>
            <div className="flex flex-wrap gap-2">
              {DATA.intellectual.research.expertise.map((exp) => (
                <span
                  key={exp}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic border-l-2 border-muted-foreground pl-3">
            {DATA.intellectual.research.note}
          </p>
        </motion.div>

        {/* Productivity & Academic Workflows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{DATA.intellectual.productivity.title}</h3>
          </div>
          <p className="text-sm">{DATA.intellectual.productivity.description}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Tools & Skills</p>
            <div className="flex flex-wrap gap-2">
              {DATA.intellectual.productivity.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Public Intellectual Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <h3 className="font-semibold text-lg">{DATA.intellectual.publicIntellectual.title}</h3>

          <div className="space-y-3">
            {DATA.intellectual.publicIntellectual.platforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="block p-4 border rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {platform.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{platform.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{platform.language}</p>
                  </div>
                  <Icons.externalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
