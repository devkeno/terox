import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';
import SeoHead from '@/components/SEO';

export default function Home() {

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Our Projects — Terox Solutions | AI, Web, and Marketing Innovation"
        description="Explore the latest projects by Terox Solutions — combining AI, web development, and digital marketing to deliver powerful, data-driven business solutions."
        url="https://terox-solutions.com/projects"
        image="https://terox-solutions.com/_assets/projects/terox-projects-preview.jpg"
        type="website"
        publishedTime="2025-11-10T10:00:00+01:00"
        modifiedTime="2025-11-10T10:00:00+01:00"
        author="Terox Solutions"
        canonical="https://terox-solutions.com/projects"
        noindex={false}
      />
      <Navigation />
      <Projects />
      <Footer />

    </div>
  );
}
