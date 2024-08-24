import React, { useEffect, useState } from 'react';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/inquiries')
            .then(response => {
                setNotifications(response.data);
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            });
    }, []);

    const handleRead = (inquiryId) => {
        console.log(`Mark inquiry ${inquiryId} as read`);
    };

    const handleDelete = (inquiryId) => {
        console.log(`Delete inquiry ${inquiryId}`);
    };

    return (
        <Row gutter={[16, 16]}>
            {notifications.map((notification) => (
                <Col 
                    xs={24} 
                    sm={12} 
                    md={8} 
                    lg={6} 
                    xl={6} 
                    key={notification.id}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Card
                        actions={[
                            <CheckCircleOutlined key="read" onClick={() => handleRead(notification.id)} />,
                            <DeleteOutlined key="delete" onClick={() => handleDelete(notification.id)} />,
                        ]}
                        style={{ minWidth: 300, maxWidth: '100%' }}
                    >
                        <Card.Meta
                            title={notification.name || 'No Name'}
                            description={
                                <>
                                    <p><strong>Phone:</strong> {notification.phoneNumber}</p>
                                    <p><strong>Vehicle Type:</strong> {notification.vehicleType}</p>
                                    <p><strong>Vehicle Number:</strong> {notification.vehicleNumber}</p>
                                    <p><strong>Services:</strong> {notification.services}</p>
                                    <p><strong>Date:</strong> {notification.selectDate}</p>
                                    <p><strong>Time:</strong> {notification.selectTime}</p>
                                    <p><strong>Additional Services:</strong> {notification.additionalServices}</p>
                                </>
                            }
                        />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Notification;
