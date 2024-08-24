import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Input } from 'antd';
import './FindDealer.css';

const { Search } = Input;

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  textAlign: 'center',
  maxWidth: '1800px',
  margin: '0 auto',
}));

const FindDealer = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (value) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/garages/search/${value}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="find-dealer-wrapper">
      <SearchContainer>
        <Typography variant="h4" fontWeight={700}>
          Find A Dealer
        </Typography>
        <div style={{ marginTop: 20 }}>
          <Search
            placeholder="Search by Garage Name, City, or Province"
            enterButton="Find A Dealer"
            size="large"
            onSearch={handleSearch}
            style={{ maxWidth: 600 }}
          />
        </div>
        {results.length > 0 && (
          <div>
            <Typography variant="h6" sx={{ marginTop: 4 }}>
              Search Results:
            </Typography>
            <ul>
              {results.map((garage) => (
                <li key={garage.garageId}>
                  {garage.garageName} - {garage.district}, {garage.province}
                </li>
              ))}
            </ul>
          </div>
        )}
      </SearchContainer>
    </div>
  );
};

export default FindDealer;
