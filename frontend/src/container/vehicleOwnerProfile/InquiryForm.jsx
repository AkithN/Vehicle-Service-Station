import React from 'react';
import { TextField, Button, MenuItem, Checkbox, FormControlLabel, Typography, Grid } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

const vehicleTypes = ['Car', 'Bike', 'Truck'];
const branches = ['Dehiwala', 'Moratuwa', 'Nugegoda'];
const services = ['Wash and Grooming', 'Lube Services', 'Detailing'];

const BookingForm = () => {
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState(null);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="First Name" required />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Last Name" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Phone Number" required />
        </Grid>
        <Grid item xs={6}>
          <TextField select fullWidth label="Vehicle Type" required>
            {vehicleTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Vehicle Number" required />
        </Grid>
        <Grid item xs={12}>
          <Typography>Services:</Typography>
          {services.map((service) => (
            <FormControlLabel
              key={service}
              control={<Checkbox />}
              label={service}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          <TextField select fullWidth label="Branch" required>
            {branches.map((branch) => (
              <MenuItem key={branch} value={branch}>
                {branch}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="Appointment Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField fullWidth {...params} required />}
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            label="Appointment Time"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            renderInput={(params) => <TextField fullWidth {...params} required />}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Additional Services"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookingForm;
