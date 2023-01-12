import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const headerContainer = styled(Container)`
    background-color: #faefdc;
    width: auto;
    
    img {
        
    }
`

export const Mainnavbar = styled(Navbar)`
    position: sticky;
    top: 0px;
    background-color: #dbcced;
`

export const NavbarIcon = styled.i`
    @media (max-width: 1439px) {
        display: none;
    }
`