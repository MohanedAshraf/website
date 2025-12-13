import { Metadata } from 'next';
import ExperienceClient from './experience-client';

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional journey, work experience, and educational background.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
