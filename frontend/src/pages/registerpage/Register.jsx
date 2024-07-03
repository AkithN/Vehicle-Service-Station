import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Radio, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './register.css';

const { Option } = Select;

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
            <Option value="central">Central Province</Option>
            <Option value="eastern">Eastern Province</Option>
            <Option value="northern">Northern Province</Option>
            <Option value="North central">North Central Province</Option>
            <Option value="North western">North Western Province</Option>
            <Option value="sabaragamuwa">Sabaragamuwa Province</Option>
            <Option value="southern">Southern Province</Option>
            <Option value="uva">Uva Province</Option>
            <Option value="western">Western Province</Option>
          </Select>
        </Form.Item>
        <Form.Item label="District" name="district" rules={[{ required: true, message: 'Please select a district' }]}>
          <Select placeholder="-- Select --">
            <Option value="ampara">Ampara</Option>
            <Option value="anuradhapura">Anuradhapura</Option>
            <Option value="badulla">Badulla</Option>
            <Option value="batticaloa">Batticaloa</Option>
            <Option value="colombo">Colombo</Option>
            <Option value="galle">Galle</Option>
            <Option value="gampaha">Gampaha</Option>
            <Option value="hambanthota">Hambanthota</Option>
            <Option value="jaffna">Jaffna</Option>
            <Option value="kaluthara">Kaluthara</Option>
            <Option value="kandy">Kandy</Option>
            <Option value="kegalle">Kegalle</Option>
            <Option value="kilinochchi">Kilinochchi</Option>
            <Option value="kurunegala">Kurunegala</Option>
            <Option value="mannar">Mannar</Option>
            <Option value="matale">Matale</Option>
            <Option value="matara">Matara</Option>
            <Option value="monaragala">Monaragala</Option>
            <Option value="mullaitivu">Mullaitivu</Option>
            <Option value="nuwara eliya">Nuwara Eliya</Option>
            <Option value="polonnaruwa">Polonnaruwa</Option>
            <Option value="puttalama">Puttalama</Option>
            <Option value="rathnapura">Rathnapura</Option>
            <Option value="trincomalee">Trincomalee</Option>
            <Option value="vavuniya">Vavuniya</Option>
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
