import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>Contact Us</h1>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
}

export default Contact;