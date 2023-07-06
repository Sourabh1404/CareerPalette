import React from 'react'
import './Header.css'
import Logo from "../../assets/resume.svg";
function Header() {
  return (
    <div className='container'>
        <div className='left'>
        <p className='heading'>
            A <span>Resume</span> that stands out!
        </p>
        <p className='heading'>
            Make your own resume.<span>It's free</span>
        </p>
    </div>
    <div className='right'>
        <img src={Logo} alt='Resume'/>
    </div>
    </div>
  )
}

export default Header