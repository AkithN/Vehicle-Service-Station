import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, DatePicker, TimePicker, Row, Col, Card } from 'antd';
import './InquiryForm.css';

const { TextArea } = Input;
const { Option } = Select;

const vehicleTypes = ['Car', 'Bike', 'Truck'];
const services = [
  'Maintenance Services',
  'Repair Services',
  'Diagnostic Services',
  'Specialty Services',
  'Cosmetic Services',
  'Additional Services',
  'Convenience Services'
];

const BookingForm = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div className="booking-container">
      <Form 
        form={form} 
        layout="horizontal" 
        onFinish={onFinish} 
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        className="booking-form"
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item 
              name="name" 
              label="Name" 
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item 
              name="phone" 
              label="Phone Number" 
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item 
              name="vehicleType" 
              label="Vehicle Type" 
              rules={[{ required: true, message: 'Please select your vehicle type!' }]}
            >
              <Select placeholder="Select a vehicle type">
                {vehicleTypes.map((type) => (
                  <Option key={type} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item 
              name="vehicleNumber" 
              label="Vehicle Number" 
              rules={[{ required: true, message: 'Please input your vehicle number!' }]}
            >
              <Input placeholder="Enter your vehicle number" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item 
          name="services" 
          label="Services" 
          labelCol={{ span: 3 }}  
          wrapperCol={{ span: 21 }}  
        >
          <Row gutter={[16, 16]}>
            {services.map((service) => (
              <Col span={12} key={service}>
                <Checkbox value={service}>
                  {service}
                </Checkbox>
              </Col>
            ))}
          </Row>
        </Form.Item>

        <Row gutter={[16, 24]}>
          <Col span={12}>
            <Form.Item 
              name="date" 
              label="Select Date" 
              rules={[{ required: true, message: 'Please select a date!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item 
              name="time" 
              label="Select Time" 
              rules={[{ required: true, message: 'Please select a time!' }]}
            >
              <TimePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item 
          name="additionalServices" 
          label="Additional Services"
          labelCol={{ span: 4 }} 
          wrapperCol={{ span: 20 }}
        >
          <TextArea rows={4} placeholder="Enter additional services" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24, offset: 0 }} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card title="Booking Summary" className="booking-card">
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Phone Number:</strong> {submittedData.phone}</p>
          <p><strong>Vehicle Type:</strong> {submittedData.vehicleType}</p>
          <p><strong>Vehicle Number:</strong> {submittedData.vehicleNumber}</p>
          <p><strong>Selected Services:</strong> {submittedData.services ? submittedData.services.join(', ') : 'None'}</p>
          <p><strong>Date:</strong> {submittedData.date ? submittedData.date.format('YYYY-MM-DD') : ''}</p>
          <p><strong>Time:</strong> {submittedData.time ? submittedData.time.format('HH:mm') : ''}</p>
          <p><strong>Additional Services:</strong> {submittedData.additionalServices}</p>
        </Card>
      )}
    </div>
  );
};

export default BookingForm;
