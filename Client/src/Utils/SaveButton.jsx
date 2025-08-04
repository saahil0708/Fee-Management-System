import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton'; // ✅ Correct button with loading

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
      <LoadingButton
        size="small"
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        sx={{ backgroundColor: '#1976d2', color: '#fff', padding: '6px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Custom styles
      >
        Save
      </LoadingButton>
    </Box>
  );
}
