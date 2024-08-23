import React, { useEffect, useState } from 'react';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const actions = [
    <CheckCircleOutlined key="read" />,
    <DeleteOutlined key="delete" />,
];

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

    return (
        <Row gutter={[18, 18]}>
            {notifications.map((notification) => (
                <Col span={7} key={notification.inquiry_id}>
                    <Card actions={actions} style={{ minWidth: 300 , marginLeft: '15px'}}>
                        <Card.Meta
                            title={notification.subject || 'No Subject'}
                            description={<p>{notification.message}</p>}
                        />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Notification;
