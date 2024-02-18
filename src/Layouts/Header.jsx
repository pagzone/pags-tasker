import React from 'react'
import HeaderLogo from '../Assets/HeaderLogo.png';

const Header = () => {
  return (
    <header className='mx-10 my-2'>
        <img src={HeaderLogo} alt="Pag's Tasker logo" />
    </header>
  )
}

export default Header