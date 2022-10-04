import React from 'react';
import Button from "../Button/Button";
import './header.css'
import { useTelegram } from "../useTelegram";

const Header = () => {
  const {onClose, user} = useTelegram()

  return (
    <header className="header">
      <Button onClick={onClose}>
        Закрыть
      </Button>

      <span className="username"> Привет, { user }</span>
    </header>
  );
};

export default Header;
