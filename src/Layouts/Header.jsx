import React from 'react'
import HeaderLogo from '../Assets/HeaderLogo.png';

const Header = () => {
  return (
    <header className='mx-28 my-2 h-[95px] flex items-center'>
        <img src={HeaderLogo} alt="Pag's Tasker logo" />
    </header>
  )
}

export default Header