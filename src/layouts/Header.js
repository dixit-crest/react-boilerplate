import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import { userLogout } from "../store/actions";

function Header({ isAuthenticated = false }) {
  const { state } = useContext(ThemeContext);
  return (
    <>
      {/* <Navbar
        bg={state.darkMode ? "black" : "white"}
        expand="lg"
        variant={state.darkMode ? "dark" : "light"}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>React</Navbar.Brand>
          </Link>
          {isAuthenticated && (
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          )}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isAuthenticated && (
                <>
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <nav
        className={`navbar navbar-expand-lg ${
          state.darkMode ? "navbar-dark" : "navbar-light"
        } bg-${state.darkMode ? "black" : "white"}`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            React
          </Link>
          {isAuthenticated && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" href="#">
                      Home
                    </Link>
                  </li>
                </>
              )}

              {isAuthenticated && (
                <>
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </span>

                    <ul className="dropdown-menu">
                      <li>
                        <span
                          role="button"
                          onClick={userLogout}
                          className="dropdown-item"
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
