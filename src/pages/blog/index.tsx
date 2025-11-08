import { Navigation } from '@/components/Navigation';
import { BlogLanding } from '@/components/BlogLanding';
import { Footer } from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogLanding />
      <Footer />

    </div>
  );
}
