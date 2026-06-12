import Navbar from "../components/Navbar";
import FeaturedProjects from "../components/ProjectCard";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>Our Projects</h1>
      </section>

      <ProjectCard />

      <Footer />
    </>
  );
}

export default Projects;