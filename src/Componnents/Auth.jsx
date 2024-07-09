import { useState } from 'react';
import LoginPage from './Login';
import RegisterPage from './Regiter';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <LoginPage /> : <RegisterPage />}
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default AuthPage;  
