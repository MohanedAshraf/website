import { useState, useEffect } from "react";

export function useAssetsPreload(assets: string[]) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const preload = (src: string) =>
      new Promise<HTMLVideoElement>((resolve) => {
        const v = document.createElement("video");
        v.src = src;
        v.preload = "auto";
        v.muted = true;
        (v as any).playsInline = true;
        v.crossOrigin = "anonymous";
        const done = () => resolve(v);
        v.addEventListener("canplaythrough", done, { once: true });
        v.addEventListener("loadeddata", done, { once: true });
        v.error = () => resolve(v); // Fail safe
        v.load();
      });

    let mounted = true;
    Promise.all(assets.map(preload)).then((loadedAssets) => {
      if (!mounted) return;
      // Assign to global for Intro component consumption (legacy/specific implementation detail)
      if (loadedAssets[0]) (window as any).__introSrc = loadedAssets[0];
      if (loadedAssets[1]) (window as any).__introDepthSrc = loadedAssets[1];
      setReady(true);
    });

    return () => {
      mounted = false;
    };
  }, [assets]);

  return ready;
}
