import { Navigation } from '@/components/Navigation';
import {BlogSingle3 } from '@/components/BlogSingle3';
import { Footer } from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogSingle3 />
      <Footer />

    </div>
  );
}
