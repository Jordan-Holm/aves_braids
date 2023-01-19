import { Container, Nav, Navbar, NavDropdown, Offcanvas, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Mainnavbar, NavbarButtons  } from "./Style";
const MainNavbar = () => {
    const size = "lg";

    let activeStyle = {
        textDecoration: "underline",
        color: "rgb(242, 199, 214)",
    }

    let unActiveStyle = {
        textDecoration: "none",
    }
    
    return (
        <>
            <Mainnavbar expand={size}>
                <Container>
                    <Col>
                        <Row>
                            <h1>Aves Braids</h1>
                        </Row>
                        <NavbarButtons>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${size}`}/>
                            <Navbar.Offcanvas
                                placement="end"
                            >
                                <Offcanvas.Body>
                                    <Nav id="nav-buttons">
                                        <Nav.Link
                                            href="/home"
                                            id="nav-buttons"
                                        >
                                            Home
                                        </Nav.Link>
                                        <Nav.Link
                                            href="/services"
                                            id="nav-buttons"
                                        >
                                            Services
                                        </Nav.Link>
                                        <Nav.Link
                                            href="/about"
                                            id="nav-buttons"
                                        >
                                            About
                                        </Nav.Link>
                                        <Nav.Link
                                            href="/contact"
                                            id="nav-buttons"
                                        >
                                            Contact
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