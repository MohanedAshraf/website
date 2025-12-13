import Card from "@/components/card";
import IntroParallax from "./intro-parallax";

export default function Intro() {
  return (
    <Card className="relative flex h-full w-full items-center justify-center bg-black">
      <IntroParallax />
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow">
          Mohaned Ashraf
        </h2>
        <p className="mt-2 text-white/90 text-sm md:text-base lg:text-lg">
          Software Engineer
        </p>
      </div>
    </Card>
  );
}
