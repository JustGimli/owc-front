import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ProfileMenu.css';

const ProfileMenu: React.FC = () => {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">WELCOME</h2>
      </div>
      <p className="text-sm mb-4">
        SIGN UP TO START EARNING POINTS FOR FREE GOODIES, SAVE YOUR FAVORITE PRODUCTS, AND MORE.
      </p>
      <form>
        <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth className="my-4">GET LOGIN CODE</Button>
        <FormControlLabel
          control={<Checkbox name="news" color="primary" />}
          label="Email me with news and offers"
        />
        <p className="text-xs text-gray-600">
          By signing in, you agree to our <a href="#" className="text-blue-600">privacy policy</a> and <a href="#" className="text-blue-600">terms of service</a>.
        </p>
      </form>
    </div>
  );
};

export default ProfileMenu;
