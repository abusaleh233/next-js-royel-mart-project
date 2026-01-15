import AboutSection from "@/components/Home/AboutSection";
import FAQSection from "@/components/Home/FAQSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import NewsletterSection from "@/components/Home/NewsletterSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <div>

      <HeroSection />

      <ServicesSection />

      <FeaturesSection />

      <TestimonialsSection />
      
      <FAQSection />
      
      <AboutSection />

      <NewsletterSection />

    </div>
  );
}
