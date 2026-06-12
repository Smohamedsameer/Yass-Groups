import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>About YASS Real Estate</h1>
      </section>

      <section className="page-content">
        <h2>Who We Are</h2>

        <p>
          YASS Real Estate Builders & Land Promoters is dedicated
          to providing premium residential plots, villas and
          investment opportunities across Tamil Nadu.
        </p>

        <p>
          Our mission is to deliver trusted, legally verified,
          high-value properties for every customer.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;