import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedProjects from "../components/ProjectCard";

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ProjectCard />
     
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;