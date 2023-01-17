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
        axios.post('/api/services', service )
            .then( res => { setServices([ ...services, res.data])})
            .catch( err => console.log(err) )
    }

    const updateService = ( id, service ) => {
        
        axios.put(`/api/services/${id}`, service)
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
            deleteService,
            setServices: (services) => setServices(services)
        }}>
            { children }
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;