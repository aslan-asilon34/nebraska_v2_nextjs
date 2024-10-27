// components/atoms/Label.tsx
import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} style={{ display: 'block', marginBottom: '5px' }}>{children}</label>;
};

export default Label;
