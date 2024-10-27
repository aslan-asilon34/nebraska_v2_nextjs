// components/templates/MainTemplate.tsx

import React from 'react';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div style={{ padding: '20px' }}>
      {children}
    </div>
  );
};

export default MainTemplate;