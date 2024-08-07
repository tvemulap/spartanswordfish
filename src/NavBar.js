import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar bg="transparent" data-bs-theme="dark" fixed="top" className="navbar">
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
      <Container>
        <Navbar.Brand href="/">spartanswordfish</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/aboutme">About Me</Nav.Link>
          <Nav.Link href="#" disabled>Resume</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/parallel">Parallel Match Stats</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" disabled>Movie Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#" disabled>Some web3 thing</NavDropdown.Item>
              <NavDropdown.Item href="#" disabled>Threat (TBA)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;