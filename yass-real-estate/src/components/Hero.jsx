import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>
          Premium Plots &
          <br />
          Real Estate Investments
        </h1>

        <p>
          Discover DTCP Approved Plots,
          Villas and Premium Investment
          Opportunities Across Tamil Nadu.
        </p>

        <button
          className="btn-gold"
          onClick={() => navigate("/projects")}
        >
          Explore Projects
        </button>

      </div>

    </section>
  );
}

export default Hero;