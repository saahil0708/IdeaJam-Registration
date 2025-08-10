import * as React from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import SaveIcon from '@mui/icons-material/Save';

export default function RegisterNowButton({ disabled, onClick, loading }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={disabled || loading}
        onClick={onClick}
        startIcon={<SaveIcon />}
        sx={{
          padding: '7px',
          borderRadius: '7px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          fontFamily: 'Outfit, sans-serif',
          textTransform: 'none',
          backgroundColor: disabled ? '#4b5563' : '#1cb683',
          '&:hover': {
            backgroundColor: disabled ? '#4b5563' : '#16a673',
            boxShadow: disabled ? 'none' : '0 0 15px rgba(28, 182, 131, 0.5)'
          },
          transition: 'all 0.3s ease'
        }}
      >
        {loading ? 'Registering...' : 'REGISTER'}
      </Button>
    </motion.div>
  );
}