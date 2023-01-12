import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";

import { ServiceConsumer } from "../../providers/ServiceProvider"

const ServiceForm = ( addService, setAdd, updateService ) => {
    const [ service, setService ] = useState({ service_type: '', service_estimate: 0, approx_time: 0, service_img: '', description: '' })
    const { id } = useParams();
    const location = useLocation();
    useEffect( () => {
        if (id) {
            const { service_type, service_estimate, approx_time, service_img, description } = location.state
            setService({  service_type, service_estimate, approx_time, service_img, description })
        }
    }, [] )

    const handleSubmit = (e) => {
        e.preventDefault()
        debugger
        if (id) {
            updateService(id, service)
        } else {
            addService(service)
            setAdd(false)
        }
        setService({ service_type: '', service_estimate: 0, approx_time: 0, service_img: '', description: '' })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Braid Name</Form.Label>
                <Form.Control
                    name="service_type"
                    value={service.service_type}
                    onChange={(e) => setService({ ...service, service_type: e.target.value })}
                />
                <Form.Label>Starting Cost | ${service.service_estimate}</Form.Label>
                <Form.Control 
                    name="service_estimate"
                    type="range"
                    min={50}
                    max={400}
                    value={service.service_estimate}
                    onChange={ (e) => setService({ ...service, service_estimate: e.target.value })}
                />
                <Form.Label>Approximate Time | {service.approx_time} hours</Form.Label>
                <Form.Control 
                    name="approx_time"
                    type="range"
                    min={1}
                    max={8}
                    value={service.approx_time}
                    onChange={ (e) => setService({ ...service, approx_time: e.target.value })}
                />
                <Form.Label>Description Of Braid</Form.Label>
                <Form.Control 
                    name="description"
                    type="text"
                    as="textarea"
                    size={3}
                    value={service.description}
                    onChange={ (e) => setService({ ...service, description: e.target.value})}
                />
                <Form.Label>Service Image</Form.Label>
                <Form.Control 
                    name="service_img"
                    value={service.service_img}
                    onChange={ (e) => setService({ ...service, service_img: e.target.value})}
                />
            </Form.Group>
            <Button 
                type="submit"
            >
                Submit
            </Button>
        </Form>
    )
}

const ConnectedServiceForm = (props) => (
    <ServiceConsumer>
        { value => <ServiceForm {...props} {...value} /> }
    </ServiceConsumer>
)

export default ConnectedServiceForm;