import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const headerContainer = styled(Container)`
    background-color: #faefdc;
    width: auto;
    
    @media (max-width: 1439px) {
        img {
            

        }
    }
`

export const Mainnavbar = styled(Navbar)`
    position: sticky;
    top: 0px;
    background-color: #dbcced;
`