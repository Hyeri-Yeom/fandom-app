import React from 'react';
import LoginForm from '../../components/LoginForm';
import './Login.css';
import splash from '../../assets/img/splash.png'

const Login = () => {
  return (
    <div className="login-container">
        <p className="loginimg"><img src={splash} alt="" /></p>
      <h2 className="login-title">내 최애랑 연결되는 중...💫</h2>
      <LoginForm />
    </div>
  );
};

export default Login;