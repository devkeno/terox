import { Navigation } from '@/components/Navigation';
import {BlogSingle2 } from '@/components/BlogSingle2';
import { Footer } from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogSingle2 />
      <Footer />

    </div>
  );
}
