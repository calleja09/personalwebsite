import { Link } from "react-scroll";
import logo from "../assets/logo192.png"

const Navbar = () => {
    return (
        <>
<nav className="navbar sticky-top navbar-expand-lg navbar-dark">
  <div className="container-fluid">
  <Link activeClass="active" smooth spy to="/" className="navbar-brand ms-2">
          <img alt="brand" src={logo} className="brand" width="75"/>
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link activeClass="active" smooth={true} spy  duration={1} to="home" className="nav-link p-3 ms-auto">Home</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" smooth={true} spy duration={1} hashSpy={true} to="portfolio" className="nav-link p-3 ms-auto">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link activeClass="active" smooth={true} spy duration={1} hashSpy={true} to="about" className="nav-link p-3 ms-auto">About</Link>
        </li>
        <li className="nav-item">
          <Link activeClass="active" smooth={true} spy duration={1} hashSpy={true} to="contact" className="nav-link p-3 ms-auto">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;