import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Menu } from "@/components/sections/menu";
import { Locations } from "@/components/sections/locations";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Testimonials />
      <Footer />
    </main>
  );
}
