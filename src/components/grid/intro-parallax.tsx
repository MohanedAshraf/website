"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import Image from "next/image";

// Hook to detect mobile or low-power devices
function useIsMobileOrLowPower() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      // Check screen size (mobile breakpoint at 768px)
      const isSmallScreen = window.innerWidth < 768;
      
      // Check for touch device
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check for low hardware concurrency (fewer CPU cores)
      const isLowPower = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
      
      // Check for mobile user agent
      const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Consider it mobile/low-power if it's a small touch screen or explicitly mobile
      setIsMobile(isSmallScreen || (isTouchDevice && isMobileUserAgent) || (isSmallScreen && isLowPower));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return isMobile;
}

function ParallaxPlane({ mouseRef, invert, onReady }: { mouseRef: React.MutableRefObject<{ x: number; y: number }>; invert: boolean; onReady: () => void }) {
  const colorVideo = useMemo(() => {
    if (typeof window === "undefined") return document.createElement("video");
    if ((window as any).__introSrc) return (window as any).__introSrc;
    const v = document.createElement("video");
    v.src = "/assets/videos/intro.mp4";
    v.preload = "auto";
    v.muted = true;
    (v as any).playsInline = true;
    v.crossOrigin = "anonymous";
    v.load();
    (window as any).__introSrc = v;
    return v;
  }, []);

  const depthVideo = useMemo(() => {
    if (typeof window === "undefined") return document.createElement("video");
    if ((window as any).__introDepthSrc) return (window as any).__introDepthSrc;
    const v = document.createElement("video");
    v.src = "/assets/videos/intro_depth.mp4";
    v.preload = "auto";
    v.muted = true;
    (v as any).playsInline = true;
    v.crossOrigin = "anonymous";
    v.load();
    (window as any).__introDepthSrc = v;
    return v;
  }, []);

  const colorTex = useMemo(() => {
    const t = new THREE.VideoTexture(colorVideo);
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.format = THREE.RGBAFormat;
    return t;
  }, [colorVideo]);

  const depthTex = useMemo(() => {
    const t = new THREE.VideoTexture(depthVideo);
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    return t;
  }, [depthVideo]);

  const { size } = useThree();
  const [texAspect, setTexAspect] = useState<number>(16 / 9);
  const seenFrame = useRef<boolean>(false);

  useEffect(() => {
    const cv = colorVideo;
    const dv = depthVideo;
    
    // Reset to start and play
    cv.currentTime = 0;
    dv.currentTime = 0;
    cv.play().catch(() => {});
    dv.play().catch(() => {});

    // When video ends, reset to beginning and pause
    const onEnded = () => {
      cv.currentTime = 0;
      dv.currentTime = 0;
      cv.pause();
      dv.pause();
    };
    cv.addEventListener("ended", onEnded);

    const onMeta = () => {
       const a = cv.videoWidth && cv.videoHeight ? cv.videoWidth / cv.videoHeight : 16 / 9;
       setTexAspect(a);
    };
    if (cv.readyState >= 1) onMeta();
    cv.addEventListener("loadedmetadata", onMeta);

    const checkReady = () => {
        if (cv.readyState >= 3 && !seenFrame.current) {
            seenFrame.current = true;
            onReady();
        }
    };
    const i = setInterval(checkReady, 100);

    return () => {
        cv.removeEventListener("loadedmetadata", onMeta);
        cv.removeEventListener("ended", onEnded);
        clearInterval(i);
    };
  }, [colorVideo, depthVideo, onReady]);

  
  // Transition the invert value smoothly
  const invertVal = useRef(invert ? 1.0 : 0.0);
  
  const uniforms = useMemo(
    () => ({
      uColorMap: { value: colorTex },
      uDepthMap: { value: depthTex },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uStrength: { value: 0.025 }, // Slightly reduced strength to minimize shift artifacts
      uInvert: { value: invertVal.current },
    }),
    [colorTex, depthTex]
  );
  
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // 1. Strict Sync Logic
    if (colorVideo.readyState >= 3 && depthVideo.readyState >= 3) {
        if (Math.abs(colorVideo.currentTime - depthVideo.currentTime) > 0.04) {
             depthVideo.currentTime = colorVideo.currentTime;
        }
    }

    // 2. Smooth Invert Transition
    const targetInvert = invert ? 1.0 : 0.0;
    invertVal.current = THREE.MathUtils.lerp(invertVal.current, targetInvert, 0.1);
    if (materialRef.current) {
        materialRef.current.uniforms.uInvert.value = invertVal.current;
        
        // 3. Mouse Smoothing
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const u = materialRef.current.uniforms;
        const cur = u.uMouse.value as THREE.Vector2;
        cur.x += (mx - cur.x) * 0.1;
        cur.y += (my - cur.y) * 0.1;
    }

    // 4. Dynamic Cover Calculation (fixes theme switch sizing)
    if (meshRef.current) {
      // Use size for pixel dimensions, convert to viewport units
      const vw = size.width / 100; // orthographic zoom is 100
      const vh = size.height / 100;
      
      let drawW = vw;
      let drawH = vw / texAspect;
      if (drawH < vh) {
          drawH = vh;
          drawW = vh * texAspect;
      }
      // Minimal overscan to fit while showing full content
      drawW *= 1.02;
      drawH *= 1.02;
      meshRef.current.scale.set(drawW, drawH, 1);
    }
  });

  const vertex = `
    varying vec2 vUv; 
    void main(){ 
      vUv = uv; 
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
  `;
  
  const fragment = `
    precision highp float; 
    varying vec2 vUv; 
    uniform sampler2D uColorMap; 
    uniform sampler2D uDepthMap; 
    uniform vec2 uMouse; 
    uniform float uStrength; 
    uniform float uInvert; 
    
    void main(){
      vec4 depthTex = texture2D(uDepthMap, vUv);
      float depth = (depthTex.r + depthTex.g + depthTex.b) / 3.0;
      
      float direction = mix(1.0, -1.0, uInvert);
      
      vec2 offset = direction * uMouse * (depth - 0.5) * uStrength;
      
      vec2 uv = clamp(vUv + offset, 0.002, 0.998);
      
      gl_FragColor = texture2D(uColorMap, uv);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
  );
}

// Simple cover image for mobile/low-power devices
function MobileCover() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
      <Image
        src="/assets/images/intro.png"
        alt="Intro"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export default function IntroParallax() {
  const isMobile = useIsMobileOrLowPower();
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile
    
    const handler = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current = { x: nx, y: -ny };
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [isMobile]);

  const { theme } = useTheme();

  // Force canvas resize after theme change (only for desktop)
  useEffect(() => {
    if (isMobile) return;
    
    const timeouts = [100, 300, 500].map(delay => 
      setTimeout(() => window.dispatchEvent(new Event('resize')), delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [theme, isMobile]);

  // Render simple cover image for mobile/low-power devices
  if (isMobile) {
    return <MobileCover />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
      <Canvas key={theme} orthographic camera={{ position: [0, 0, 5], zoom: 100 }} dpr={[1, 2]}> 
        <ParallaxPlane mouseRef={mouseRef} invert={theme === "dark"} onReady={() => setReady(true)} />
      </Canvas>
      
      {!ready && (
        <div className="absolute inset-0 bg-black">
          {/* Fallback while loading */}
        </div>
      )}
    </div>
  );
}
