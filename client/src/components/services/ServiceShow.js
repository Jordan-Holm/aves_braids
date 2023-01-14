import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { ServiceConsumer } from "../../providers/ServiceProvider"

const ServiceShow = ({ id, service_type, service_estimate, approx_time, service_img, description, updateService, deleteService}) => {

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
                    <h5>Starting at ${service_estimate}</h5>
                    <h5>approximatly {approx_time} hours</h5>
                    <p>{description}</p>
                </Row>

            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={ () => deleteService(id)}
                >
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    )
}

const ConnectedServiceShow = (props) => (
    <ServiceConsumer>
        { value => <ServiceShow {...value} {...props} />}
    </ServiceConsumer>
)

export default ConnectedServiceShow;