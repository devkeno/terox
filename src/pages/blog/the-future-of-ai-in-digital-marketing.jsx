import { Navigation } from '@/components/Navigation';
import { BlogSingle } from '@/components/BlogSingle';
import { Footer } from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogSingle />
      <Footer />

    </div>
  );
}
