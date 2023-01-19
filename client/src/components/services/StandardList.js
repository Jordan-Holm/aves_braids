import { useState } from "react";
import { Button, Container, Table, Modal } from "react-bootstrap";

import ServiceForm from "./ServiceForm";
import { ServiceConsumer } from "../../providers/ServiceProvider";


const StandardList = ({ id, service_type, service_estimate, approx_time, service_img, description, services, deleteService }) => {
    const [showing, setShow] = useState(false);
    const [editing, setEdit] = useState(false, 0);
    const [editId, setEditId] = useState();

    return (
        <Container>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Style Name</th>
                        <th>Starting Price</th>
                        <th>Expected Time</th>
                        <th>Contact To Book</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { services.map( s => 
                        <>
                            <tr key={s.id} >
                                <td>{s.service_type}</td>
                                <td>${s.service_estimate}+</td>
                                <td>{s.approx_time} Hours</td>
                                <td>
                                    <Button
                                        href="/contact"
                                    >
                                        Schedule
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={ () => setEdit(true, s.id)}

                                    >
                                        edit
                                    </Button>
                                </td>
                                <td>
                                    <Button onClick={() => deleteService(s.id)}>
                                        Delete
                                    </Button>
                                </td>

                            </tr>
                        </>
                    )}
                </tbody>
            </Table>
            <Modal show={editing} onHide={ () => setEdit(false) }>
                <Modal.Header closeButton>
                    <Modal.Title>Update {service_type}</Modal.Title>
                    <Modal.Body>
                        <ServiceForm 
                            setEdit={setEdit}
                            id={editId}
                            service_type={service_type}
                            service_estimate={service_estimate}
                            approx_time={approx_time}
                            service_img={service_img}
                            description={description}
                        />
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </Container>
    )
}

const ConnectedStandardList = (props) => (
    <ServiceConsumer>
        { value => <StandardList {...props} {...value} /> }
    </ServiceConsumer>
)

export default ConnectedStandardList;