import React, { useState } from 'react';
import './Serv.css';
import { Services_Data } from '../../assets/services_data';
import WhiteArrow from '../WhiteArrow';
import underline from '/src/assets/underline.png';

const Serv = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={underline} alt="underline" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc ? service.s_desc.slice(0, 55) + "..." : ""}</p>
                        <div className="services-readmore" onClick={() => setSelectedService(service)}>
                            <p>Read More</p>
                            <WhiteArrow />
                        </div>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div className="service-modal">
                    <div className="service-modal-content">
                        <span className="close-btn" onClick={() => setSelectedService(null)}>&times;</span>
                        <h2>{selectedService.s_name}</h2>
                        <p>{selectedService.s_desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Serv;
