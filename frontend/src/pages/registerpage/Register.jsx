import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Radio, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import './register.css';

const { Option } = Select;

const provinceDistricts = {
  Central_Province: ["Kandy", "Matale", "Nuwara Eliya"],
  Eastern_Province: ["Ampara", "Batticaloa", "Trincomalee"],
  Northern_Province: ["Jaffna", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
  NorthCentral_Province: ["Anuradhapura", "Polonnaruwa"],
  NorthWestern_Province: ["Kurunegala", "Puttalama"],
  Sabaragamuwa_Province: ["Kegalle", "Rathnapura"],
  Southern_Province: ["Galle", "Hambanthota", "Matara"],
  Uva_Province: ["Badulla", "Monaragala"],
  Western_Province: ["Colombo", "Gampaha", "Kaluthara"]
};

function Register() {
  const [formData, setFormData] = useState({
    garageName: '',
    garageAddress: '',
    district: '',
    province: '',
    workNum: '',
    mobileNum: '',
    services: [],
    garageDescription: '',
    operatingHoursWeek: '',
    operatingHoursWeekend: '',
    publicHoliday: '',
    emergencyService: '',
    serviceScale: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });

  const [images, setImages] = useState({ image1: null, image2: null, image3: null });
  const [imagePreviews, setImagePreviews] = useState({
    image1: '',
    image2: '',
    image3: '',
  });

  const [districts, setDistricts] = useState([]);

  const handleImage = (info) => {
    const { name } = info.file;
    const file = info.file.originFileObj;
    if (file) {
      setImages((prevImages) => ({
        ...prevImages,
        [name]: file,
      }));
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        [name]: URL.createObjectURL(file),
      }));
    }
  };

  const onChangeHandler = (changedValues, allValues) => {
    setFormData(allValues);
    if (changedValues.province) {
      setDistricts(provinceDistricts[changedValues.province] || []);
    }
  };

  const onSubmitHandler = async () => {
    try {
      const formDataWithImages = new FormData();
      for (const key in formData) {
        if (key === 'services') {
          formDataWithImages.append(key, formData[key].join(','));
        } else {
          formDataWithImages.append(key, formData[key]);
        }
      }
      for (const key in images) {
        formDataWithImages.append(key, images[key]);
      }

      const response = await axios.post('http://localhost:5000/api/garages', formDataWithImages, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        alert('Garage registered successfully!');
        setFormData({
          garageName: '',
          garageAddress: '',
          district: '',
          province: '',
          workNum: '',
          mobileNum: '',
          services: [],
          garageDescription: '',
          operatingHoursWeek: '',
          operatingHoursWeekend: '',
          publicHoliday: '',
          emergencyService: '',
          serviceScale: '',
          website: '',
          facebook: '',
          instagram: '',
          twitter: '',
        });
        setImages({ image1: null, image2: null, image3: null });
        setImagePreviews({ image1: '', image2: '', image3: '' });
        setDistricts([]);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to register garage. Please try again.');
    }
  };

  return (
    <div className="register">
      <h1 className="text-black text-center pb-6 font-bold text-3xl pt-4">Register Service Station Form</h1>
      <Form
        onValuesChange={onChangeHandler}
        initialValues={formData}
        onFinish={onSubmitHandler}
        layout="vertical"
      >
        <Form.Item label="Name Of Service Center" name="garageName" rules={[{ required: true, message: 'Please enter the service center name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="garageAddress" rules={[{ required: true, message: 'Please enter the address' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Province" name="province" rules={[{ required: true, message: 'Please select a province' }]}>
          <Select placeholder="--Select--">
            {Object.keys(provinceDistricts).map(province => (
              <Option key={province} value={province}>{province}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="District" name="district" rules={[{ required: true, message: 'Please select a district' }]}>
          <Select placeholder="-- Select --">
            {districts.map(district => (
              <Option key={district} value={district}>{district}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Contact Number" name="workNum" rules={[{ required: true, message: 'Please enter a contact number' }]}>
          <Input placeholder="Work" />
        </Form.Item>
        <Form.Item label="Mobile Number" name="mobileNum" rules={[{ required: true, message: 'Please enter a contact number' }]}>
          <Input placeholder="Mobile" />
        </Form.Item>
        <div className='form-group'>
          <Form.Item label="Types Of Services" name="services" rules={[{ required: true, message: 'Please select service' }]}>
            <Checkbox.Group>
              <Checkbox value="maintenance">Maintenance Services</Checkbox>
              <Checkbox value="repair">Repair Services</Checkbox>
              <Checkbox value="diagnostic">Diagnostic Services</Checkbox>
              <Checkbox value="specialty">Specialty Services</Checkbox>
              <Checkbox value="cosmetic">Cosmetic Services</Checkbox>
              <Checkbox value="additional">Additional Services</Checkbox>
              <Checkbox value="convenience">Convenience Services</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="Operating Hours (Weekdays)" name="operatingHoursWeek" rules={[{ required: true, message: 'Please select time' }]}>
            <Radio.Group>
              <Radio value="8-5">8.00 AM - 5.00 PM</Radio>
              <Radio value="8-6">8.00 AM - 6.00 PM</Radio>
              <Radio value="8-10">8.00 AM - 10.00 PM</Radio>
              <Radio value="9-6">9.00 AM - 6.00 PM</Radio>
              <Radio value="9-10">9.00 AM - 10.00 PM</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Operating Hours (Weekends)" name="operatingHoursWeekend" rules={[{ required: true, message: 'Please select time' }]}>
            <Radio.Group>
              <Radio value="wclosed">Closed</Radio>
              <Radio value="w9-3">9.00 AM - 3.00 PM</Radio>
              <Radio value="w9-6">9.00 AM - 6.00 PM</Radio>
              <Radio value="w9-10">9.00 AM - 10.00 PM</Radio>
              <Radio value="w10-7">10.00 AM - 7.00 PM</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Do You Work On Public Holidays?" name="publicHoliday" rules={[{ required: true, message: 'Please select' }]}>
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Availability Of Emergency Or 24/7 Service" name="emergencyService" rules={[{ required: true, message: 'Please select' }]}>
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Service Station Scale" name="serviceScale" rules={[{ required: true, message: 'Please select scale of service station' }]}>
            <Radio.Group>
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item label="Website" name="website" rules={[{ required: true, message: 'Please enter the website URL' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Facebook" name="facebook">
          <Input />
        </Form.Item>
        <Form.Item label="Instagram" name="instagram">
          <Input />
        </Form.Item>
        <Form.Item label="Twitter" name="twitter">
          <Input />
        </Form.Item>
        <Form.Item label="Service Station Description" name="garageDescription" rules={[{ required: true, message: 'Please provide a description' }]}>
          <Input.TextArea />
        </Form.Item>
        <div className='row'>
          <div className='column'>
            <Form.Item label="Upload Image 1">
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
                onChange={handleImage}
                name="image1"
              >
                <Button icon={<UploadOutlined />}>Upload Image 1</Button>
              </Upload>
              {imagePreviews.image1 && <img src={imagePreviews.image1} alt="Preview" className="image-preview" />}
            </Form.Item>
          </div>
          <div className='column'>
            <Form.Item label="Upload Image 2">
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
                onChange={handleImage}
                name="image2"
              >
                <Button icon={<UploadOutlined />}>Upload Image 2</Button>
              </Upload>
              {imagePreviews.image2 && <img src={imagePreviews.image2} alt="Preview" className="image-preview" />}
            </Form.Item>
          </div>
          <div className='column'>
            <Form.Item label="Upload Image 3">
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
                onChange={handleImage}
                name="image3"
              >
                <Button icon={<UploadOutlined />}>Upload Image 3</Button>
              </Upload>
              {imagePreviews.image3 && <img src={imagePreviews.image3} alt="Preview" className="image-preview" />}
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
