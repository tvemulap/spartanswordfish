import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" fixed="top">
    <Container>
      <Navbar.Brand href="/">spartanswordfish</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/aboutme">About Me</Nav.Link>
        <Nav.Link href="/aboutme">Resume</Nav.Link>
        <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/parallel">Parallel Match Stats</NavDropdown.Item>
            <NavDropdown.Item href="#">One Sentence Movie Reviews</NavDropdown.Item>
            <NavDropdown.Item href="#">Some web3 thing</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" disabled>Threat (TBA)</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;