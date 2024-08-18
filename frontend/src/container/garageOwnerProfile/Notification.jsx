import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const actions = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
    <EllipsisOutlined key="ellipsis" />,
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
                    <Card actions={actions} style={{ minWidth: 300 }}>
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
