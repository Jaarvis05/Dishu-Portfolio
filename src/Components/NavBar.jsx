import React, { useRef, useState } from 'react'
import './NavBar.css'
import logo from './assets/logo1.svg'
import underline from '/src/assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '/src/assets/menu-bar.png'
import menu_close from '/src/assets/close.png'

const NavBar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="empty"/>
      <img src={menu_open} alt="empty" onClick={openMenu} className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} alt="empty" onClick={closeMenu} className="nav-mob-close"/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img id='underline' src={underline} alt='none'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img id='underline' src={underline} alt='none'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img id='underline' src={underline} alt='none'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img id='underline' src={underline} alt='none'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img id='underline' src={underline} alt='none'/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default NavBar
