import Card from "@/components/card";
import IntroParallax from "./intro-parallax";
import Typewriter from "@/components/effects/typewriter";

export default function Intro() {
  return (
    <Card className="relative flex h-full w-full items-center justify-center bg-black">
      <IntroParallax />
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow">
          Mohaned Metawea
        </h2>
        <div className="mt-2 text-white/90 text-sm md:text-base lg:text-lg min-h-[1.5em] flex items-center justify-center">
          <Typewriter 
            text="Software Engineer / Product Engineer" 
            speed={0.03} 
            delay={0.5} 
            cursor={false}
          />
        </div>
      </div>
    </Card>
  );
}
