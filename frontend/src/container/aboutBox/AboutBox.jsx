import React from 'react';
import { Row, Col } from 'antd';
import { LineChartOutlined, SmileOutlined, GlobalOutlined, CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import './aboutbox.css';

const statisticsData = [
  { icon: <LineChartOutlined />, value: "500+", label: "Projects Finished" },
  { icon: <SmileOutlined />, value: "400+", label: "Satisfied Customers" },
  { icon: <GlobalOutlined />, value: "10", label: "Countries Served" },
  { icon: <CalendarOutlined />, value: "14", label: "Years In Business" },
  { icon: <TeamOutlined />, value: "70+", label: "Employees" },
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

