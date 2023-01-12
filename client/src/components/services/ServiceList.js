import { Container, Row, Col } from "react-bootstrap";

import ServiceShow from "./ServiceShow";

const ServiceList = ({ services }) => (
    <Container>
        <Row>
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

export default ServiceList;