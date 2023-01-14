import { Container, Row, Col } from "react-bootstrap";

import { ServiceConsumer } from "../../providers/ServiceProvider";
import ServiceShow from "./ServiceShow";

const ServiceList = ({ services }) => (
    <Container>
        <Row xs="2" sm="3" md="4">
            { services.map( s =>
                <Col key={s.id}>
                    <ServiceShow 
                        {...s}
                    />
                </Col>    
            )}
        </Row>
    </Container>
)

const ConnectedServiceList = (props) => (
    <ServiceConsumer>
        { value => <ServiceList {...props} {...value} /> }
    </ServiceConsumer>
)

export default ConnectedServiceList;