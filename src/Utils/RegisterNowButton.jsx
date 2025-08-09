// import * as React from 'react';
// import Button from '@mui/material/Button';
// import SaveIcon from '@mui/icons-material/Save';

// export default function LoadingButtonsTransition() {
//   const [loading, setLoading] = React.useState(false);
//   function handleClick() {
//     setLoading(true);
//   }

//   return (
//         <Button
//           color="secondary"
//           onClick={handleClick}
//           loading={loading}
//           loadingPosition="start"
//           startIcon={<SaveIcon />}
//           variant="contained"
//         >
//           Save
//         </Button>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import SaveIcon from '@mui/icons-material/Save';

export default function RegisterNowButton({ disabled, onClick }) {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    onClick(); // Call the original onClick handler
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={disabled || loading}
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
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