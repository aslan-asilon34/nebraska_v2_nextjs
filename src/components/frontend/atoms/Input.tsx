// components/atoms/Input.tsx
import React from 'react';

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, id, value, onChange, required }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
    />
  );
};

export default Input;
