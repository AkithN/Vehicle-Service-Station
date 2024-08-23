import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPackages = () => {
  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [price, setPrice] = useState('');
  const [packageImage, setPackageImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('packageName', packageName);
    formData.append('packageDescription', packageDescription);
    formData.append('price', price);
    if (packageImage) {
      formData.append('packageImage', packageImage);
    }

    try {
      await axios.post('/api/packages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/packages');
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  return (
    <div>
      <h2>Add New Package</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Package Name</label>
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Package Description</label>
          <textarea
            value={packageDescription}
            onChange={(e) => setPackageDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Package Image</label>
          <input
            type="file"
            onChange={(e) => setPackageImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Add Package</button>
      </form>
    </div>
  );
};

export default AddPackages;
