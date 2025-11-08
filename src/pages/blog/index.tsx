import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WhoWeAre } from '@/components/WhoWeAre';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TechStack } from '@/components/TechStack';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { BlogSingle } from '@/components/BlogSingle';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
    <BlogSingle />
          <Footer />

    </div>
  );
}
