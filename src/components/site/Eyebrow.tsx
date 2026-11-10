import type { ReactNode } from "react";

export function Eyebrow({
  n,
  children,
  light = false,
}: {
  n?: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${light ? "text-champagne" : "text-bronze"}`}>
      {n && <span>{n}</span>}
      <span className="h-px w-10 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}
