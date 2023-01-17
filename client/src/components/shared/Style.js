import { Container, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";

export const headerContainer = styled(Container)`
    width: auto;
    
    img {
        
    }
`

export const Mainnavbar = styled(Navbar)`
    position: static;
    top: 0px;
    background-color: #6B6260;
    text-align: center;

    h1 {
        font-family: 'Dancing Script', cursive;
        font-size: 8vw;
        color: rgb(242, 199, 214);
    }
`

export const BrandNavbarRow = styled(Row)`
    
`

export const NavbarButtons = styled(Row)`
    display: inline-block;
    p {
        color: white;
        font-size: 2vw;

        &:hover {
            color: rgb(242, 199, 214);
        }
    }

    #nav-dropdown {
        color: white;
        font-size: 2vw;

        &:hover {
            color: rgb(242, 199, 214);
        }
    }

    @media (max-width: 890px) {

        #nav-dropdown {
            color: black !important;
        }
    }
`