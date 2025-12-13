import Card from "@/components/card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function ContactTile() {
  return (
    <Card variant="glass" className="relative flex h-full flex-col items-center justify-center">
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/mohanedashraf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 transition-transform duration-300 hover:scale-110"
        >
          <FaGithub className="h-7 w-7 text-foreground/80" />
        </a>
        <a
          href="https://linkedin.com/in/mohanedashraf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 transition-transform duration-300 hover:scale-110"
        >
          <FaLinkedin className="h-7 w-7 text-foreground/80" />
        </a>
        <a
          href="mailto:mohaned.ashraf.elsayed@gmail.com"
          aria-label="Email Me"
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 transition-transform duration-300 hover:scale-110"
        >
          <FaEnvelope className="h-7 w-7 text-foreground/80" />
        </a>
      </div>
    </Card>
  );
}

