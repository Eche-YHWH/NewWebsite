import type { ReactNode } from "react";

export default function PageBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neutral-200/60 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-neutral-200/50 blur-3xl" />
        <div className="absolute top-[520px] left-[-140px] h-[420px] w-[420px] rounded-full bg-neutral-200/40 blur-3xl" />
      </div>

      {children}
    </div>
  );
}

