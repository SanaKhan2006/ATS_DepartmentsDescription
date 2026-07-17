import {
  Camera,
  BookOpen,
  Sparkles,
  Mic2,
  Gamepad2,
  Smartphone,
  ShieldCheck,
  Star,
  PartyPopper,
  Truck,
  Settings,
  Megaphone,
  PenTool,
  Paintbrush,
  Coffee,
  ClipboardList,
  Code2,
  Target,
  Briefcase,
  Cpu,
} from "lucide-react";

/**
 * ------------------------------------------------------------------
 *  EDIT ME: Event details
 *  Change these to match your college / event name.
 * ------------------------------------------------------------------
 */
export const EVENT = {
  collegeName: "Mithibai Cultural Committee",
  eventName: "Annual Talent Search",
  tagline: "The annual talent search - find your stage.",
};

/**
 * ------------------------------------------------------------------
 *  EDIT ME: Departments
 * ------------------------------------------------------------------
 */
export const departments = [
  {
    id: "photomedia",
    name: "Photomedia",
    icon: Camera,
    tagline: "Documenting everything from behind the scenes to the main stage.",
    highlights: [],
    description:
      "Our department stays the most active, documenting from what's going on behind the scenes to the stage, from the fair to the turfs! Additionally, we work on the official before and after movie!",
  },
  {
    id: "literary-arts",
    name: "Literary Arts",
    icon: BookOpen,
    tagline: "Crafting words that turn into inspiration.",
    highlights: [],
    description:
      "We handle everything from scripts, event content to captions and communication. We are crafting words that can turn into inspiration.",
  },
  {
    id: "dance",
    name: "Dance",
    icon: Sparkles,
    tagline: "Where passion meets performance.",
    highlights: [],
    description:
      "The Dance department is where passion meets performance, celebrating creativity, discipline and the art of movement. We aim to provide every dancer a platform to express, inspire and shine!!",
  },
  {
    id: "drama",
    name: "Drama",
    icon: Mic2,
    tagline: "Bringing stories to life with creativity and flair.",
    highlights: [],
    description:
      "Brings stories to life by organizing and executing all drama events with creativity, precision, and flair.",
  },
  {
    id: "gaming-sports",
    name: "Gaming & Sports",
    icon: Gamepad2,
    tagline: "Turn your passion into action with epic tournaments and matches.",
    highlights: [],
    description:
      "Turn your passion into action join the Gaming & Sports Department and create unforgettable events! From epic tournaments to thrilling matches, be the team that makes the fest come alive. Don't just watch the excitement lead it. Join us and level up the fest experience you will be the people who build it.",
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: Smartphone,
    tagline: "Capturing the best ATS moments and keeping everyone updated.",
    highlights: [],
    description:
      "Capture the best ATS moments and create FOMO, create exciting content, and keep everyone updated with Behind the scenes.",
  },
  {
    id: "security",
    name: "Security",
    icon: ShieldCheck,
    tagline: "Ensuring safety and preventing chaos during the fest.",
    highlights: [],
    description:
      "Our department ensures safety of the fest, prevents any chaos during the fest and controls overcrowding during the fest.",
  },
  {
    id: "pro-shows",
    name: "Pro Shows",
    icon: Star,
    tagline: "End-to-end coordination with celebrities and influencers.",
    highlights: [],
    description:
      "We manage end-to-end coordination with celebrities and influencers, from outreach and negotiations to on-ground hospitality, ensuring a seamless experience for talent and audience alike.",
  },
  {
    id: "informals",
    name: "Informals",
    icon: PartyPopper,
    tagline: "Innovative games, unique concepts, and crowd-favourite activities.",
    highlights: [],
    description:
      "Brings ATS to life through innovative games, unique concepts, and crowd-favourite activities. Perfect for those who love creativity, teamwork, and event management.",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    tagline: "Managing registrations, scheduling, and on-ground operations.",
    highlights: [],
    description:
      "Ensures smooth execution of every event by managing registrations, scheduling, participant coordination, and on-ground operations, making every ATS experience seamless and well-organized.",
  },
  {
    id: "production",
    name: "Production",
    icon: Settings,
    tagline: "Managing all setups and venue permissions.",
    highlights: [],
    description:
      "The Production Department ensures all events are executed smoothly on the ground. It manages all the setups and sorts the venue permissions.",
  },
  {
    id: "pr",
    name: "Public Relations",
    icon: Megaphone,
    tagline: "Managing the event's image and increasing campus outreach.",
    highlights: [],
    description:
      "The public relations department manages the event's image, attract participants and members, and increases campus outreach of the fest.",
  },
  {
    id: "graphics",
    name: "Graphics",
    icon: PenTool,
    tagline: "Bringing the vision of ATS to life through creative design.",
    highlights: [],
    description:
      "The graphics department brings the vision of ATS to life through creative design. From social media posts, brochures, ID cards, POPs, and marketing decks to event branding, every visual you see is designed here. If you're passionate about creativity and want your work to be seen by thousands, this is the place for you!",
  },
  {
    id: "fine-arts",
    name: "Fine Arts",
    icon: Paintbrush,
    tagline: "Crafting décor and creating artistic experiences.",
    highlights: [],
    description:
      "The Fine Arts Department is where imagination meets execution. We craft the décor, create artistic experiences, and ensure every corner of the fest reflects creativity and excellence.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Coffee,
    tagline: "Ensuring everyone enjoys a comfortable and memorable experience.",
    highlights: [],
    description:
      "From welcoming esteemed judges to managing food, water, barter partnerships, and on-ground care, the Hospitality Department ensures every individual enjoys a comfortable and memorable event experience.",
  },
  {
    id: "resource-management",
    name: "Resource Management",
    icon: ClipboardList,
    tagline: "Handling resources, coordination, budgeting, and vendor relations.",
    highlights: [],
    description:
      "Resource Management ensures every event has the resources, coordination, and the support it needs to run seamlessly. RM works on budgeting and vendor relations. From stationary, Printing to last minute supplies we handle all the inter-departmental needs.",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Target,
    tagline: "Ensuring every event reaches the right audience through strategic planning.",
    highlights: [],
    description:
      "Marketing ensures every event reaches the right audience through strategic planning, creative campaigns, promotions, and consistent communication. From building awareness to driving engagement, we shape how every event is presented and perceived.",
  },
  {
    id: "business-events",
    name: "Business Events",
    icon: Briefcase,
    tagline: "Testing leadership and problem-solving through exciting challenges.",
    highlights: [],
    description:
      "The Business Events Department brings together strategy, innovation, and competition through exciting challenges that test leadership, creativity, problem-solving, and decision-making. From case studies to startup simulations, it provides a platform for participants to think like future entrepreneurs and business leaders while competing in dynamic, real-world scenarios.",
  },
  {
    id: "technical",
    name: "Technical",
    icon: Cpu,
    tagline: "The backbone of the event, managing everything behind the scenes.",
    highlights: [],
    description:
      "It is the backbone of the whole event. They manage everything behind the scenes, ensuring the sound, lighting, internet, and equipment run perfectly so the event goes off without a hitch. Without technicals event cannot work.",
  },
  {
    id: "website",
    name: "Website",
    icon: Code2,
    tagline: "Building and maintaining the digital face of ATS.",
    highlights: [],
    description:
      "The Website department is responsible for building and maintaining the digital face of the fest. From coding interactive features to ensuring a seamless online experience, we bring the event to screens everywhere.",
  },
];