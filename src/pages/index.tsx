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
import { MeetingBooking } from '@/components/MeetingBooking';
import SeoHead from '@/components/SEO';
export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
<SeoHead
  title="Digital Agency for Web, SEO & AI Solutions"
  description="Terox is a next-gen digital agency focused on high-performance websites, SEO, AI automation, and digital marketing. We help businesses scale with modern, data-driven strategies."
  url="https://terox-solutions.com/"
  image="https://terox-solutions.com/_assets/terox-logo.png"
  publishedTime="2025-11-08"
  modifiedTime="2025-11-08"
  author="Terox Team"
  canonical="https://terox-solutions.com/"
/>

          <Hero />
          <WhoWeAre />
          <Services />
          <WhyChooseUs />
          <TechStack />
          <Partners />
          <MeetingBooking />
          <Testimonials />
          <Blog />
          <ContactForm />
          <Footer />

    </div>
  );
}
