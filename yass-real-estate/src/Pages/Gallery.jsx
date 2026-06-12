import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1560185008-b033106af5c3",
  ];

  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>Gallery</h1>
      </section>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="property"
            className="gallery-image"
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Gallery;