import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/Navbar';
import { Projects } from '../components/Projects';
import Spotify from '../components/Spotify';
import { Timeline } from '../components/Timeline';
import useSWR from 'swr';
import Fetcher from '../lib/fetcher';

export default function Home() {
  const { data } = useSWR('/api/spotify', Fetcher);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="space-y-14 lg:space-y-24">
          <div id="about" className="relative">
            <About spotify={data} />
            <div className="absolute mx-4 my-8 right-1">
              <Spotify data={data} />
            </div>
          </div>

          <Timeline />
          <div id="projects">
            <Projects
              projects={{
                name: 'diggit',
                description:
                  'Diggit is a simple social media app inspired by reddit  actually it is a reddit clone.',
                image:
                  'https://res.cloudinary.com/dkllkhj3z/image/upload/v1626988817/Capture_ktvn2e.jpg',
                url: 'https://diggit.vercel.app/register',
              }}
            />
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
