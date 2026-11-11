import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  alignment = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[alignment];

  return (
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-12 md:mb-14 px-2 sm:px-0 ${alignClass}`}>
      {label && (
        <span
          className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-display font-semibold tracking-wider uppercase mb-2.5 ${
            dark
              ? "bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15"
              : "bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10"
          }`}
        >
          {label}
        </span>
      )}

      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug sm:leading-tight ${
          dark ? "text-[#F4EBDD]" : "text-[#172D49]"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-[#F47C68] underline decoration-[#F47C68]/40 decoration-wavy underline-offset-4">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-2.5 sm:mt-3.5 text-xs sm:text-base leading-relaxed max-w-2xl ${
            dark ? "text-[#F4EBDD]/80" : "text-[#172D49]/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
