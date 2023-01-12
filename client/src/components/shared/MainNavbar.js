import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { BsHouseFill, BsBagDashFill, BsQuestionCircleFill, BsFillChatDotsFill, BsArrowUpRightCircleFill } from "react-icons/bs"
import { Mainnavbar, NavbarIcon } from "./Style";
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
                                <Nav.Link href="/">
                                    <BsHouseFill as={NavbarIcon}/>
                                    <p>home</p>
                                </Nav.Link>
                                <Nav.Link href="/services">
                                    <BsBagDashFill />
                                    <p>services</p>
                                </Nav.Link>
                                <Nav.Link href="/aboutme">
                                    <BsQuestionCircleFill />
                                    <p>About</p>
                                </Nav.Link>
                                <Nav.Link href="/">
                                    <BsFillChatDotsFill />
                                    <p>Contact</p>
                                </Nav.Link>
                            </Nav>
                            <Nav>
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