import React from 'react';
import { Row, Col } from 'antd';
import { CarOutlined, SmileOutlined, MoneyCollectOutlined, CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import './aboutbox.css';

const statisticsData = [
  { icon: <SmileOutlined />, value: "400+", label: "Satisfied Customers" },
  { icon: <CarOutlined />, value: "100+", label: "Registered Garages" },
  { icon: <MoneyCollectOutlined />, value: "10", label: "Income Leads in LKR" },
  { icon: <CalendarOutlined />, value: "4", label: "Years Of Trust" },
  { icon: <TeamOutlined />, value: "70+", label: "Partners" },
];

const AboutBox = () => {
  return (
    <section className="statistics-section">
      <Row gutter={[16, 16]} justify="center">
        {statisticsData.map((stat, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={4} className="statistics-box">
            <div className="icon">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default AboutBox;

