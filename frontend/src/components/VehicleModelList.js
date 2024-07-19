import React, { useState, useEffect } from 'react';
import { fetchVehicleModels } from '../services/api';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const VehicleModelList = ({ typeId, onSelectVehicle }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (typeId) {
      const getVehicleModels = async () => {
        const data = await fetchVehicleModels(typeId);
        setModels(data);
      };

      getVehicleModels();
    }
  }, [typeId]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Vehicle Models
      </Typography>
      <List>
        {models.map((model) => (
          <ListItem button key={model.id} onClick={() => onSelectVehicle(model.id)}>
            <ListItemText primary={model.model} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default VehicleModelList;
