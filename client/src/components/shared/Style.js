import { Container, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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

export const NavLinkActiveCheck = styled.link`
    
    #activeStyle {
        color: rgb(242, 199, 214);
        font-size: 2vw;
    
        &:hover {
            color: white;
        }
    }

    #unActiveStyle {
        color: white;
        font-size: 2vw;
        text-decoration: none'
    
        &:hover {
            color: rgb(242, 199, 214);
        }
    }

`

export const unActiveStyle = styled(NavLink)`
    color: white;
    font-size: 2vw;

    &:hover {
        color: rgb(242, 199, 214);
    } 
`

export const NavbarButtons = styled(Row)`
    display: inline-block;
    
    #nav-buttons {
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