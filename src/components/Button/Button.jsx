import React from 'react';
import './button.css'

const Button = (props) => {
  const {
    className,
    children
  } = props

  return (
    <button className={'button' + className}>
      {children}
    </button>
  );
};

export default Button;
