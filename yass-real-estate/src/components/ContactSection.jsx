function ContactSection() {
  return (
    <section className="contact-section">

      <h2>
        Contact Us
      </h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <textarea
          rows="5"
          placeholder="Message"
        ></textarea>

        <button>
          Send Enquiry
        </button>

      </form>

    </section>
  );
}

export default ContactSection;