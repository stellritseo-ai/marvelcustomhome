import logoDark from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

export function Logo({
  tone = "dark",
  className = "h-12",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={`relative inline-block shrink-0 select-none ${className}`}>
      <img
        src={logoDark}
        alt={tone === "dark" ? "Marvel Custom Homes" : ""}
        aria-hidden={tone !== "dark"}
        width={634}
        height={293}
        decoding="async"
        className={`block h-full w-auto transition-opacity duration-500 ${
          tone === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={logoLight}
        alt={tone === "light" ? "Marvel Custom Homes" : ""}
        aria-hidden={tone !== "light"}
        width={634}
        height={293}
        decoding="async"
        className={`pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
          tone === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}
