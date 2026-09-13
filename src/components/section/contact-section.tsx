import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Mail, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  return (
    <div className="border rounded-2xl p-8 sm:p-10 relative overflow-hidden bg-card/50 backdrop-blur-sm shadow-sm">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 shadow-sm">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center pt-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
          Have an engineering inquiry, research collaboration, creative production, or literary project? Feel free to reach out directly through any of the channels below.
        </p>

        {/* Direct Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          {/* Email */}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-background hover:bg-muted border-border/80 text-foreground text-xs sm:text-sm font-medium shadow-xs transition-all hover:scale-[1.02]"
          >
            <Mail className="size-4 text-red-500" />
            <span>Send Email</span>
            <ArrowUpRight className="size-3 text-muted-foreground" />
          </Link>

          {/* LinkedIn */}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-background hover:bg-muted border-border/80 text-foreground text-xs sm:text-sm font-medium shadow-xs transition-all hover:scale-[1.02]"
          >
            <Icons.linkedin className="size-3.5 fill-blue-600" />
            <span>LinkedIn</span>
            <ArrowUpRight className="size-3 text-muted-foreground" />
          </Link>

          {/* X / Twitter */}
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-background hover:bg-muted border-border/80 text-foreground text-xs sm:text-sm font-medium shadow-xs transition-all hover:scale-[1.02]"
          >
            <Icons.x className="size-3.5 fill-foreground" />
            <span>Direct Message</span>
            <ArrowUpRight className="size-3 text-muted-foreground" />
          </Link>

          {/* WhatsApp */}
          {DATA.contact.tel && (
            <Link
              href={`https://wa.me/${DATA.contact.tel.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-background hover:bg-muted border-border/80 text-foreground text-xs sm:text-sm font-medium shadow-xs transition-all hover:scale-[1.02]"
            >
              <Icons.whatsapp className="size-3.5" />
              <span>WhatsApp</span>
              <ArrowUpRight className="size-3 text-muted-foreground" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
