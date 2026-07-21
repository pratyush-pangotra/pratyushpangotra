export type Project = {
  id: string;
  index: string;
  name: string;
  status: "Private Product" | "Open Source" | "Hardware Build";
  tagline: string;
  description: string;
  stack: string[];
  visual: "architecture" | "hardware" | "cad" | "network" | "game" | "data";
  link?: string;
};

export const projects: Project[] = [
  {
    id: "depdevlab",
    index: "P01",
    name: "DepDevLab",
    status: "Private Product",
    tagline: "An AI workspace that reads your codebase so you don't have to.",
    description:
      "A developer workspace that understands repositories end to end — explaining unfamiliar code, triaging errors, generating documentation, and streamlining GitHub workflows through a single connected interface.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "GitHub OAuth"],
    visual: "architecture",
  },
  {
    id: "smart-classroom",
    index: "P02",
    name: "Smart Classroom Monitoring System",
    status: "Hardware Build",
    tagline: "Dual-IR occupancy counting that decides when the fans run.",
    description:
      "An ESP32-based occupancy and climate system using dual IR sensors for accurate people-counting, a DHT22 for temperature and humidity, an OLED for live status, and automatic fan control based on real classroom occupancy.",
    stack: ["ESP32", "Dual IR Sensors", "OLED", "DHT22", "Automatic Fan Control"],
    visual: "hardware",
  },
  {
    id: "desk-assistant",
    index: "P03",
    name: "Desk Assistant / Macropad",
    status: "Hardware Build",
    tagline: "A macro system with a custom enclosure and a screen of its own.",
    description:
      "A desktop macropad built around an ESP32 and a TFT display, housed in a CAD-modeled enclosure. Runs a custom macro system for shortcuts, quick status, and desk-side automation.",
    stack: ["ESP32", "TFT Display", "Custom Enclosure", "Macro Firmware", "Fusion 360"],
    visual: "cad",
  },
  {
    id: "spotify-oled",
    index: "P04",
    name: "Spotify on OLED",
    status: "Hardware Build",
    tagline: "Now-playing, pulled live from Windows and pushed to a tiny screen.",
    description:
      "Real-time Windows media integration streamed over the network to an ESP32-driven OLED, mirroring track, artist, and playback state on a dedicated physical display.",
    stack: ["ESP32", "OLED", "Windows Media API", "Networking"],
    visual: "network",
  },
  {
    id: "esp32-racing",
    index: "P05",
    name: "ESP32 Racing Game",
    status: "Hardware Build",
    tagline: "Custom-rendered racing, joystick and all, on bare embedded graphics.",
    description:
      "A self-contained racing game built for embedded hardware — custom graphics rendering on a TFT display driven directly by an ESP32, with joystick-based controls.",
    stack: ["ESP32", "TFT Display", "Custom Graphics Engine", "Joystick Input"],
    visual: "game",
  },
  {
    id: "population-viz",
    index: "P06",
    name: "Indian Population Visualization",
    status: "Open Source",
    tagline: "Census-scale data, made legible through interactive charts.",
    description:
      "A data analysis project turning raw Indian population datasets into interactive, explorable visualizations — built to make demographic trends readable at a glance.",
    stack: ["Python", "Pandas", "Matplotlib"],
    visual: "data",
  },
];

export const timeline = [
  {
    year: "Origin",
    title: "Started programming",
    detail: "First lines of C, first compiler errors, first real curiosity.",
  },
  {
    year: "Stage 1",
    title: "Embedded systems",
    detail: "Moved from syntax to silicon — microcontrollers, registers, timing.",
  },
  {
    year: "Stage 2",
    title: "IoT",
    detail: "Connected the boards — sensors, protocols, devices that talk to each other.",
  },
  {
    year: "Stage 3",
    title: "Data analytics",
    detail: "Started asking what the data from those devices actually meant.",
  },
  {
    year: "Stage 4",
    title: "Developer tools",
    detail: "Turned toward building for other builders — workflows, not just circuits.",
  },
  {
    year: "Now",
    title: "AI products",
    detail: "Combining systems thinking with AI to ship products end to end.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Embedded",
    items: ["ESP32", "Arduino", "IoT", "BLE", "I2C", "SPI", "UART", "Sensor Integration"],
  },
  {
    category: "Web",
    items: ["React", "Next.js", "Node.js", "Supabase", "Tailwind CSS"],
  },
  {
    category: "Data",
    items: ["Pandas", "NumPy", "Matplotlib", "Excel"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Fusion 360", "VS Code", "PlatformIO", "Arduino IDE"],
  },
];

export const personal = {
  name: "Pratyush Pangotra",
  role: "Electronics & Communication Engineering Undergraduate",
  tagline: "Building embedded systems, developer tools, and AI-powered products.",
  email: "pratyushpangotra74@gmail.com",
  linkedin: "https://www.linkedin.com/in/pratyush-pangotra/",
  github: "https://github.com/pratyush-pangotra",
};
