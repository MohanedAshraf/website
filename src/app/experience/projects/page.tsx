import { Metadata } from 'next';
import ProjectsClient from './projects-client';

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of technical challenges I've solved and products I've built.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
