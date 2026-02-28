import  style from './style.module.css'
import React from 'react'

export default function SideMenu({ isOpen }) {
  return (
    <>
    <div className='overlay' style={{display: isOpen ? 'block' : 'none'}}></div>
    <div className={style.sideMenu} style={{display: isOpen ? 'flex' : 'none'}}>
        <div className={style.menuItem}>Home</div>
    </div>
    </>
  )
}
