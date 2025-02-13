import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import ProductShowcase from "./components/ProductShowcase";
import Blog from "./components/Blog";
import TestimonialsSection from "./components/TestimonialSection";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import SocialFeed from "./components/SocialFeed";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <ProductShowcase />
      <Blog />
      <TestimonialsSection />
      <ContactUs />
      <Faq />
      <SocialFeed />
    </main>
  );
}

