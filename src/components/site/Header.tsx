import { useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { useEffect, useRef, useState, type ToggleEvent as ReactToggleEvent } from "react";
import { BUSINESS, HEADER_NAV } from "@/lib/site";
import { Logo } from "./Logo";

function isPopoverOpen(el: HTMLElement | null): boolean {
  if (!el) return false;
  if (el.classList.contains(":popover-open")) return true;
  try {
    return el.matches(":popover-open");
  } catch {
    return false;
  }
}

function showPopoverSafely(el: HTMLElement | null, source?: HTMLElement | null) {
  if (!el) return;
  try {
    if (source && "showPopover" in el && typeof el.showPopover === "function") {
      (el as HTMLElement & { showPopover: (opts?: { source?: HTMLElement }) => void }).showPopover({
        source,
      });
      return;
    }
  } catch {
    // Fall back to zero-arg showPopover for browsers or polyfills without options support.
  }
  try {
    el.showPopover?.();
  } catch {
    // Ignore when element is not currently an active popover.
  }
}

function hidePopoverSafely(el: HTMLElement | null) {
  if (!el || !isPopoverOpen(el)) return;
  try {
    el.hidePopover?.();
  } catch {
    // Ignore if already hidden or detached.
  }
}

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash.replace(/^#/, "") });

  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const dropdownLiRef = useRef<HTMLLIElement>(null);
  const submenuTriggerRef = useRef<HTMLButtonElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);

  const isWideRef = useRef(false);
  const initializedRef = useRef(false);
  const hoverPreviewRef = useRef(false);
  const collapsedWidthRef = useRef(0);
  const rafMeasureRef = useRef<number | null>(null);

  const overHero = path === "/" && !scrolled;

  function positionServicesPopover() {
    const submenu = submenuRef.current;
    const trigger = submenuTriggerRef.current;
    if (!submenu || !trigger) return;
    if (typeof CSS !== "undefined" && CSS.supports("position-area", "block-end")) {
      submenu.style.top = "";
      submenu.style.left = "";
      return;
    }
    const gap = 26;
    const tr = trigger.getBoundingClientRect();
    const width = submenu.offsetWidth;
    const height = submenu.offsetHeight;
    let top = tr.bottom + gap;
    if (top + height > window.innerHeight - 12 && tr.top - gap - height >= 12) {
      top = tr.top - gap - height;
    }
    const left = Math.min(Math.max(12, tr.left), Math.max(12, window.innerWidth - width - 12));
    submenu.style.top = `${top}px`;
    submenu.style.left = `${left}px`;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !Object.hasOwn(HTMLElement.prototype, "popover")) {
      void import("@oddbird/popover-polyfill");
    }
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const bar = barRef.current;
    const inner = innerRef.current;
    const menu = menuRef.current;
    const submenu = submenuRef.current;
    const trigger = submenuTriggerRef.current;
    if (!header || !bar || !inner || !menu || !submenu || !trigger) return;

    const measure = (force = false) => {
      if (!isWideRef.current && !force && bar.clientWidth <= collapsedWidthRef.current) {
        return;
      }

      const wasMenuOpen = !isWideRef.current && isPopoverOpen(menu);
      if (wasMenuOpen) hidePopoverSafely(menu);
      if (isWideRef.current && isPopoverOpen(submenu)) hidePopoverSafely(submenu);

      menu.removeAttribute("popover");
      header.classList.add("is-measuring", "is-wide");

      const wide = inner.scrollWidth <= inner.clientWidth + 1;
      const layoutChanged = wide !== isWideRef.current || !initializedRef.current;
      initializedRef.current = true;
      isWideRef.current = wide;

      if (wide) {
        collapsedWidthRef.current = 0;
        submenu.setAttribute("popover", "auto");
        submenu.hidden = false;
        if (layoutChanged) {
          hoverPreviewRef.current = false;
          setServicesExpanded(false);
          setMenuExpanded(false);
        }
      } else {
        header.classList.remove("is-wide");
        menu.setAttribute("popover", "auto");
        submenu.removeAttribute("popover");
        submenu.style.top = "";
        submenu.style.left = "";
        collapsedWidthRef.current = bar.clientWidth;
        if (layoutChanged) {
          hoverPreviewRef.current = false;
          submenu.hidden = true;
          setServicesExpanded(false);
        }
        if (wasMenuOpen) {
          showPopoverSafely(menu);
        }
      }

      setIsWide(wide);
      setMounted(true);

      if (rafMeasureRef.current !== null) cancelAnimationFrame(rafMeasureRef.current);
      rafMeasureRef.current = requestAnimationFrame(() => {
        header.classList.remove("is-measuring");
      });
    };

    measure(true);

    const observer = new ResizeObserver(() => measure(false));
    observer.observe(bar);
    observer.observe(menu);

    let active = true;
    void document.fonts?.ready?.then(() => {
      if (active) measure(true);
    });

    const onResize = () => {
      if (isWideRef.current && isPopoverOpen(submenu)) {
        positionServicesPopover();
      }
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      if (rafMeasureRef.current !== null) cancelAnimationFrame(rafMeasureRef.current);
    };
  }, []);

  useEffect(() => {
    hoverPreviewRef.current = false;
    hidePopoverSafely(submenuRef.current);
    hidePopoverSafely(menuRef.current);
    if (!isWideRef.current && submenuRef.current) {
      submenuRef.current.hidden = true;
    }
    setServicesExpanded(false);
    setMenuExpanded(false);
  }, [path, hash]);

  function closeAllMenus() {
    hoverPreviewRef.current = false;
    hidePopoverSafely(submenuRef.current);
    hidePopoverSafely(menuRef.current);
    if (!isWideRef.current && submenuRef.current) {
      submenuRef.current.hidden = true;
    }
    setServicesExpanded(false);
    setMenuExpanded(false);
  }

  function onSiteMenuToggle(e: ReactToggleEvent<HTMLUListElement>) {
    if (isWideRef.current) return;
    const nextOpen = e.nativeEvent.newState === "open";
    setMenuExpanded(nextOpen);
    if (!nextOpen && submenuRef.current) {
      submenuRef.current.hidden = true;
      setServicesExpanded(false);
    }
  }

  function onServicesToggle(e: ReactToggleEvent<HTMLUListElement>) {
    if (!isWideRef.current) return;
    const nextOpen = e.nativeEvent.newState === "open";
    setServicesExpanded(nextOpen);
    if (nextOpen) {
      positionServicesPopover();
    } else {
      hoverPreviewRef.current = false;
    }
  }

  function onDropdownPointerEnter(e: React.PointerEvent<HTMLLIElement>) {
    if (!isWideRef.current) return;
    if (e.pointerType === "touch") return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const submenu = submenuRef.current;
    if (!submenu || isPopoverOpen(submenu)) return;
    hoverPreviewRef.current = true;
    showPopoverSafely(submenu, submenuTriggerRef.current);
    positionServicesPopover();
  }

  function onDropdownPointerLeave(e: React.PointerEvent<HTMLLIElement>) {
    if (!isWideRef.current) return;
    if (e.pointerType === "touch") return;
    if (!hoverPreviewRef.current) return;
    hoverPreviewRef.current = false;
    hidePopoverSafely(submenuRef.current);
  }

  function onDropdownBlur(e: React.FocusEvent<HTMLLIElement>) {
    if (!isWideRef.current) return;
    const nextTarget = e.relatedTarget;
    if (nextTarget instanceof Node && !dropdownLiRef.current?.contains(nextTarget)) {
      hoverPreviewRef.current = false;
      hidePopoverSafely(submenuRef.current);
    }
  }

  function onServicesButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!isWideRef.current) {
      const submenu = submenuRef.current;
      if (!submenu) return;
      const nextExpanded = submenu.hidden;
      submenu.hidden = !nextExpanded;
      setServicesExpanded(nextExpanded);
      return;
    }

    if (hoverPreviewRef.current) {
      // Clicking while hover-previewing pins the native popover open instead of toggling it closed.
      hoverPreviewRef.current = false;
      e.preventDefault();
    }
  }

  const focusOutline = overHero
    ? "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
    : "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F5D40]";

  const accentInk = overHero ? "text-champagne" : "text-[#6F5D40]";
  const activeRuleColor = overHero
    ? "bg-champagne forced-colors:bg-[LinkText]"
    : "bg-[#6F5D40] forced-colors:bg-[LinkText]";

  const topLinkTone = overHero
    ? "text-ivory/90 hover:text-ivory"
    : "text-charcoal/90 hover:text-charcoal";

  return (
    <header ref={headerRef} className={`site-header${isWide ? " is-wide" : ""}`}>
      <div ref={barRef} className="header-bar" data-tone={overHero ? "dark" : "light"}>
        <div ref={innerRef} className="header-inner">
          <div className="site-logo shrink-0 cursor-default" aria-label="Marvel Custom Homes">
            <Logo
              tone={overHero ? "light" : "dark"}
              className="h-11 transition-[height] duration-500 ease-[var(--ease-lux)] sm:h-12 lg:h-[52px]"
            />
          </div>

          <nav className="site-nav" aria-label="Primary">
            <button
              type="button"
              className={`menu-button inline-flex min-h-11 items-center gap-3 rounded-[6px] border px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${focusOutline} ${
                overHero
                  ? "border-ivory/30 bg-ivory/10 text-ivory hover:bg-ivory/20"
                  : "border-charcoal/20 bg-ivory/65 text-charcoal hover:bg-ivory"
              }`}
              popoverTarget="site-menu"
              popoverTargetAction="toggle"
              aria-controls="site-menu"
              aria-expanded={menuExpanded}
            >
              <span className="flex flex-col gap-[5px]" aria-hidden="true">
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
              <span>{menuExpanded ? "Close" : "Menu"}</span>
            </button>

            <ul
              ref={menuRef}
              id="site-menu"
              popover={!mounted || !isWide ? "auto" : undefined}
              onToggle={onSiteMenuToggle}
              className="site-menu liquid-glass-popover"
            >
              {HEADER_NAV.map((item, idx) => {
                const indexLabel = String(idx + 1).padStart(2, "0");

                if (item.type === "dropdown") {
                  const servicesActive = path === "/services";
                  return (
                    <li
                      key={item.label}
                      ref={dropdownLiRef}
                      className="nav-dropdown relative"
                      onPointerEnter={onDropdownPointerEnter}
                      onPointerLeave={onDropdownPointerLeave}
                      onBlur={onDropdownBlur}
                    >
                      <button
                        ref={submenuTriggerRef}
                        type="button"
                        data-active={servicesActive || undefined}
                        aria-expanded={servicesExpanded}
                        aria-controls="services-menu"
                        popoverTarget={mounted && isWide ? "services-menu" : undefined}
                        onClick={onServicesButtonClick}
                        className={`nav-top-control group cursor-pointer ${
                          servicesActive ? "font-semibold opacity-100" : ""
                        } ${topLinkTone} ${focusOutline}`}
                      >
                        <span className="inline-flex items-baseline gap-3">
                          <span className={`nav-index eyebrow w-6 text-[0.625rem] ${accentInk}`}>
                            {indexLabel}
                          </span>
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-[var(--ease-lux)] ${
                            servicesExpanded ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          aria-hidden="true"
                          className={`nav-rule pointer-events-none absolute inset-x-0 bottom-0.5 h-[1.5px] origin-left transition-transform duration-500 ease-[var(--ease-lux)] ${activeRuleColor} ${
                            servicesActive || servicesExpanded
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                          }`}
                        />
                      </button>

                      <ul
                        ref={submenuRef}
                        id="services-menu"
                        popover={mounted && isWide ? "auto" : undefined}
                        hidden={mounted && !isWide ? !servicesExpanded : undefined}
                        onToggle={onServicesToggle}
                        className="dropdown-list liquid-glass-popover"
                      >
                        {item.items.map((sub) => {
                          const isCurrentSub = path === "/services" && hash === sub.hash;
                          return (
                            <li key={sub.hash} className="dropdown-item">
                              <button
                                type="button"
                                onClick={closeAllMenus}
                                className={`group flex w-full min-h-11 cursor-pointer items-center justify-between gap-4 rounded-[6px] px-3 py-2.5 text-left transition-all duration-200 ${focusOutline} ${
                                  overHero
                                    ? isCurrentSub
                                      ? "bg-ivory/16 font-medium text-ivory"
                                      : "text-ivory/88 hover:bg-ivory/10 hover:text-ivory"
                                    : isCurrentSub
                                      ? "bg-charcoal/[0.09] font-medium text-charcoal"
                                      : "text-charcoal/88 hover:bg-charcoal/[0.05] hover:text-charcoal"
                                }`}
                              >
                                <span className="flex items-center gap-3">
                                  <span
                                    className={`eyebrow w-5 shrink-0 text-[0.625rem] tabular-nums tracking-[0.18em] ${accentInk}`}
                                  >
                                    {sub.n}
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className={`h-3.5 w-px shrink-0 transition-colors duration-200 ${
                                      overHero
                                        ? "bg-ivory/18 group-hover:bg-champagne/60"
                                        : "bg-charcoal/15 group-hover:bg-[#6F5D40]/50"
                                    }`}
                                  />
                                  <span className="dropdown-sublink">{sub.label}</span>
                                </span>
                                <span
                                  aria-hidden="true"
                                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                    overHero
                                      ? isCurrentSub
                                        ? "border-champagne/60 bg-champagne/15 text-champagne"
                                        : "border-ivory/15 text-ivory/55 group-hover:border-champagne/60 group-hover:bg-champagne/15 group-hover:text-champagne"
                                      : isCurrentSub
                                        ? "border-[#6F5D40]/45 bg-[#6F5D40]/12 text-[#6F5D40]"
                                        : "border-charcoal/15 text-charcoal/55 group-hover:border-[#6F5D40]/45 group-hover:bg-[#6F5D40]/10 group-hover:text-[#6F5D40]"
                                  }`}
                                >
                                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={item.to}>
                    <button
                      type="button"
                      onClick={closeAllMenus}
                      className={`nav-top-control group cursor-pointer ${
                        item.to === "/" ? "font-semibold opacity-100" : ""
                      } ${topLinkTone} ${focusOutline}`}
                    >
                      <span className="inline-flex items-baseline gap-3">
                        <span className={`nav-index eyebrow w-6 text-[0.625rem] ${accentInk}`}>
                          {indexLabel}
                        </span>
                        <span>{item.label}</span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`nav-rule pointer-events-none absolute inset-x-0 bottom-0.5 h-[1.5px] origin-left scale-x-0 transition-transform duration-500 ease-[var(--ease-lux)] group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
                          item.to === "/" ? "scale-x-100" : ""
                        } ${activeRuleColor}`}
                      />
                    </button>
                  </li>
                );
              })}

              <li
                className={`site-menu-meta mt-2 border-t pt-3 text-xs ${
                  overHero ? "border-ivory/15 text-ivory/75" : "border-charcoal/12 text-charcoal/75"
                }`}
              >
                <p className={`eyebrow text-[0.6rem] ${accentInk}`}>Dallas Studio</p>
                <p className="mt-1 leading-relaxed">
                  {BUSINESS.street} · {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
                </p>
                <span
                  className={`mt-1 inline-block font-medium ${
                    overHero ? "text-ivory" : "text-charcoal"
                  }`}
                >
                  {BUSINESS.phone}
                </span>
              </li>
            </ul>
          </nav>

          <div
            className={`header-phone-btn group inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-[50px] border px-3 py-2 text-[0.8125rem] font-medium tracking-[0.04em] whitespace-nowrap sm:px-4 ${focusOutline} ${
              overHero
                ? "border-ivory/35 bg-ivory/14 text-ivory"
                : "border-charcoal bg-charcoal text-ivory"
            }`}
          >
            <Phone
              aria-hidden="true"
              className={`h-4 w-4 shrink-0 ${overHero ? "text-champagne" : "text-champagne"}`}
            />
            <span className="sr-only">Call </span>
            <span className="header-phone-text">{BUSINESS.phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
