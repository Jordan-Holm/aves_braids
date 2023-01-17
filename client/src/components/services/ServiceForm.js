import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";

import { ServiceConsumer } from "../../providers/ServiceProvider"

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagesExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImagesExifOrientation, FilePondPluginImagePreview);


const ServiceForm = ({ addService, setAdd, updateService, setEdit, id, service_type, service_estimate, approx_time, service_img, description }) => {
    const [ service, setService ] = useState({ service_type: '', service_estimate: 0, approx_time: 0, service_img: null, description: '' })
    const [file, setFile] = useState();

    useEffect( () => { 
        if (id) {
            setService({  service_type, service_estimate, approx_time, service_img, description })
        }
    }, [] )

    const handleFileUpdate = (fileItems) => {
        if (fileItems.length !== 0) {
            setFile(fileItems)
            setService({ ...service, service_img: fileItems[0].file })
        }
    }

    const handleFileRemoved = ( e, file ) => {
        setFile(null)
        setService({ ...service, service_img: null })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id) {
            updateService(id, service)
            setEdit(false)
            setService({ ...service, image: null})
        } else {
            addService(service)
            setAdd(false)
            setService({ ...service, image: null })
        }
        setService({ service_type: '', service_estimate: 0, approx_time: 0, service_img: '', description: '' })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Service Image</Form.Label>
                <FilePond 
                    files={file}
                    onupdatefiles={handleFileUpdate}
                    onremovefile={handleFileRemoved}
                    allowMultiple={3}
                    name="image"
                    labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
                />
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
                    step={25}
                    min={50}
                    max={500}
                    defaultValue={50}
                    value={service.service_estimate}
                    onChange={ (e) => setService({ ...service, service_estimate: e.target.value })}
                />
                <Form.Label>Approximate Time | {service.approx_time} hours</Form.Label>
                <Form.Control 
                    name="approx_time"
                    type="range"
                    min={1}
                    max={8}
                    defaultValue={1}
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
        { value => <ServiceForm {...value} {...props} /> }
    </ServiceConsumer>
)

export default ConnectedServiceForm;