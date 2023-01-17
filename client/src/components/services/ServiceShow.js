import { useState } from "react";
import { Card, Row, Col, Image, Button, Modal, Accordion, Figure, useAccordionButton } from "react-bootstrap";

import ServiceForm from "./ServiceForm";
import { ServiceConsumer } from "../../providers/ServiceProvider";

const ServiceShow = ({ id, service_type, service_estimate, approx_time, service_img, description }) => {

    function CustomToggle({ children, eventKey}) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log("Custom Accordian used")
        );

        return(
            <Card onClick={decoratedOnClick}>
                <Card.Img src="https://res.cloudinary.com/dotykc1ws/image/upload/v1673738868/Default_pfp.svg_g1xxmx.png"/>
                <Card.ImgOverlay>
                    <Card.Title>{service_type}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
    return (
        // <Card>
        //     <Card.Header>{service_type}</Card.Header>
        //     <Card.Body>
        //         <Row>
        //             <Col>
        //                 <Image src={service_img}/>
        //             </Col>
        //         </Row>
        //         <Row>
        //             <h5>Starting at ${service_estimate}</h5>
        //             <h5>approximatly {approx_time} hours</h5>
        //             <p>{description}</p>
        //         </Row>

        //     </Card.Body>
        //     <Card.Footer>
        //         <Row>
        //             <Col>
        //                 <Button
        //                     onClick={ () => setEdit(true)}
        //                 >
        //                     edit
        //                 </Button>
        //             </Col>
        //             <Modal show={editing} onHide={ () => setEdit(false) }>
        //                 <Modal.Header closeButton>
        //                     <Modal.Title>Update {service_type}</Modal.Title>
        //                     <Modal.Body>
        //                         <ServiceForm 
        //                             setEdit={setEdit}
        //                             id={id}
        //                             service_type={service_type}
        //                             service_estimate={service_estimate}
        //                             approx_time={approx_time}
        //                             service_img={service_img}
        //                             description={description}
        //                         />
        //                     </Modal.Body>
        //                 </Modal.Header>
        //             </Modal>
        //             <Col>
        //                 <Button
        //                     onClick={ () => deleteService(id)}
        //                 >
        //                     Delete
        //                 </Button>
        //             </Col>

        //         </Row>
        //     </Card.Footer>
        // </Card>
        <Accordion defaultActiveKey="0" flush>
            
            <CustomToggle eventKey={id} />

            <Accordion.Collapse eventKey={id}>
                <Card>
                    <h1>{service_type}</h1>
                    <h3>${service_estimate}+</h3>
                    <h3>{approx_time}+</h3>
                    <h3>{description}</h3>
                </Card>
            </Accordion.Collapse>
        </Accordion>
    )
}

const ConnectedServiceShow = (props) => (
    <ServiceConsumer>
        { value => <ServiceShow {...value} {...props} />}
    </ServiceConsumer>
)

export default ConnectedServiceShow;