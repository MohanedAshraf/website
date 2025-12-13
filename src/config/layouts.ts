import Spotify from "../components/grid/spotify";
import Github from "../components/grid/github";
import ContactTile from "../components/grid/contact";
import BrandTile from "../components/grid/brand";
import dynamic from "next/dynamic";
import React from "react";
import { Layout } from "react-grid-layout";

interface GridItem {
  i: string;
  component: () => React.JSX.Element;
}

const Intro = dynamic(() => import("../components/grid/intro"), {
  ssr: false,
  loading: () => React.createElement("div", { className: "relative flex h-full w-full items-center justify-center rounded-3xl bg-black" }),
});

const Location = dynamic(() => import("../components/grid/location"), {
  ssr: false,
  loading: () => React.createElement("div", { className: "relative h-full w-full rounded-3xl bg-sub dark:bg-dark-900" }),
});

const IntroItem = () => React.createElement(Intro);
const LocationItem = () => React.createElement(Location);

export const gridItems: GridItem[] = [
  { i: "intro", component: IntroItem },
  { i: "brand", component: BrandTile },
  { i: "location", component: LocationItem },
  { i: "spotify", component: Spotify },
  { i: "github", component: Github },
  { i: "contact", component: ContactTile },
];

export const lgLayout: Layout[] = [
  { i: "intro", x: 0, y: 0, w: 4, h: 2 },
  { i: "brand", x: 0, y: 2, w: 1, h: 1 },
  { i: "spotify", x: 1, y: 2, w: 1, h: 1 },
  { i: "contact", x: 2, y: 2, w: 1, h: 1 },
  { i: "location", x: 3, y: 2, w: 1, h: 2 },
  { i: "github", x: 0, y: 3, w: 3, h: 1 },
];

export const mdLayout: Layout[] = [
  { i: "intro", x: 0, y: 0, w: 4, h: 2 },
  { i: "brand", x: 0, y: 2, w: 1, h: 1 },
  { i: "spotify", x: 1, y: 2, w: 1, h: 1 },
  { i: "contact", x: 2, y: 2, w: 1, h: 1 },
  { i: "location", x: 3, y: 2, w: 1, h: 2 },
  { i: "github", x: 0, y: 3, w: 3, h: 1 },
];

export const smLayout: Layout[] = [
  { i: "intro", x: 0, y: 0, w: 2, h: 2 },
  { i: "brand", x: 0, y: 2, w: 1, h: 1 },
  { i: "spotify", x: 1, y: 2, w: 1, h: 1 },
  { i: "github", x: 0, y: 3, w: 2, h: 1 },
  { i: "location", x: 0, y: 4, w: 2, h: 2 },
  { i: "contact", x: 0, y: 6, w: 2, h: 1 },
];
