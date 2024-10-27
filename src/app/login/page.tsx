// pages/login.tsx

"use client";

import LoginPage from '@/components/frontend/organisms/LoginPage';
import MainTemplate from '@/components/frontend/templates/MainTemplate';
import React from 'react';

const Login: React.FC = () => {
  return (
    <MainTemplate>
      <LoginPage />
    </MainTemplate>
  );
};

export default Login;