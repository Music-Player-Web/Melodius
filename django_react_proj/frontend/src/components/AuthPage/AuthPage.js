import { useState } from 'react';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import { useNavigate } from 'react-router-dom';

export default function AuthPage({ setUser }) {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);


  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <main className="AuthPage" style={{ marginLeft: "100px", height: "30px" }}>

      {showLogin ? <SignIn setUser={setUser} onSuccess={handleSuccess} /> : <SignUp setUser={setUser} onSuccess={handleSuccess} />}
      <div>
        <a onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Don't have account? " : "Already have account? "}<h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3></a>

      </div>
    </main>
  );
}
