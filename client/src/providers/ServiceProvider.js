import React, { useState } from "react";
import axios from "axios";

export const ServiceContext = React.createContext();

export const ServiceConsumer = ServiceContext.Consumer;

const ServiceProvider = ({ children }) => {
    const [services, setServices ] = useState([]);

    const getAllServices = () => {
        axios.get("/api/services")
            .then( res => { setServices(res.data) })
            .catch( err => console.log(err))
    }

    const addService = (service) => {
        let data = new FormData()

        data.append('service_type', service.service_type)
        data.append('service_estimate', service.service_estimate)
        data.append('approx_time', service.approx_time)
        data.append('service_img', service.service_img)
        data.append('description', service.description)
        axios.post('/api/services', data )
            .then( res => { setServices([ ...services, res.data])})
            .catch( err => console.log(err) )
    }

    const updateService = ( id, service ) => {
        let data = new FormData()

        data.append('service_type', service.service_type)
        data.append('service_estimate', service.service_estimate)
        data.append('approx_time', service.approx_time)
        data.append('service_img', service.service_img)
        data.append('description', service.description)
        axios.put(`/api/services/${id}`, data)
            .then( res => {
                let newUpdatedService = services.map( s => {
                    if (s.id === id) {
                        return res.data
                    }
                    return s
                })
                setServices(newUpdatedService)
            })
            .catch( err => console.log(err) )
    }

    const deleteService = (id) => {
        axios.delete(`/api/services/${id}`)
            .then( res => {
                setServices(services.filter( s => s.id !== id ))
            })
            .catch( err => console.log(err) )
    }

    return (
        <ServiceContext.Provider value={{
            services,
            getAllServices,
            addService,
            updateService,
            deleteService
        }}>
            { children }
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;