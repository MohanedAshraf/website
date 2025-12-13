"use client";

import { useTheme } from "next-themes";
import { useRef, useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Map, { MapRef } from "react-map-gl";
import { motion } from "framer-motion";
import "mapbox-gl/dist/mapbox-gl.css";
import Button from "../button";
import Card from "../card";

const maxZoom = 11;
const minZoom = 4;
const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Location() {
  const [currentZoom, setCurrentZoom] = useState<number>(maxZoom);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  const [showReveal, setShowReveal] = useState<boolean>(false);

  const mapRef = useRef<MapRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  useEffect(() => {
    setShowReveal(true);
    const map = mapRef.current?.getMap();
    const end = () => setTimeout(() => setShowReveal(false), 500);
    if (map) {
      map.once("styledata", end);
    } else {
      end();
    }
    return () => {
      if (map) map.off("styledata", end);
    };
  }, [theme]);

  const handleZoomIn = () => {
    if (!isButtonDisabled) {
      setCurrentZoom((prevZoom) => prevZoom + 1);
      mapRef.current?.zoomIn();
      disableButton();
    }
  };

  const handleZoomOut = () => {
    if (!isButtonDisabled) {
      setCurrentZoom((prevZoom) => prevZoom - 1);
      mapRef.current?.zoomOut();
      disableButton();
    }
  };

  const disableButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 300);
  };

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleResize = debounce(() => {
    mapRef.current?.resize();
  }, 0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Card
      className="relative size-full bg-white dark:bg-dark-900"
      ref={containerRef}
    >
      {(!isMapLoaded || showReveal) && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 m-auto" style={{ transform: "translateX(-18vw)" }}>
            <motion.div
              className="blur-3xl mix-blend-multiply dark:mix-blend-screen"
              style={{
                width: "40vw",
                height: "40vh",
                borderRadius: "50%",
                background: `radial-gradient(circle, hsl(var(--haze-amber) / 0.30) 0%, transparent 60%)`,
              }}
              animate={{ scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute inset-0 m-auto" style={{ transform: "translateX(18vw)" }}>
            <motion.div
              className="blur-3xl mix-blend-multiply dark:mix-blend-screen"
              style={{
                width: "34vw",
                height: "34vh",
                borderRadius: "50%",
                background: `radial-gradient(circle, hsl(var(--haze-teal) / 0.25) 0%, transparent 65%)`,
              }}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle={
          theme === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/streets-v12"
        }
        ref={mapRef}
        scrollZoom={false}
        dragPan={false}
        doubleClickZoom={false}
        attributionControl={false}
        dragRotate={false}
        pitchWithRotate={false}
        touchZoomRotate={false}
        antialias={true}
        onLoad={() => {
          setIsMapLoaded(true);
        }}
        initialViewState={{
          latitude: 29.8821061,
          longitude: 31.3047165,
          zoom: 11,
        }}
        maxZoom={maxZoom}
        minZoom={minZoom}
        style={{ width: "100%", height: "100%" }}
      >
        {isMapLoaded && theme === "dark" && (
          <StyleAmberTeal mapRef={mapRef} />
        )}
        {isMapLoaded && (
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
            <Button
              className={currentZoom === minZoom ? "invisible" : "cancel-drag"}
              aria-label="Zoom Out"
              type="button"
              onClick={handleZoomOut}
            >
              <FaMinus />
            </Button>
            <Button
              className={currentZoom === maxZoom ? "invisible" : "cancel-drag"}
              aria-label="Zoom In"
              type="button"
              onClick={handleZoomIn}
            >
              <FaPlus />
            </Button>
          </div>
        )}
      </Map>
    </Card>
  );
}

function StyleAmberTeal({ mapRef }: { mapRef: React.RefObject<MapRef> }) {
  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    const root = document.documentElement;
    const amberRaw = getComputedStyle(root).getPropertyValue("--haze-amber").trim();
    const tealRaw = getComputedStyle(root).getPropertyValue("--haze-teal").trim();

    const amberHex = hslVarToHex(amberRaw);
    const tealHex = hslVarToHex(tealRaw);

    const apply = () => {
      const style = map.getStyle();
      const layers = style?.layers || [];
      layers.forEach((layer: any) => {
        const id: string = layer.id || "";
        const type: string = layer.type || "";
        const lower = id.toLowerCase();

        // Water bodies (fills) and waterways (lines) → teal
        if (lower.includes("water")) {
          if (type === "fill") {
            try { map.setPaintProperty(id, "fill-color", tealHex); } catch {}
          } else if (type === "line") {
            try { map.setPaintProperty(id, "line-color", tealHex); } catch {}
          }
          return;
        }

        // Small roads only → amber (minor/service/pedestrian/path/foot)
        if (type === "line" && lower.includes("road")) {
          const isSmall = lower.includes("minor") || lower.includes("service") || lower.includes("pedestrian") || lower.includes("path") || lower.includes("foot");
          if (isSmall) {
            try { map.setPaintProperty(id, "line-color", amberHex); } catch {}
          }
        }
      });
    };

    const onStyle = () => apply();
    if (map.isStyleLoaded()) apply();
    map.on("styledata", onStyle);
    return () => {
      map.off("styledata", onStyle);
    };
  }, [mapRef]);

  return null;
}

function hslVarToHex(raw: string): string {
  const parts = raw.split(/\s+/).filter(Boolean);
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1].replace("%", ""));
  const l = parseFloat(parts[2].replace("%", ""));
  const rgb = hslToRgb(h, s, l);
  const toHex = (v: number) => v.toString(16).padStart(2, "0");
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

function hslToRgb(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
  const R = Math.round((r + m) * 255);
  const G = Math.round((g + m) * 255);
  const B = Math.round((b + m) * 255);
  return { r: R, g: G, b: B };
}
