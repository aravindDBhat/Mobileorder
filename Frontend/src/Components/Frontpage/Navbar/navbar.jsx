import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Input from "../../Sign-In-Up/InputField/input";
function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg   bg-primary">
      <div className=" ms-5 ps-5 container-fluid">
        <a className="navbar-brand" href="#">
          <b>MobileOrder</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
          </ul>
          <div className="d-flex navbar-text me-5 pe-5 ">
            <input type="text" placeholder="Search" />
            <button className="ms-3 btn btn-outline-light" id="search">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbars;
