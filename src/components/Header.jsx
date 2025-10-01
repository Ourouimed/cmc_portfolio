import { useEffect, useState } from "react";
import { links } from "../lib/navLinks";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`sticky-top z-3 bg-white ${isScrolled ? 'shadow border-b py-2' : 'py-4'}`} 
      style={{
        transition : '.3s ease-in-out'
      }}>
      <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" className="navbar-brand fw-bold">
            OurouiMed
          </a>

       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {links.map(({ name, url }, i) => (
                <li key={name} className="nav-item">
                  <a href={url} className="nav-link px-3">
                    {name}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  href="/"
                  download
                  className="btn dw-btn ms-lg-3"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      
    </header>
  );
}
