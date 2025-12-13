"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time, 2.5 seconds to allow full animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-sub dark:bg-dark-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
           {/* Background Haze Effects for Loader */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
             <div className="absolute w-[40vw] h-[40vw] bg-amber-500/20 rounded-full blur-[100px] translate-x-[-20%] translate-y-[-10%]" />
             <div className="absolute w-[40vw] h-[40vw] bg-teal-500/20 rounded-full blur-[100px] translate-x-[20%] translate-y-[10%]" />
           </div>

          <motion.svg
            className="w-20 h-20 md:w-32 md:h-32 text-black dark:text-white relative z-10"
            viewBox="0 0 1077 787"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                    staggerChildren: 0.15, 
                    delayChildren: 0.2 
                } 
              },
              exit: { opacity: 0, scale: 1.1, transition: { duration: 0.5 } }
            }}
          >
            <motion.path
                d="M 182.5,-0.5 C 420.833,-0.5 659.167,-0.5 897.5,-0.5C 926.429,7.04739 941.262,25.7141 942,55.5C 941.587,58.2321 940.92,60.8987 940,63.5C 890.917,142.668 841.584,221.668 792,300.5C 781.84,313.834 768.34,321.334 751.5,323C 610.5,323.667 469.5,323.667 328.5,323C 311.66,321.334 298.16,313.834 288,300.5C 238.416,221.668 189.083,142.668 140,63.5C 135.623,50.0194 137.289,37.3527 145,25.5C 154.037,11.7398 166.537,3.07308 182.5,-0.5 Z"
                fill="currentColor"
                opacity={0.15}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.15, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.path
                d="M 31.5,102.5 C 41.5666,100.788 49.4,104.121 55,112.5C 133.412,258.326 212.079,403.993 291,549.5C 290.633,554.884 288.133,559.05 283.5,562C 276.409,563.112 269.242,563.612 262,563.5C 181.159,562.299 100.325,560.799 19.5,559C 14.5723,557.073 11.4056,553.573 10,548.5C 10.6094,407.501 11.6094,266.501 13,125.5C 14.9655,114.376 21.1322,106.709 31.5,102.5 Z"
                fill="currentColor"
                opacity={0.12}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.12, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            />
            <motion.path
                d="M 1036.5,102.5 C 1053.4,101.236 1063.57,108.903 1067,125.5C 1068.4,266.5 1069.4,407.5 1070,548.5C 1068.59,553.573 1065.43,557.073 1060.5,559C 979.675,560.799 898.841,562.299 818,563.5C 810.758,563.612 803.591,563.112 796.5,562C 791.867,559.05 789.367,554.884 789,549.5C 867.921,403.993 946.588,258.326 1025,112.5C 1027.79,107.866 1031.63,104.533 1036.5,102.5 Z"
                fill="currentColor"
                opacity={0.12}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.12, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            />
            <motion.path
                d="M 634.5,386.5 C 645.838,386.333 657.172,386.5 668.5,387C 688.498,388.143 694.332,397.976 686,416.5C 642.157,498.184 598.824,580.184 556,662.5C 547.563,674.984 538.229,675.651 528,664.5C 481.809,578.118 436.142,491.451 391,404.5C 389.668,396.815 392.835,391.982 400.5,390C 405.104,388.939 409.771,388.273 414.5,388C 488.001,387.833 561.334,387.333 634.5,386.5 Z"
                fill="currentColor"
                opacity={0.15}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.15, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
            <motion.path
                d="M 416.5,786.5 C 284.167,786.5 151.833,786.5 19.5,786.5C 16.1416,784.3 13.6416,781.3 12,777.5C 10.14,771.304 9.30668,764.971 9.5,758.5C 10.6003,740.032 12.7669,721.698 16,703.5C 27.4788,667.844 51.6455,646.678 88.5,640C 154.659,638.53 220.825,637.363 287,636.5C 319.165,634.437 345.832,645.437 367,669.5C 386.731,701.572 406.065,733.905 425,766.5C 427.308,775.535 424.474,782.201 416.5,786.5 Z"
                fill="currentColor"
                opacity={0.1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />
            <motion.path
                d="M 1060.5,786.5 C 928.167,786.5 795.833,786.5 663.5,786.5C 655.526,782.201 652.692,775.535 655,766.5C 673.935,733.905 693.269,701.572 713,669.5C 734.168,645.437 760.835,634.437 793,636.5C 859.175,637.363 925.341,638.53 991.5,640C 1028.35,646.678 1052.52,667.844 1064,703.5C 1067.23,721.698 1069.4,740.032 1070.5,758.5C 1070.86,766.552 1069.36,774.219 1066,781.5C 1064.27,783.402 1062.44,785.069 1060.5,786.5 Z"
                fill="currentColor"
                opacity={0.1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
