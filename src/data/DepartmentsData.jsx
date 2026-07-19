import {
  Camera,
  BookOpen,
  Sparkles,
  Mic2,
  Music as MusicIcon,
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
    tagline: "Capture every unforgettable memory!",
    highlights: [],
    description:
      "From photographing and filming the biggest moments to covering events and creating media that tells the story of the festival, your work will preserve memories that last forever. Join Photomedia and let your lens speak for itself.",
  },
  {
    id: "literary-arts",
    name: "Literary Arts",
    icon: BookOpen,
    tagline: "Where words create the magic behind every event!",
    highlights: [],
    description:
      "From writing scripts, captions, and creative content to shaping the voice of the festival, your words will inspire, engage, and leave a lasting impression. Join Literary Arts and let your creativity tell the story of the fest.",
  },
  {
    id: "dance",
    name: "Dance",
    icon: Sparkles,
    tagline: "Bring energy to every beat!",
    highlights: [],
    description:
      "Coordinate exciting dance events, manage performers, and create an electrifying atmosphere that keeps the audience cheering. If you're passionate about movement, creativity, and teamwork, join Dance and own the stage.",
  },
  {
    id: "drama",
    name: "Drama",
    icon: Mic2,
    tagline: "Where stories come alive on stage!",
    highlights: [],
    description:
      "From managing theatrical performances and coordinating backstage activities to helping performers deliver unforgettable acts, you'll be at the heart of every dramatic moment. Join Drama and bring every story to life.",
  },
  {
    id: "music",
    name: "Music",
    icon: MusicIcon,
    tagline: "Set the rhythm of the festival!",
    highlights: [],
    description:
      "Coordinate performances, manage artists, and ensure every musical event is unforgettable. From soulful melodies to high-energy performances, you'll help create moments the audience will never forget. Join Music and let the fest sing your tune.",
  },
  {
    id: "gaming-sports",
    name: "Gaming & Sports",
    icon: Gamepad2,
    tagline: "Turn your passion into action!",
    highlights: [],
    description:
      "From organizing thrilling tournaments and competitive matches to ensuring every participant has an exciting experience, you'll be the team that keeps the adrenaline alive. Don't just watch the action, lead it. Join Gaming & Sports and level up the fest experience!",
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: Smartphone,
    tagline: "Create the buzz everyone talks about!",
    highlights: [],
    description:
      "From planning engaging campaigns and shooting exciting content to designing stories and reels that get everyone involved, you'll shape the online identity of the fest. Join Social Media and make every post spark excitement.",
  },
  {
    id: "security",
    name: "Security",
    icon: ShieldCheck,
    tagline: "Be the team everyone depends on!",
    highlights: [],
    description:
      "Ensure the safety of participants, guests, and audiences while maintaining smooth operations throughout the festival. Your responsibility and teamwork will help create a secure environment where everyone can enjoy the experience. Join Security and protect the spirit of the fest.",
  },
  {
    id: "pro-shows",
    name: "Pro Shows",
    icon: Star,
    tagline: "Bring the biggest stars to the festival!",
    highlights: [],
    description:
      "From coordinating with judges and artists to managing celebrity appearances and ensuring everything runs seamlessly, you'll help create the most memorable moments of the fest. Join Proshows and be where the spotlight shines brightest.",
  },
  {
    id: "informals",
    name: "Informals",
    icon: PartyPopper,
    tagline: "Create the moments everyone remembers!",
    highlights: [],
    description:
      "Design fun, interactive, and engaging events that keep the excitement alive throughout the festival. From introducing fresh ideas to managing crowd-favourite activities, you'll make sure there's never a dull moment. Join Informals and make the fest unforgettable.",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    tagline: "Be the backbone of the entire festival!",
    highlights: [],
    description:
      "From managing registrations and event schedules to coordinating participants and ensuring everything runs smoothly behind the scenes, you'll keep every event on track. If you love planning and solving problems, join Logistics and make the magic happen.",
  },
  {
    id: "production",
    name: "Production",
    icon: Settings,
    tagline: "Turn ideas into reality!",
    highlights: [],
    description:
      "From handling permissions and venue requirements to managing all on-ground arrangements, you'll ensure every event is executed exactly as planned. Be the team that transforms planning into action. Join Productions and build the fest from the ground up.",
  },
  {
    id: "pr",
    name: "Public Relations",
    icon: Megaphone,
    tagline: "Be the voice that brings the festival to life!",
    highlights: [],
    description:
      "From conducting engaging class-to-class promotions to creating unique publicity campaigns and connecting with students across campus, you'll make sure everyone knows where the excitement is. Join Public Relations and spread the fest spirit everywhere.",
  },
  {
    id: "graphics",
    name: "Graphics",
    icon: PenTool,
    tagline: "Design the identity of the festival!",
    highlights: [],
    description:
      "From posters and brochures to social media creatives and branding elements, your designs will become the face of the fest. Every visual you create will leave a lasting impact. Join Graphics and bring creativity to life.",
  },
  {
    id: "fine-arts",
    name: "Fine Arts",
    icon: Paintbrush,
    tagline: "Transform ordinary spaces into extraordinary experiences!",
    highlights: [],
    description:
      "From designing stunning décor and creative installations to bringing every venue to life with unique visual concepts, your imagination will define the look and feel of the festival. Join Fine Arts and paint the spirit of the fest.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Coffee,
    tagline: "Create an experience that everyone remembers!",
    highlights: [],
    description:
      "From managing barter collaborations and arranging food and refreshments to taking care of judges, artists, and participants, you'll ensure every guest feels welcomed and valued. Join Hospitality and become the heart of the festival.",
  },
  {
    id: "resource-management",
    name: "Resource Management",
    icon: ClipboardList,
    tagline: "Keep every department equipped for success!",
    highlights: [],
    description:
      "Coordinate stationery, printing, and essential resources while ensuring every team's requirements are met on time. Your planning and efficiency will keep the entire festival running smoothly. Join Resource Management and become the support behind every success.",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Target,
    tagline: "Build partnerships that make the fest bigger than ever!",
    highlights: [],
    description:
      "From pitching sponsors and securing exciting collaborations to managing brand relationships and sponsor deliverables, you'll play a key role in bringing opportunities to life. Don't just represent the fest, help it grow. Join Marketing and make every connection count.",
  },
  {
    id: "business-events",
    name: "Business Events",
    icon: Briefcase,
    tagline: "Where innovation meets competition!",
    highlights: [],
    description:
      "Plan and execute exciting business competitions that challenge participants, encourage strategic thinking, and create unforgettable experiences. If you're passionate about management and leadership, this is your stage. Join Business Events and make every challenge count.",
  },
  {
    id: "technical",
    name: "Technical",
    icon: Cpu,
    tagline: "Power every unforgettable experience!",
    highlights: [],
    description:
      "From managing sound, lights, and technical setups to ensuring every event runs flawlessly, you'll be the team that keeps the show going. If you love working behind the scenes and solving challenges, join Technicals and make every performance shine.",
  },
  {
    id: "website",
    name: "Website",
    icon: Code2,
    tagline: "Build the digital face of the festival!",
    highlights: [],
    description:
      "From designing and maintaining the official ATS website to ensuring a smooth, user-friendly experience for registrations, updates, and event information, you'll keep the fest connected online. Join Website and create the platform that brings the festival to everyone.",
  },
];