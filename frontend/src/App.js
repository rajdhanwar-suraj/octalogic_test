import React, { useState } from 'react';
import VehicleTypeList from './components/VehicleTypeList';
import VehicleModelList from './components/VehicleModelList';
import BookingForm from './components/BookingForm';
import { Container, Typography, Box, Button } from '@mui/material';
import './App.css';

const App = () => {
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [step, setStep] = useState(1);

  const handleSelectType = (typeId) => {
    setSelectedTypeId(typeId);
    setSelectedVehicleId(null);
  };

  const handleSelectVehicle = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <Container className="App">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vehicle Booking System
        </Typography>
        {step === 1 && (
          <Box>
            <VehicleTypeList onSelectType={handleSelectType} />
            {selectedTypeId && (
              <Button variant="contained" color="primary" onClick={handleNextStep} sx={{ mt: 2 }}>
                Next
              </Button>
            )}
          </Box>
        )}
        {step === 2 && (
          <Box>
            <VehicleModelList typeId={selectedTypeId} onSelectVehicle={handleSelectVehicle} />
            {selectedVehicleId && (
              <Box>
                <Button variant="contained" color="primary" onClick={handlePreviousStep} sx={{ mt: 2, mr: 2 }}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNextStep} sx={{ mt: 2 }}>
                  Next
                </Button>
              </Box>
            )}
          </Box>
        )}
        {step === 3 && (
          <Box>
            <BookingForm vehicleId={selectedVehicleId} />
            <Button variant="contained" color="primary" onClick={handlePreviousStep} sx={{ mt: 2 }}>
              Back
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
