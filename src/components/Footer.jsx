import { links } from "../lib/navLinks";

export default function Footer() {
  return (
    <footer className="mt-5">
      {/* Top Footer */}
      <div className="bg-light p-5 text-center">
        <h3 className="mb-4 fw-bold">Ourouimed</h3>

        {/* Footer Nav */}
        <nav>
          <ul className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4 list-unstyled">
            {links.map(({ name, url }) => (
              <li key={name}>
                <a href={url} className="text-decoration-none text-dark px-2 fw-medium">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-dark p-4 text-center text-white small">
        &copy; {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--main-color)" }}>Ourouimed</span> — All Rights Reserved, Inc.
      </div>
    </footer>
  );
}
