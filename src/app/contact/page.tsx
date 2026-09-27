import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { RevealText } from "@/components/RevealText";
import { RevealElement } from "@/components/RevealElement";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CONTACT — Mohammad Rihan MR",
  description: "Get in touch with Mohammad Rihan MR for engineering projects, collaborations, or inquiries.",
};

export default function ContactPage() {
  const directChannels = [
    {
      label: "EMAIL",
      value: "contact@rihanmr.dev",
      href: "mailto:contact@rihanmr.dev",
    },
    {
      label: "GITHUB",
      value: "github.com/rihanmr",
      href: "https://github.com/rihanmr",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/rihanmr",
      href: "https://linkedin.com/in/rihanmr",
    },
    {
      label: "INSTAGRAM",
      value: "instagram.com/rihanmr",
      href: "https://instagram.com",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-24">
      {/* Hero */}
      <div className="max-w-5xl mb-16 sm:mb-24">
        <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          COMMUNICATION DISPATCH
        </div>

        <RevealText
          lines={["LET'S BUILD", "SOMETHING", "USEFUL."]}
          as="h1"
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-editorial text-[#F4F4F4] leading-[0.95]"
        />

        <RevealElement delay={0.2}>
          <p className="mt-8 text-xl sm:text-2xl text-[#F4F4F4]/75 font-light leading-relaxed max-w-2xl">
            Have an idea, collaboration or project in mind?
          </p>
        </RevealElement>
      </div>

      {/* Main Grid: Direct Channels & Minimal Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 border-t border-white/[0.08] pt-14">
        {/* LEFT: Direct Links */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40 block mb-4">
              DIRECT CHANNELS
            </span>
            <ul className="space-y-6">
              {directChannels.map((channel) => (
                <li key={channel.label} className="border-b border-white/[0.06] pb-4">
                  <a
                    href={channel.href}
                    target={channel.label !== "EMAIL" ? "_blank" : undefined}
                    rel={channel.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                    className="group flex items-baseline justify-between text-[#F4F4F4] hover:text-[#F4F4F4]/80 transition-colors"
                  >
                    <div>
                      <span className="block text-xl sm:text-2xl font-light tracking-wide group-hover:translate-x-1 transition-transform">
                        {channel.label}
                      </span>
                      <span className="block text-xs font-mono text-[#F4F4F4]/40 mt-1">
                        {channel.value}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#F4F4F4]/40 group-hover:text-[#F4F4F4] transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-white/[0.08] bg-[#121212] space-y-2 text-xs font-mono text-[#F4F4F4]/60">
            <div className="text-[#F4F4F4]/90 font-medium">LOCATION &amp; TIMEZONE</div>
            <div>Karnataka, India (IST / UTC+5:30)</div>
            <div className="text-[10px] text-[#F4F4F4]/40 pt-2">
              Typically responding within 24 hours.
            </div>
          </div>
        </div>

        {/* RIGHT: Minimal Contact Form */}
        <div className="lg:col-span-7">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40 block mb-6">
            TRANSMISSION FORM
          </span>
          <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#121212]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
