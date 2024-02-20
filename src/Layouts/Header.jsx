import React from 'react'
import HeaderLogo from '../Assets/HeaderLogo.png';

const Header = () => {
  return (
      <header className="mx-28 my-2 h-[95px] flex items-center">
          <a href='/'>
              <img src={HeaderLogo} alt="Pag's Tasker logo" />
          </a>
      </header>
  );
}

export default Header