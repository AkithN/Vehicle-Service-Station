import React, { useState } from "react";
import './services.css';

function Services() {
    const introMessage = `At CarCraft, we provide an integrated platform that caters to both vehicle owners and service station owners, ensuring a seamless and efficient experience for all users.`;

    const vehicleOwnersServices = `
        <strong>Services for Vehicle Owners</strong>
        Discover Trusted Service Providers

        <strong>Browse Service Stations:</strong> Easily browse a wide network of verified service stations.<br>
        <strong>Advanced Filters:</strong> Use filters to find service stations by location, service types, availability, and more.<br>
        <strong>Service Details:</strong> View detailed profiles of service stations, including services offered, pricing, and customer reviews.
        Convenient Vehicle Maintenance and Repair<br>

        <strong>Schedule Appointments:</strong> Book appointments online at your convenience.<br>
        <strong>Send Inquiries:</strong> Directly send inquiries to service stations for specific services or quotes.<br>
        <strong>Profile Management:</strong> Manage your profile, view your service history, and track ongoing service requests.
        Customer Support<br>

        <strong>24/7 Assistance:</strong> Access round-the-clock customer support for any queries or issues.<br>
        <strong>Feedback and Reviews:</strong> Provide feedback and reviews on the services received to help others make informed decisions.<br>
    `;

    const serviceStationOwnersServices = `
        <strong>Services for Service Station Owners</strong>
        Expand Your Reach<br>
        <strong>Inquiry Management:</strong> View and respond to inquiries from vehicle owners quickly and efficiently.<br>
        <strong>Appointment Scheduling:</strong> Manage and schedule appointments directly through the platform.<br>
        <strong>Subscription Plans:</strong> Choose from various subscription plans that suit your business needs and enhance your profile’s visibility.
        Grow Your Customer Base<br>

        <strong>Customer Reviews:</strong> Gain credibility through genuine reviews from vehicle owners.<br>
        <strong>Promotions and Offers:</strong> Promote special offers and discounts to attract more customers.<br>
        <strong>Analytics:</strong> Access insights and analytics to understand customer behavior and improve your services.
        Seamless Payment Solutions<br>

        <strong>Subscription Payments:</strong> Easily manage your subscription payments through a secure payment gateway.<br>
        <strong>Service Payments:</strong> Offer various payment options to your customers for hassle-free transactions.<br>
    `;

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleReadMoreClick = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="font-bold text-3xl pb-4">Our Services</h1>
                        <p className="section-subtitle pb-4">{introMessage}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 margin-top-20">
                        <div className="team-item">
                            <h3>Services for Vehicle Owners</h3>
                            <div className="team-content">
                                <p className="section-subtitle" dangerouslySetInnerHTML={{__html: vehicleOwnersServices.slice(0, 400) + '...'}}></p>
                                <button className="btn-read-more" onClick={() => handleReadMoreClick(vehicleOwnersServices)}>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 margin-top-20">
                        <div className="team-item">
                            <h3>Services for Service Station Owners</h3>
                            <div className="team-content">
                                <p className="section-subtitle" dangerouslySetInnerHTML={{__html: serviceStationOwnersServices.slice(0, 400) + '...'}}></p>
                                <button className="btn-read-more" onClick={() => handleReadMoreClick(serviceStationOwnersServices)}>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="popup-message">
                    <div className="popup-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <div dangerouslySetInnerHTML={{__html: modalContent}}></div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Services;
