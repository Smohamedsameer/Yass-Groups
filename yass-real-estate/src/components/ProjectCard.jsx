const projects = [
  {
    name: "YASS Garden City",
    location: "Madurai",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  },

  {
    name: "YASS Green Valley",
    location: "Theni",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  },

  {
    name: "YASS Royal Enclave",
    location: "Dindigul",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
];

function ProjectCard() {
  return (
    <section className="projects-section">

      <h2 className="section-title">
        Featured Projects
      </h2>

      <div className="project-grid">

        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
          >
            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.location}</p>

              <button>
                View Details
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedProjects;