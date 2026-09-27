import React from "react";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string | string[];
  description?: string;
  className?: string;
  align?: "left" | "between";
  children?: React.ReactNode;
}

export function SectionHeading({
  number,
  tag,
  title,
  description,
  className = "",
  align = "between",
  children,
}: SectionHeadingProps) {
  const titles = Array.isArray(title) ? title : [title];

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {/* Small Metadata Bar */}
      {(tag || number) && (
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#F4F4F4]/50 mb-4">
          {number && <span>{number}</span>}
          {number && tag && <span>/</span>}
          {tag && <span>{tag}</span>}
        </div>
      )}

      <div
        className={`flex flex-col md:flex-row md:items-end ${
          align === "between" ? "justify-between" : "justify-start"
        } gap-6`}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-editorial text-[#F4F4F4] leading-[1.08]">
            {titles.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>
          {description && (
            <p className="mt-4 text-sm sm:text-base text-[#F4F4F4]/60 max-w-xl font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {children && <div className="shrink-0">{children}</div>}
      </div>

      {/* Subtle Divider */}
      <div className="w-full h-px bg-white/[0.08] mt-8" />
    </div>
  );
}
