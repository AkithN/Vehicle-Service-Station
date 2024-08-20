import React, { useState } from 'react';
import { Typography, Button, TextField, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import './FindDealer.css'; // Assuming you will add the CSS classes here

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  textAlign: 'center',
}));

const SearchFilters = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
  marginTop: theme.spacing(2),
}));

const FilterOptions = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  width: '100%',
}));

const FindDealer = () => {
  const [searchOption, setSearchOption] = useState('location');

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  return (
    <div className="find-dealer-wrapper">
      <SearchContainer>
        <Typography variant="h4" fontWeight={700}>
          Find A Dealer
        </Typography>
        <FormControl component="fieldset" sx={{ marginTop: 3 }}>
          <FormLabel component="legend">Please Select a Dealership to View All Offers</FormLabel>
          <RadioGroup
            aria-label="search-option"
            name="search-option"
            value={searchOption}
            onChange={handleSearchOptionChange}
            row
          >
            <FormControlLabel value="location" control={<Radio />} label="Location" />
            <FormControlLabel value="dealerName" control={<Radio />} label="Dealer Name" />
          </RadioGroup>
        </FormControl>
        <SearchFilters>
          {searchOption === 'location' ? (
            <FilterOptions>
              <TextField
                label="Zip Code, City, or State"
                variant="outlined"
                fullWidth
              />
              <TextField
                select
                label="Miles Radius"
                variant="outlined"
                fullWidth
              >
                <MenuItem value="50 miles">50 Miles</MenuItem>
                <MenuItem value="25 miles">25 Miles</MenuItem>
                <MenuItem value="100 miles">100 Miles</MenuItem>
              </TextField>
              <TextField
                select
                label="Brand"
                variant="outlined"
                fullWidth
              >
                <MenuItem value="brand1">Brand 1</MenuItem>
                <MenuItem value="brand2">Brand 2</MenuItem>
              </TextField>
            </FilterOptions>
          ) : (
            <FilterOptions>
              <TextField
                label="Dealer Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                select
                label="Brand"
                variant="outlined"
                fullWidth
              >
                <MenuItem value="brand1">Brand 1</MenuItem>
                <MenuItem value="brand2">Brand 2</MenuItem>
              </TextField>
            </FilterOptions>
          )}
        </SearchFilters>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 3 }}
        >
          Find Dealer Near You
        </Button>
      </SearchContainer>
    </div>
  );
};

export default FindDealer;
