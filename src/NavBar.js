import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
*/

function NavBar() {
  return (
    <Navbar data-bs-theme="dark" fixed="top" className="navbar" id="navbar">
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
      <Container>
        <Navbar.Brand href="/"><img src="/spartanswordfish.png" alt="spartanswordfish" height="25"></img></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/aboutme">About Me</Nav.Link>
          <Nav.Link href="#" disabled>Resume</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/parallel">Parallel Match Stats</NavDropdown.Item>
              <NavDropdown.Item href="/fantasyfootball">Fantasy Football</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" disabled>Movie Reviews</NavDropdown.Item>
              <NavDropdown.Item href="/token">web3 Token</NavDropdown.Item>
              <NavDropdown.Item href="#" disabled>Hidden Storii</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;