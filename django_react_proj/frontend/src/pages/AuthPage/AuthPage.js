import { useState } from 'react';
import SignIn from '../../components/Auth/SignIn';
import SignUp from '../../components/Auth/SignUp';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);


  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <Grid className="AuthPage" >
      <div>
        <Box component="img" src="/images/logo.png" alt="Logo" sx={{ width: "60px", margin: "10px", borderRadius: "50%" }} />
        <Typography color="white" variant='h4' fontFamily="Lato">
          Melodius
        </Typography>
      </div>

      {showLogin ? <SignIn setUser={setUser} onSuccess={handleSuccess} /> : <SignUp setUser={setUser} onSuccess={handleSuccess} />}
      <div className='toggle-link'>
        <a onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Don't have account? " : "Already have account? "}<div onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</div></a>

      </div>
    </Grid>
  );
}
