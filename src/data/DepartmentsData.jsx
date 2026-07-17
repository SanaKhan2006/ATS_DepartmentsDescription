import {
  Music2,
  Sparkles,
  Mic2,
  Palette,
  Camera,
  BookOpen,
  Shirt,
  Code2,
} from "lucide-react";

/**
 * ------------------------------------------------------------------
 *  EDIT ME: Event details
 *  Change these to match your college / event name.
 * ------------------------------------------------------------------
 */
export const EVENT = {
  collegeName: "Mithibai College",
  eventName: "ATS 2026",
  tagline: "The annual talent search - find your stage.",
};

/**
 * ------------------------------------------------------------------
 *  EDIT ME: Departments
 *  This is the ONLY file you need to touch to add, remove, or change
 *  a department. DepartmentsPage.jsx just reads this array and
 *  renders it — no styling lives here.
 *
 *  - id:          unique short id (used internally, keep unique)
 *  - name:        department name shown on the card
 *  - icon:        one of the icons imported above (see lucide.dev
 *                 for the full icon set if you want a different one)
 *  - tagline:     one-line summary, always visible
 *  - highlights:  short tags shown as chips (event types under this dept.)
 *  - description: longer paragraph, shown when the card is expanded
 * ------------------------------------------------------------------
 */
export const departments = [
  {
    id: "music",
    name: "Music",
    icon: Music2,
    tagline: "Solo, group and instrumental performances.",
    highlights: ["Solo Singing", "Battle of Bands", "Instrumental"],
    description:
      "Open to vocalists and instrumentalists of every genre — classical, western, fusion, or anything in between. Whether you sing solo or lead a full band, this department is where the college's musical talent takes the mic.",
  },
  {
    id: "dance",
    name: "Dance",
    icon: Sparkles,
    tagline: "Solo, group, classical and freestyle acts.",
    highlights: ["Solo", "Group", "Classical", "Freestyle"],
    description:
      "From classical forms to freestyle and everything contemporary, the dance department welcomes individual performers and full crews. Choreography, energy, and stage presence are what we're looking for.",
  },
  {
    id: "drama",
    name: "Drama & Theatre",
    icon: Mic2,
    tagline: "Street plays, mono acts and skits.",
    highlights: ["Street Play", "Mono Act", "Skit"],
    description:
      "For storytellers who'd rather show than tell. Bring a script to life on stage — solo monologues, short skits, or full street-play productions that speak to real issues and real audiences.",
  },
  {
    id: "fine-arts",
    name: "Fine Arts",
    icon: Palette,
    tagline: "Painting, sketching and live art.",
    highlights: ["Painting", "Sketching", "Rangoli"],
    description:
      "A department for visual storytellers — painters, sketch artists, and anyone who can turn a blank canvas or floor space into something worth stopping for. Live art competitions included.",
  },
  {
    id: "photography",
    name: "Photography & Film",
    icon: Camera,
    tagline: "Photography, short films and reels.",
    highlights: ["Photography", "Short Film", "Reels"],
    description:
      "For anyone who sees stories through a lens. Covers still photography competitions, short-film submissions, and reel-making challenges — open to both phone and camera shooters.",
  },
  {
    id: "literary",
    name: "Literary & Quiz",
    icon: BookOpen,
    tagline: "Debate, quiz and creative writing.",
    highlights: ["Debate", "Quiz", "Creative Writing"],
    description:
      "The department for sharp minds and sharper words. Includes debate competitions, general quizzes, and creative writing contests across poetry, fiction, and essays.",
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    tagline: "Ramp walks and themed styling.",
    highlights: ["Ramp Walk", "Theme Styling"],
    description:
      "For students with an eye for style and the confidence to own a runway. Includes themed ramp walks judged on creativity, coordination, and stage presence.",
  },
  {
    id: "tech",
    name: "Tech & Innovation",
    icon: Code2,
    tagline: "Coding, web design and robotics.",
    highlights: ["Coding", "Web Design", "Robotics"],
    description:
      "For builders and problem-solvers. Covers competitive coding, web/app design challenges, and robotics demos — a talent search isn't just about the stage.",
  },
];