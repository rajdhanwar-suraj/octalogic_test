import React, { useState, useEffect } from 'react';
import { fetchVehicleTypes } from '../services/api';
import { List, ListItem, ListItemText, Typography, Divider, Box } from '@mui/material';

const VehicleTypeList = ({ onSelectType }) => {
  const [carTypes, setCarTypes] = useState([]);
  const [bikeTypes, setBikeTypes] = useState([]);

  useEffect(() => {
    const getVehicleTypes = async () => {
      const data = await fetchVehicleTypes();
      setCarTypes(data.carTypes);
      setBikeTypes(data.bikeTypes);
    };

    getVehicleTypes();
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Car Types
      </Typography>
      <List>
        {carTypes.map((type) => (
          <ListItem button key={type.id} onClick={() => onSelectType(type.id)}>
            <ListItemText primary={type.type} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Bike Types
      </Typography>
      <List>
        {bikeTypes.map((type) => (
          <ListItem button key={type.id} onClick={() => onSelectType(type.id)}>
            <ListItemText primary={type.type} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default VehicleTypeList;
