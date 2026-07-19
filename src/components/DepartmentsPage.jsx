import React, { useState } from "react";
import { EVENT, departments } from "../data/DepartmentsData";
import BottomSheet from "./BottomSheet";

export default function DepartmentsPage() {
  const [query, setQuery] = useState("");
  // Track which department is currently selected for the bottom sheet
  const [selectedDeptId, setSelectedDeptId] = useState(null);

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

  // Get the selected department object
  const selectedDept = departments.find((d) => d.id === selectedDeptId);

  return (
    <div className="h-screen w-full relative overflow-y-auto overflow-x-hidden no-scrollbar bg-navy text-beige font-work">
      {/* ---------------------------------------------------------- */}
      {/* Header & Search (Sticky at top)                            */}
      {/* ---------------------------------------------------------- */}
      <div className="pt-6 pb-0 px-6 rounded-b-[2.5rem] bg-navy/95 backdrop-blur-md border-b border-card-bg">
        <header className="mb-6 mt-4 flex flex-col items-center text-center">
          {/* Line 1: Logo and College Name */}
          <div className="flex items-center justify-center gap-3 text-white mb-2 whitespace-nowrap">
            <img src="/logo-white.png" alt="MCC Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0" />
            <span className="text-xs sm:text-base md:text-lg font-amsterdam opacity-95 tracking-wide">{EVENT.collegeName}</span>
          </div>

          {/* Line 2: PRESENTS (with decorative lines) */}
          <div className="flex items-center gap-4 w-full max-w-[200px] sm:max-w-[280px] mt-3 mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold opacity-40"></div>
            <span className="text-[12px] sm:text-[15px] tracking-[0.4em] uppercase opacity-90 font-work text-gold whitespace-nowrap">
              Presents
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold opacity-40"></div>
          </div>

          {/* Line 3: ATS Logo and Event Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl leading-tight font-archerus flex items-center justify-center gap-3 sm:gap-4 w-full whitespace-nowrap">
            <img src="/ats.webp" alt="ATS Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-xl shrink-0" />
            <span className="drop-shadow-md">{EVENT.eventName}</span>
          </h1>
        </header>

        {/* Search bar */}
        <div className="relative">
          <div className="flex items-center gap-2.5 px-4 py-3.5 rounded-2xl bg-card-bg">
            <span aria-hidden="true" className="opacity-50 text-lg">
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search departments..."
              className="w-full bg-transparent focus:outline-none text-sm placeholder:opacity-40 text-beige"
              aria-label="Search departments"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs px-2 py-1 rounded-full opacity-60 focus:outline-none"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Carousel Section                                           */}
      {/* ---------------------------------------------------------- */}
      <div className="pt-8 pb-10">
        {filteredDepartments.length === 0 ? (
          <div className="text-center py-20 px-6">
            <p className="text-sm opacity-60">
              No departments match "{query}". Try a different search.
            </p>
          </div>
        ) : (
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-5">
            {filteredDepartments.map((dept, index) => {
              const Icon = dept.icon;

              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className="relative snap-center shrink-0 text-left focus:outline-none rounded-[32px] overflow-hidden w-[85vw] max-w-[340px] aspect-[3/4] bg-card-bg"
                >
                  {/* Subtle Beige Gradient Overlay */}
                  <div className="absolute inset-0 opacity-15 bg-gradient-to-bl from-beige via-transparent to-transparent pointer-events-none" />

                  {/* Large Background Icon */}
                  <div className="absolute -right-10 -top-6 opacity-10 pointer-events-none">
                    <Icon size={260} strokeWidth={1.5} className="text-gold" />
                  </div>

                  {/* Editorial Index Number */}
                  <div className="absolute top-6 left-6 pointer-events-none">
                    <span className="text-sm font-work font-bold text-gold tracking-widest opacity-60">
                      /{String(departments.findIndex((d) => d.id === dept.id) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Bottom Section: Text */}
                    <div>
                      {/* Decorative Line */}
                      <div className="w-8 h-[2px] bg-gold opacity-60 mb-4 rounded-full" />

                      <h3 className="text-3xl mb-2 leading-tight font-fraunces font-semibold">
                        {dept.name}
                      </h3>
                      <p className="text-sm leading-snug opacity-80 text-beige-muted">
                        {dept.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Footer note                                                */}
      {/* ---------------------------------------------------------- */}
      <footer className="text-center pb-12 px-6">
        <p className="text-sm opacity-60 text-beige-muted">
          Found your department? Head back to the registration form to apply.
        </p>
      </footer>

      {/* ---------------------------------------------------------- */}
      {/* Bottom Sheet Modal                                         */}
      {/* ---------------------------------------------------------- */}
      <BottomSheet
        selectedDept={selectedDept}
        onClose={() => setSelectedDeptId(null)}
      />
    </div>
  );
}