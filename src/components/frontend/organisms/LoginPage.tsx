// components/organisms/LoginPage.tsx
import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
