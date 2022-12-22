import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Mainnavbar } from "./Style";
const MainNavbar = () => {
    const lg = "lg"
    return (
        <>
            <Mainnavbar expand={lg}>
                <Container>
                    <Navbar.Brand>Aves Braids</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${lg}`}/>
                    <Navbar.Offcanvas
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Aves Braids
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/">About</Nav.Link>
                                <Nav.Link href="/">Pricing</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/">Contact</Nav.Link>
                                <NavDropdown
                                    title="Socials"
                                >
                                    <NavDropdown.Item>
                                        TikTok
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        Instagram
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        Facebook
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Mainnavbar>
        </>
    )
}

export default MainNavbar;