import { Container, Row } from "react-bootstrap";
import { headerContainer } from "../shared/Style";

const HomeHeader = () => (
    <Container as={headerContainer}>
        <Row>
            <img src="https://res.cloudinary.com/dotykc1ws/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1671677768/Aves_Braids/320640126_1634489577007398_8925078366309237279_n_cs6jue.jpg"/>
        </Row>
    </Container>
)

export default HomeHeader;