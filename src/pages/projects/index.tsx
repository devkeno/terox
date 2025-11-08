import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <Projects />
      <Footer />

    </div>
  );
}
