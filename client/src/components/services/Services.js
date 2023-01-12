import { useEffect, useState } from "react";
import { Container, Modal,} from "react-bootstrap";

import ServiceList from "./ServiceList";
import ServiceForm from "./ServiceForm";
import { ServiceConsumer } from "../../providers/ServiceProvider";

const Services = ({ services, getAllServices, addService }) => {
    const [adding, setAdd] = useState(false);

    useEffect( () => {
        getAllServices()
    }, [])

    return (
        <>
            <Container>
                <h1>
                    Services
                </h1>

                <button
                    onClick={ () => setAdd(true)}
                >
                    +
                </button>
                
                <Modal
                    show={adding}
                    onHide={ () => setAdd(false) }
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add A Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ServiceForm 
                            addService={addService}
                            setAdd={setAdd}
                        />
                    </Modal.Body>
                </Modal>

                <ServiceList 
                    services={services}
                />
            </Container>
        </>
    )
}


const ConnectedServices = ( props ) => (
    <ServiceConsumer>
        { value => <Services {...value} {...props} /> }
    </ServiceConsumer>
)

export default ConnectedServices;