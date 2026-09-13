"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";

export default function CreativeSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Creative</h2>
        <p className="text-muted-foreground">
          Professional creative and technical production across visual, spatial, and cinematic disciplines.
        </p>
      </div>

      <div className="space-y-8">
        {/* Game Development & 3D */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{DATA.creative.gameDevelopment.title}</h3>
            <p className="text-sm text-muted-foreground">{DATA.creative.gameDevelopment.period}</p>
          </div>
          <p className="text-sm">{DATA.creative.gameDevelopment.description}</p>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Engines</p>
            <div className="space-y-2">
              {DATA.creative.gameDevelopment.engines.map((engine) => (
                <div key={engine.name} className="text-sm">
                  <p className="font-medium">{engine.name}</p>
                  <p className="text-muted-foreground text-xs">{engine.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {DATA.creative.gameDevelopment.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Graphic Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{DATA.creative.graphicDesign.title}</h3>
            <p className="text-sm text-muted-foreground">{DATA.creative.graphicDesign.period}</p>
          </div>
          <p className="text-sm">{DATA.creative.graphicDesign.description}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {DATA.creative.graphicDesign.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Motion Graphics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{DATA.creative.motionGraphics.title}</h3>
                <p className="text-sm text-muted-foreground">{DATA.creative.motionGraphics.period}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{DATA.creative.motionGraphics.projectCount}+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
          <p className="text-sm">{DATA.creative.motionGraphics.description}</p>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Software</p>
            <div className="space-y-2">
              {DATA.creative.motionGraphics.software.map((soft) => (
                <div key={soft.name} className="text-sm">
                  <p className="font-medium">{soft.name}</p>
                  <p className="text-muted-foreground text-xs">{soft.specialization}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {DATA.creative.motionGraphics.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cinematography & Photography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{DATA.creative.cinematography.title}</h3>
            <p className="text-sm text-muted-foreground">{DATA.creative.cinematography.period}</p>
          </div>
          <p className="text-sm">{DATA.creative.cinematography.description}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {DATA.creative.cinematography.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Color Grading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{DATA.creative.colorGrading.title}</h3>
            <p className="text-sm text-muted-foreground">{DATA.creative.colorGrading.period}</p>
          </div>
          <p className="text-sm">{DATA.creative.colorGrading.description}</p>
          <p className="text-xs font-medium text-primary">{DATA.creative.colorGrading.software}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {DATA.creative.colorGrading.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
