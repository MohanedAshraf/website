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
            <div className="absolute sm:left-1/3 xs:left-1/4 xs:mt-4 md:left-1/3 lg:left-auto lg:mx-4 lg:my-8 lg:right-1 place-self-center">
              <Spotify data={data} />
            </div>
          </div>

          <div id="projects">
            <Projects />
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
