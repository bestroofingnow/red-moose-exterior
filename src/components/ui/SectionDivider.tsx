"use client";

interface SectionDividerProps {
  variant?: "simple" | "decorated" | "wave";
  className?: string;
}

export default function SectionDivider({
  variant = "decorated",
  className = "",
}: SectionDividerProps) {
  if (variant === "simple") {
    return (
      <div className={`container-main ${className}`}>
        <hr className="border-gray-200" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative h-16 overflow-hidden ${className}`}>
        <svg
          className="absolute bottom-0 w-full h-16 text-gray-50"
          viewBox="0 0 1440 64"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L1392,64C1344,64,1248,64,1152,64C1056,64,960,64,864,64C768,64,672,64,576,64C480,64,384,64,288,64C192,64,96,64,48,64L0,64Z" />
        </svg>
      </div>
    );
  }

  // Decorated variant (default)
  return (
    <div className={`py-8 md:py-12 ${className}`}>
      <div className="container-main">
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
            <div className="w-3 h-3 bg-[#C41E3A] rounded-full" />
            <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
        </div>
      </div>
    </div>
  );
}
