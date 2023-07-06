import React from 'react'
import './body.css';
import Logo from '../../assets/arrow-down.svg'
function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  return (
    <div className='container1'>
        <p className='heading1'>Resume Builder</p>
        <div className='toolbar'>
            <div className='colors'>
             <span className='colors'></span>
             {colors.map((item)=>(
                <span
                key={item}
                style={{backgroundColor:item}}
                className='color'
                />
             ))}
            </div>
            <button>Download <img src={Logo} alt='arrow'></img> </button>
        </div>
    </div>
  )
}

export default Body