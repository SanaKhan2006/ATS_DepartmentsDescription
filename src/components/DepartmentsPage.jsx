import React, { useState } from "react";
import { EVENT, departments } from "../data/DepartmentsData";

/**
 * ------------------------------------------------------------------
 *  This file handles LAYOUT and STYLING only.
 *  All event/department content lives in departmentsData.js —
 *  edit that file to change what's shown, edit this file to change
 *  how it looks.
 * ------------------------------------------------------------------
 */

// Color tokens, kept as plain JS so they render correctly whether this
// is used in a Tailwind project with a custom config or without one —
// inline styles always work regardless of setup.
const colors = {
  vanilla: "#F5EFE1",
  vanillaCard: "#FBF8EF",
  navy: "#16213E",
  navyMid: "#233156",
  navySoft: "#3A4A73",
  gold: "#C9A227",
};

export default function DepartmentsPage() {
  // Tracks which department cards are currently expanded.
  // Using a Set lets more than one card stay open at a time.
  const [openIds, setOpenIds] = useState(new Set());

  // Search box text, typed by the user.
  const [query, setQuery] = useState("");

  const toggleCard = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filters departments by name, tagline, or highlight chips.
  // Case-insensitive, matches on any word fragment.
  const normalizedQuery = query.trim().toLowerCase();
  const filteredDepartments = departments.filter((dept) => {
    if (!normalizedQuery) return true;
    const haystack = [dept.name, dept.tagline, ...dept.highlights]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: colors.vanilla, color: colors.navy }}
    >
      {/* Google Fonts import — Fraunces for headings, Work Sans for body */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&display=swap');
      `}</style>

      <div
        className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-16"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {/* ---------------------------------------------------------- */}
        {/* Hero / header section                                     */}
        {/* ---------------------------------------------------------- */}
        <header className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: colors.gold, fontWeight: 600 }}
          >
            {EVENT.collegeName} presents
          </p>
          <h1
            className="text-4xl sm:text-6xl mb-4 leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
          >
            {EVENT.eventName}
          </h1>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: colors.navySoft }}
          >
            {EVENT.tagline}
          </p>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* Search bar                                                 */}
        {/* ---------------------------------------------------------- */}
        <div className="max-w-md mx-auto mb-10 sm:mb-12">
          <div
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
            style={{
              backgroundColor: colors.vanillaCard,
              border: `1px solid ${colors.navySoft}33`,
            }}
          >
            <span aria-hidden="true" style={{ color: colors.navySoft }}>
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search departments — e.g. dance, photography..."
              className="w-full bg-transparent focus:outline-none text-sm placeholder:opacity-70"
              style={{ color: colors.navy }}
              aria-label="Search departments"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs px-2 py-1 rounded-md focus:outline-none"
                style={{ color: colors.navySoft }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Section label                                              */}
        {/* ---------------------------------------------------------- */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: colors.navySoft, opacity: 0.25 }}
          />
          <h2
            className="text-sm sm:text-base tracking-[0.15em] uppercase whitespace-nowrap"
            style={{ color: colors.navy, fontWeight: 600 }}
          >
            Departments
          </h2>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: colors.navySoft, opacity: 0.25 }}
          />
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Department cards grid                                      */}
        {/* Responsive: 1 column on mobile, 2 on tablet, 3 on desktop  */}
        {/* ---------------------------------------------------------- */}
        {filteredDepartments.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base" style={{ color: colors.navySoft }}>
              No departments match "{query}". Try a different search.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDepartments.map((dept) => {
            const Icon = dept.icon;
            const isOpen = openIds.has(dept.id);

            return (
              <div
                key={dept.id}
                className="group relative rounded-2xl overflow-hidden transition-shadow duration-300"
                style={{
                  backgroundColor: colors.vanillaCard,
                  border: `1px solid ${colors.navySoft}33`,
                }}
              >
                {/* Spotlight glow — the signature hover detail */}
                <div
                  className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${colors.gold}33 0%, transparent 70%)`,
                  }}
                />

                <button
                  onClick={() => toggleCard(dept.id)}
                  className="relative w-full text-left p-5 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ "--tw-ring-color": colors.gold }}
                  aria-expanded={isOpen}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: colors.navy }}
                  >
                    <Icon size={22} color={colors.vanilla} strokeWidth={1.75} />
                  </div>

                  {/* Name + tagline (always visible) */}
                  <h3
                    className="text-lg sm:text-xl mb-1.5"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                  >
                    {dept.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: colors.navySoft }}>
                    {dept.tagline}
                  </p>

                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {dept.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${colors.navy}0D`,
                          color: colors.navy,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand / collapse indicator */}
                  <div
                    className="flex items-center gap-1 text-xs mt-3"
                    style={{ color: colors.gold, fontWeight: 600 }}
                  >
                    {isOpen ? "Show less" : "Read more"}
                    <span
                      className="inline-block transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ↓
                    </span>
                  </div>
                </button>

                {/* Expandable description */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="text-sm leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6"
                      style={{ color: colors.navySoft }}
                    >
                      {dept.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Footer note                                                */}
        {/* ---------------------------------------------------------- */}
        <footer className="text-center mt-14 sm:mt-20">
          <p className="text-sm" style={{ color: colors.navySoft }}>
            Found your department? Head back to the registration form to
            apply.
          </p>
        </footer>
      </div>
    </div>
  );
}