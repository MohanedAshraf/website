"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Layout, ReactGridLayoutProps, Responsive } from "react-grid-layout";
import "@/styles/react-grid-layout.css";
import { clsx } from "clsx";

const ResponsiveGridLayout = Responsive;

interface GridLayoutProps extends ReactGridLayoutProps {
  lgLayout: Layout[];
  mdLayout: Layout[];
  smLayout: Layout[];
}

export default function GridLayout({
  lgLayout,
  mdLayout,
  smLayout,
  className,
  children,
}: GridLayoutProps) {
  const [breakpoint, setBreakpoint] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  useEffect(() => {
    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (entries[0].contentRect) {
        setWidth(entries[0].contentRect.width);
        setHeight(entries[0].contentRect.height);
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (width > 1199) {
      setBreakpoint("lg");
    } else if (width > 799) {
      setBreakpoint("md");
    } else if (width > 374) {
      setBreakpoint("sm");
    } else if (width > 319) {
      setBreakpoint("xs");
    } else {
      setBreakpoint("xxs");
    }
  }, [width]);

  const rowHeightValue: { [key: string]: number } = {
    lg: 220,
    md: 160,
    sm: 140,
    xs: 136,
    xxs: 132,
  };

  const getLayoutForBreakpoint = () => {
    if (breakpoint === "lg") return lgLayout;
    if (breakpoint === "md") return mdLayout;
    return smLayout;
  };

  const marginY = 16;
  const layoutForBp = getLayoutForBreakpoint();
  const rows = layoutForBp?.reduce((max, item) => Math.max(max, (item.y || 0) + (item.h || 0)), 0) || 1;
  const dynamicRowHeight = height > 0 && rows > 0
    ? Math.max(80, Math.floor((height - marginY * (rows - 1)) / rows))
    : rowHeightValue[breakpoint] || rowHeightValue.sm;

  const responsiveProps = {
    layouts: {
      lg: lgLayout,
      md: mdLayout,
      sm: smLayout,
    },
    breakpoints: { lg: 1199, md: 799, sm: 374, xs: 319, xxs: 0 },
    cols: { lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 },
    isBounded: true,
    isResizable: false,
    isDraggable: false,
    rowHeight: dynamicRowHeight,
    useCSSTransforms: true,
    measureBeforeMount: true,
    draggableCancel: ".cancel-drag",
    onBreakpointChange: (newBreakpoint: string) => {
      setBreakpoint(newBreakpoint);
    },
  };

  return (
    <section
      ref={containerRef}
      className={clsx("mx-auto h-full", className)}
    >
      <ResponsiveGridLayout
        width={width}
        style={{ opacity: 1 }}
        margin={[16, 16]}
        {...responsiveProps}
      >
        {children}
      </ResponsiveGridLayout>
    </section>
  );
}
