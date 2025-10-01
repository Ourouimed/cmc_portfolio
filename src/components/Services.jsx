export default function Services() {
    const services = [
      {
        title: "UI/UX",
        icon: "assets/icons/icon1.svg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum perferendis commodi doloremque porro officiis!",
      },
      {
        title: "Web Design",
        icon: "assets/icons/icon2.svg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum perferendis commodi doloremque porro officiis!",
      },
      {
        title: "App Design",
        icon: "assets/icons/icon3.svg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum perferendis commodi doloremque porro officiis!",
      },
      {
        title: "Graphic Design",
        icon: "assets/icons/icon4.svg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis saepe, rem voluptatibus natus harum perferendis commodi doloremque porro officiis!",
      },
    ];
  
    return (
      <section id="services" className="p-5 text-center">
          <h1 className="fw-bold mb-3">Services</h1>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            blanditiis saepe, rem voluptatibus natus harum perferendis commodi
            doloremque porro officiis!
          </p>
  

          <div className="row g-4">
            {services.map(({ title, icon, description }) => (
              <div key={title} className="col-12 col-md-6 col-lg-3">
                <div
                  className="h-100 text-start rounded-4 p-4 shadow-sm d-flex flex-column align-items-start"
                  style={{ background: "#F6F6F6" }}
                >
                  <img
                    src={icon}
                    alt={title}
                    className="mb-3"
                    style={{ width: "48px", height: "48px" }}
                  />
                  <h4 className="fw-semibold mb-2">{title}</h4>
                  <p className="text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    );
  }
  