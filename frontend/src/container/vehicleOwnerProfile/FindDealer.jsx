import React, { useState } from 'react';
import { Typography, Button, TextField, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import './FindDealer.css';

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  textAlign: 'center',
  maxWidth: '1800px',
  margin: '0 auto',
}));

const SearchFilters = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
  marginTop: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const FilterOptions = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
            sx={{ justifyContent: 'center' }}
          >
            <FormControlLabel value="location" control={<Radio />} label="Location" />
            <FormControlLabel value="dealerName" control={<Radio />} label="Dealer Name" />
          </RadioGroup>
        </FormControl>
        <SearchFilters>
          <FilterOptions>
            {searchOption === 'location' ? (
              <>
                <TextField
                  label="City or Province"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  select
                  label="Service Type"
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                </TextField>
              </>
            ) : (
              <>
                <TextField
                  label="Dealer Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  select
                  label="Service Type"
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                </TextField>
              </>
            )}
          </FilterOptions>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ width: '100%', maxWidth: '300px', height: '55px' }}
          >
            Find A Dealer
          </Button>
        </SearchFilters>
      </SearchContainer>
    </div>
  );
};

export default FindDealer;
