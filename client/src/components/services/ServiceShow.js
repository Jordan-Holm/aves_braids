import { Card, Row, Col, Image } from "react-bootstrap";
import { ServiceConsumer } from "../../providers/ServiceProvider"

const ServiceShow = ({ service_type, service_estimate, approx_time, service_img, description}) => {

    return (
        <Card>
            <Card.Header>{service_type}</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Image src={service_img}/>
                    </Col>
                </Row>
                <Row>
                    <h3>Starting at {service_estimate}</h3>
                    <h3>approximatly {approx_time} hours</h3>
                    <p>{description}</p>
                </Row>

            </Card.Body>
        </Card>
    )
}

const ConnectedServiceShow = (props) => (
    <ServiceConsumer>
        { value => <ServiceShow {...value} {...props} />}
    </ServiceConsumer>
)

export default ConnectedServiceShow;