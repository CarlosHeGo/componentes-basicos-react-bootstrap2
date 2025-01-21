import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function Navegacion({ categorias, directores }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logo.jpeg"
            alt="Logo del cine"
            className="img-fluid"
            width={40}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown" menuVariant="dark">
              {categorias.map((categoria, index) => (
                <NavDropdown.Item key={index} href={`#categoria-${categoria}`}>
                  {categoria}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Directores" id="basic-nav-dropdown" menuVariant="dark">
              {directores.map((director, index) => (
                <NavDropdown.Item key={index} href={`#director-${director}`}>
                  {director}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;