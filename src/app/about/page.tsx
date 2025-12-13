import { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, skills, and what drives me as a software engineer.",
};

export default function AboutPage() {
  return <AboutClient />;
}
