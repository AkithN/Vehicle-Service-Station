import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex } from 'antd';
const actions = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
    <EllipsisOutlined key="ellipsis" />,
];
const Notification = () => {
    return (
        <Flex gap="middle" align="start" vertical>
            <Card actions={actions} style={{ minWidth: 300, }} >
                <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />} title="Card title" description={
                    <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                    </>
                } />
            </Card>
            <Card actions={actions} style={{ minWidth: 300, }} >
                <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />} title="Card title" description={
                    <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                    </>
                } />
            </Card>
            <Card actions={actions} style={{ minWidth: 300, }} >
                <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />} title="Card title" description={
                    <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                    </>
                } />
            </Card>
            <Card actions={actions} style={{ minWidth: 300, }} >
                <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />} title="Card title" description={
                    <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                    </>
                } />
            </Card>
        </Flex>
    );
};
export default Notification;