
import { Link, NavLink } from 'react-router-dom'

function Navbar({ fontSize, setFontSize }) {
  const increaseFont = () => {
    setFontSize((size) => Math.min(size + 2, 24))
  }

  const decreaseFont = () => {
    setFontSize((size) => Math.max(size - 2, 12))
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Test React App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={decreaseFont}
              disabled={fontSize <= 12}
              aria-label="Decrease font size"
            >
              A−
            </button>

            <span className="text-white small">
              {fontSize}px
            </span>

            <button
              className="btn btn-outline-light btn-sm"
              onClick={increaseFont}
              disabled={fontSize >= 24}
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
