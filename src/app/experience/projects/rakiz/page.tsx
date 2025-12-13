import { Metadata } from 'next';
import RakizClient from './rakiz-client';

export const metadata: Metadata = {
  title: "Rakiz - SaaS Gym Management Platform",
  description: "A comprehensive SaaS solution for gym management, engineered to modernize the fitness industry in Egypt.",
  openGraph: {
      title: "Rakiz - SaaS Gym Management Platform",
      description: "A comprehensive SaaS solution for gym management, engineered to modernize the fitness industry in Egypt.",
      images: ["/images/projects/rakiz-landing-light.png"],
  }
};

export default function RakizPage() {
  return <RakizClient />;
}
