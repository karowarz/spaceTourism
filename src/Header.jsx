import React from 'react';
import PrimaryNavigation from './PrimaryNavigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../assets/shared/logo.svg" alt="" />
      </div>
      <PrimaryNavigation />
    </header>
  );
};

export default Header;
