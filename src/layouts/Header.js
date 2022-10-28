import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "../contexts/ThemeProvider";

function Header({ isAuthenticated = false }) {
  const { state } = useContext(ThemeContext);
  return (
    <Navbar
      bg={state.darkMode ? "black" : "white"}
      expand="lg"
      variant={state.darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand>React</Navbar.Brand>
        {isAuthenticated && <Navbar.Toggle aria-controls="basic-navbar-nav" />}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated && (
              <>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
