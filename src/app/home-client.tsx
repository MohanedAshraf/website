"use client";
import { motion } from "framer-motion";
import GridLayout from "@/components/layout/grid-layout";
import { gridItems, lgLayout, mdLayout, smLayout } from "@/config/layouts";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { useAssetsPreload } from "@/hooks/use-assets-preload";

const PRELOAD_ASSETS = ["/assets/videos/intro.mp4", "/assets/videos/intro_depth.mp4"];

export default function HomeClient() {
  useAssetsPreload(PRELOAD_ASSETS);
  const { theme } = useTheme();
  
  const delays = useMemo(() => {
    const n = gridItems.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    // Fisher-Yates shuffle
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const arr = new Array(n).fill(0);
    indices.forEach((idx, order) => (arr[idx] = 0.08 + order * 0.08));
    return arr;
  }, []);

  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="px-10 w-full h-screen overflow-hidden pt-20 relative">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <BackgroundBlob x="-22vw" color="var(--haze-amber)" size="70" />
          <BackgroundBlob x="22vw" color="var(--haze-teal)" size="62" animate />
        </div>
        <GridLayout
          className="pb-10 max-w-[1100px] mx-auto"
          lgLayout={lgLayout}
          mdLayout={mdLayout}
          smLayout={smLayout}
        >
          {gridItems.map((item, idx) => {
            const isIntro = item.i === "intro";
            return (
              <div key={item.i}>
                <motion.div
                  key={`${item.i}-${theme}`}
                  className="h-full w-full"
                  initial={{ opacity: 0, scale: isIntro ? 1 : 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: delays[idx] }}
                >
                  <item.component />
                </motion.div>
              </div>
            );
          })}
        </GridLayout>
      </div>
    </main>
  );
}

function BackgroundBlob({ x, color, size, animate }: { x: string, color: string, size: string, animate?: boolean }) {
    return (
        <div className="absolute inset-0 m-auto" style={{ transform: `translateX(${x})` }}>
            <motion.div
                className="blur-3xl mix-blend-multiply dark:mix-blend-screen"
                style={{
                    width: `${size}vw`,
                    height: `${size}vh`,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, hsl(${color} / 0.35) 0%, transparent ${animate ? '65%' : '60%'})`,
                }}
                animate={animate ? { rotate: [0, 2, -2, 0] } : { scale: [0.96, 1.04, 0.96] }}
                transition={{ duration: animate ? 20 : 14, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    )
}
