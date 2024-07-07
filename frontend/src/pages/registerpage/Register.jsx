import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Radio, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './register.css';

const { Option } = Select;

const provinceDistricts = {
  central: ["Kandy", "Matale", "Nuwara Eliya"],
  eastern: ["Ampara", "Batticaloa", "Trincomalee"],
  northern: ["Jaffna", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
  northCentral: ["Anuradhapura", "Polonnaruwa"],
  northWestern: ["Kurunegala", "Puttalama"],
  sabaragamuwa: ["Kegalle", "Rathnapura"],
  southern: ["Galle", "Hambanthota", "Matara"],
  uva: ["Badulla", "Monaragala"],
  western: ["Colombo", "Gampaha", "Kaluthara"]
};

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    district: '',
    province: '',
    contact: '',
    contact1: '',
    services: [],
    description: '',
    time: '',
    wtime: '',
    ptime: '',
    etime: '',
    scale: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });

  const [image, setImages] = useState({ image1: '', image2: '', image3: '' });
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

  const onSubmitHandler = async (values) => {
    try {
      const formDataWithImages = new FormData();
      for (const key in values) {
        if (key === 'services') {
          formDataWithImages.append(key, values[key].join(','));
        } else {
          formDataWithImages.append(key, values[key]);
        }
      }
      for (const key in image) {
        formDataWithImages.append(key, image[key]);
      }

      setFormData({
        username: '',
        address: '',
        district: '',
        province: '',
        contact: '',
        contact1: '',
        services: [],
        description: '',
        time: '',
        wtime: '',
        ptime: '',
        etime: '',
        scale: '',
        website: '',
        facebook: '',
        instagram: '',
        twitter: '',
      });
      setImages({ image1: '', image2: '', image3: '' });
      setImagePreviews({ image1: '', image2: '', image3: '' });
      setDistricts([]);
    } catch (error) {
      console.error('Error submitting the form:', error);
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
        <Form.Item label="Name Of Service Center" name="username" rules={[{ required: true, message: 'Please enter the service center name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter the address' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Province" name="province" rules={[{ required: true, message: 'Please select a province' }]}>
          <Select placeholder="-- Select --">
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
        <Form.Item label="Contact Number" name="contact" rules={[{ required: true, message: 'Please enter a contact number' }]}>
          <Input placeholder="Work" />
        </Form.Item>
        <Form.Item label="Mobile Number" name="contact1" rules={[{ required: true, message: 'Please enter a contact number' }]}>
          <Input placeholder="Mobile" />
        </Form.Item>
        <div className='form-group'>
          <Form.Item label="Types Of Services" name="services" rules={[{ required: true, message: 'Please Select Service' }]}>
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
          <Form.Item label="Operating Hours (Weekdays)" name="time" rules={[{ required: true, message: 'Please Select Time' }]}>
            <Radio.Group>
              <Radio value="8-5">8.00 AM - 5.00 PM</Radio>
              <Radio value="8-6">8.00 AM - 6.00 PM</Radio>
              <Radio value="8-10">8.00 AM - 10.00 PM</Radio>
              <Radio value="9-6">9.00 AM - 6.00 PM</Radio>
              <Radio value="9-10">9.00 AM - 10.00 PM</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Operating Hours (Weekends)" name="wtime" rules={[{ required: true, message: 'Please Select Time' }]}>
            <Radio.Group>
              <Radio value="wclosed">Closed</Radio>
              <Radio value="w9-3">9.00 AM - 3.00 PM</Radio>
              <Radio value="w9-6">9.00 AM - 6.00 PM</Radio>
              <Radio value="w9-10">9.00 AM - 10.00 PM</Radio>
              <Radio value="w10-7">10.00 AM - 7.00 PM</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Do You Work On Public Holidays?" name="ptime" rules={[{ required: true, message: 'Please Select ' }]}>
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Availability Of Emergency Or 24/7 Service" name="etime" rules={[{ required: true, message: 'Please Select ' }]}>
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Service Station Scale" name="scale" rules={[{ required: true, message: 'Please Select Scale Of Service Station' }]}>
            <Radio.Group>
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item label="Website" name="website" rules={[{ required: true, message: 'Please enter a Website Link' }]}>
          <Input placeholder="Website Link"/>
        </Form.Item>
        <Form.Item label="Facebook" name="facebook" rules={[{ required: true, message: 'Please enter a Facebook Link' }]}>
          <Input placeholder="Facebook Link"/>
        </Form.Item>
        <Form.Item label="Instagram" name="instagram" rules={[{ required: true, message: 'Please enter a Instagram Link' }]}>
          <Input placeholder="Instagram Link"/>
        </Form.Item>
        <Form.Item label="Twitter" name="twitter" rules={[{ required: true, message: 'Please enter a Twitter Link' }]}>
          <Input placeholder="Twitter Link"/>
        </Form.Item>
        <Form.Item label="Description Of Service Station" name="description" rules={[{ required: true, message: 'Please enter a Description' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Image 1">
          <Upload
            name="image1"
            listType="picture"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleImage}
          >
            <Button icon={<UploadOutlined />}>Upload Image 1</Button>
          </Upload>
          {imagePreviews.image1 && <img src={imagePreviews.image1} alt="Image 1 Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        </Form.Item>
        <Form.Item label="Image 2" rules={[{ required: true, message: 'Please Upload A Service Station Picture' }]}>
          <Upload
            name="image2"
            listType="picture"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleImage}
          >
            <Button icon={<UploadOutlined />}>Upload Image 2</Button>
          </Upload>
          {imagePreviews.image2 && <img src={imagePreviews.image2} alt="Image 2 Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        </Form.Item>
        <Form.Item label="Image 3">
          <Upload
            name="image3"
            listType="picture"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleImage}
          >
            <Button icon={<UploadOutlined />}>Upload Image 3</Button>
          </Upload>
          {imagePreviews.image3 && <img src={imagePreviews.image3} alt="Image 3 Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
