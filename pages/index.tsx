import { About } from '../components/About';
import { NavBar } from '../components/Navbar';
import { Timeline } from '../components/Timeline';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="space-y-14 lg:space-y-24">
          <div id="about">
            <About />
          </div>
        </div>
        <Timeline />
      </main>
    </>
  );
}
