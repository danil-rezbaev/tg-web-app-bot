import React from 'react';
import './button.css'

const Button = (props) => {
  const {
    className,
    children,
    onClick
  } = props

  return (
    <button className={'button' + className} onClick>
      {children}
    </button>
  );
};

export default Button;
