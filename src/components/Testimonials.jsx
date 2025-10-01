import React, { useState } from "react";

export default function TeamTestimonials() {
  const testimonials = [
    {
      name: "Medamine",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: "assets/testimonials/testi1.png",
    },
    {
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: "assets/testimonials/testi1.png",
    },
    {
      name: "Jane Smith",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: "assets/testimonials/testi1.png",
    },
    {
      name: "Sarah Lee",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: "assets/testimonials/testi1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const { name, image, message } = testimonials[currentIndex];

  return (
    <section id="testimonials" className="p-5">
      <div className="container">
        <h1 className="text-center mb-3">Testimonials</h1>
        <p className="mb-5 text-center text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum
          perferendis commodi doloremque porro officiis!
        </p>

        {/* Testimonial Card */}
        <div
          className="row align-items-center justify-content-center mx-auto p-4 shadow-sm rounded-4"
          style={{ backgroundColor: "#F8F8F8", maxWidth: "900px" }}
        >
          <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <img
              src={image}
              className="rounded-circle img-fluid"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
              alt={name}
            />
          </div>

          <div className="col-12 col-md-7">
            <p className="fs-5 mb-3">{message}</p>
            <h5 className="fw-bold mb-0">Name</h5>
            <span className="text-muted">{name}</span>
          </div>
        </div>

        <ul className="d-flex align-items-center justify-content-center mt-4 gap-2 list-unstyled">
          {testimonials.map((_, i) => (
            <li key={i}>
              <button
                className="btn p-0"
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: currentIndex === i ? "var(--main-color)" : "#D9D9D9",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setCurrentIndex(i)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
