import { Button } from 'antd'
import React from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const ToggleThemButton = ({ darkTheme,
    toggleTheme }) => {
  return <div className='toggle-theme-btn'>
    <Button onClick={toggleTheme}>
    {
        darkTheme ? <HiOutlineSun /> :
        <HiOutlineMoon />
    }    
    </Button>
  </div>

}

export default ToggleThemButton