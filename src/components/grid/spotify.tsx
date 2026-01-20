"use client";

import Link from "next/link";
import { FaSpotify } from "react-icons/fa6";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Spotify() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing", { cache: 'no-store' });
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); 
    return () => clearInterval(interval);
  }, []);

  const isPlaying = data?.isPlaying;
  const profileUrl = "https://open.spotify.com/user/12184541286";

  return (
    <Link 
      href={isPlaying ? data.songUrl : profileUrl} 
      target="_blank" 
      className="block h-full w-full"
    >
      <Card 
        variant="glass"
        className="relative h-full w-full overflow-hidden group bg-gradient-to-br from-[#1DB954]/20 to-transparent"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col justify-between"
            >
              {/* Full Background Cover Art */}
              <div className="absolute inset-0 z-0">
                 <Image 
                    src={data.albumImageUrl} 
                    alt={data.album} 
                    fill
                    className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
                    priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
              </div>

              {/* Glassy Shimmer Animation */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-3xl">
                 <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent skew-x-12"
                    animate={{ translateX: ["100%", "-100%"] }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                 />
              </div>

              {/* Top Content: Song Title */}
              <div className="relative z-30 p-5 pt-6">
                <div className="flex items-start justify-between">
                  <motion.h3 
                    className="text-lg sm:text-2xl font-black text-white leading-none tracking-tight line-clamp-3 drop-shadow-md mr-2"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {data.title}
                  </motion.h3>
                  <FaSpotify className="text-[#1DB954] text-base sm:text-xl shrink-0 mt-1 drop-shadow-lg" />
                </div>
              </div>

              {/* Bottom Content: Artist */}
              <div className="relative z-30 p-5 pb-6 flex items-end justify-between">
                 <div className="min-w-0 flex-1 mr-4">
                    <p className="text-xs sm:text-sm font-medium text-white/90 truncate drop-shadow-sm">{data.artist}</p>
                    <p className="text-[10px] sm:text-xs text-white/60 truncate mt-0.5">{data.album}</p>
                 </div>
              </div>
            </motion.div>
          ) : (
             <motion.div 
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4"
            >
               <motion.div 
                 whileHover={{ scale: 1.1, rotate: 10 }}
                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
               >
                 <FaSpotify className="text-[#1DB954] text-4xl sm:text-5xl" />
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </Link>
  );
}
