import { Container, Nav, Navbar, NavDropdown, Offcanvas, Row, Col } from "react-bootstrap";
import { Mainnavbar, BrandNavbarRow, NavbarButtons } from "./Style";
const MainNavbar = () => {
    const size = "lg";
    
    return (
        <>
            <Mainnavbar expand={size}>
                <Container>
                    <Col>
                        <BrandNavbarRow>
                            <h1>Aves Braids</h1>
                        </BrandNavbarRow>
                        <NavbarButtons>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${size}`}/>
                            <Navbar.Offcanvas
                                placement="end"
                            >
                                <Offcanvas.Body>
                                    <Nav id="nav-buttons">
                                        <Nav.Link href="/" id="nav-button">
                                            <p>Home</p>
                                        </Nav.Link>
                                        <Nav.Link href="/services" id="nav-button">
                                            <p>Services</p>
                                        </Nav.Link>
                                        <Nav.Link href="/aboutme" id="nav-button">
                                            <p>About</p>
                                        </Nav.Link>
                                        <Nav.Link href="/" id="nav-button">
                                            <p>Contact</p>
                                        </Nav.Link>
                                        <NavDropdown 
                                            title="Socials"
                                            id="nav-dropdown"
                                        >
                                            <Nav.Link 
                                                href="https://www.instagram.com/avesbraids00/?hl=en"
                                            >
                                                Instagram
                                            </Nav.Link>
                                            <Nav.Link 
                                                href="https://www.instagram.com/avesbraids00/?hl=en"
                                            >
                                                TikTok
                                            </Nav.Link>
                                            <Nav.Link 
                                                href="https://www.facebook.com/avesbraids00"
                                            >
                                                Facebook
                                            </Nav.Link>
                                        </NavDropdown>
                                    </Nav>
                                    
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </NavbarButtons>
                    </Col>
                </Container>
            </Mainnavbar>
        </>
    )
}

export default MainNavbar;