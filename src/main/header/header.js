import { useState, useRef } from 'react';
import './header.css'
import {
    Link
  } from "react-router-dom";
const Header = () =>{
  const Categorys = ['Automobiles',"Clothes and wear","Home interiors","Computer and tech","Tools, equipments","Sports and outdoor","Animal and pets","Machinery tools"]
  const [open ,setOpen] = useState(false)
  const [openFlag, setOpenFlag] = useState(false)
  

    return(
       <section className="header">
         <div className="header-wrapper-first">
          <Link to={'/'} >
          <div className="logo">
               <img className='menu-svg' src={require('./header-img/menu.svg').default} alt="logo" />
               <img className='header-logo' src={require('./header-img/logo-colored.svg').default} alt="logo" />
            </div>
          </Link>
            <div className="search">
              <input className='searchInput' type="text" placeholder="Search"  /> 
              <div onClick={()=>setOpen(!open)} className="category" >
                   <p className="categorys-title">ALL category</p>
                   <img className='dropdown-img' src={require('./header-img/dropdown.svg').default} alt="dropdown" />
              </div>
              <Link className="search-Btn" to={'/List'}>Search</Link>
            </div>
            <div className="menu-wrapper">
                <div className="menu">
                    <div className="menu-list">
                      <img src={require('./header-img/person.svg').default} alt="profile" />
                      <p className="menu-text">Profile</p>
                    </div>
                    <div className="menu-list">
                      <img src={require('./header-img/chat.svg').default}  alt="chat"/>
                      <p className="menu-text">Massage</p>
                    </div>
                    <div className="menu-list">
                      <img className='heart' src={require('./header-img/heart.svg').default} alt="orders" />
                      <p className="menu-text">Orders</p>
                    </div>
                    <div className="menu-list">
                      <img src={require('./header-img/chart.svg').default} alt="chart" />
                      <p className="menu-text">My cart</p>
                    </div>
                </div>
                <div className='mobile-menu-wrapper'>
                   <img src={require('./header-img/idkshpn.svg').default} alt="chart" />
                   <img src={require('./header-img/persona.svg').default} alt="chart" />

                </div>
            </div>
            
         </div>
         <div className='mobile-search-wrapper'>
              <input className='searchInput' type="text" placeholder="Search"  /> 
         </div>
         <div className='mobile-menu-list-wrapper'>
           <div className='header-mobile-list'>
            <p className='mobile-menu-list-title'>All category</p>
            <p className='mobile-menu-list-title'>Gadgets</p>
            <p className='mobile-menu-list-title'>Clocthes</p>
            <p className='mobile-menu-list-title'>Accessory</p>
           </div>
         </div>
         {
          open && (
            <div onClick={()=>setOpen(false)} className='categorys-drropdown'>
            <ul className='categoris-list-drop'>
              {
                Categorys.map((menu)=>(
                  <p className='cat-text' key={menu}>
                    {menu}
                  </p>
                ))
              }
            </ul>
            </div>
          )
         }
        
         <div className='line'></div>
         <div className='header-wrapper-second'>
          <div className='list'>
            <div className='all-categorys'>
              <img src={require('./header-img/Vector.svg').default} alt="vectors" />
              <p className='list-text'>All category</p>
            </div>
            <p className='list-text'>Hot offers</p>
            <p className='list-text'>Gift boxes</p>
            <p className='list-text'>Projects</p>
            <p className='list-text'>Menu item</p>
            <div className='help'>
              <p className='list-text'>Help</p>
              <img className='dropdown-img' src={require('./header-img/dropdown.svg').default} alt="dropdown" />
            </div>
          </div>
          <div className='filter'>
            <div className='value'>
              <p className='value-name'>
                English, USD
              </p>
              <img src={require('./header-img/dropdown.svg').default} alt="dropdown" />
            </div>
            <div onClick={()=> setOpenFlag(!openFlag)} className='value'>
              <p className='value-name'>
                Ship to
              </p>
              <img className='country-img' src={require('./header-img/icon.svg').default} alt="dropdown" />
              <img className='country-dropdown-icon' src={require('./header-img/dropdown.svg').default} alt="dropdown" />
            </div>
          </div>
         </div>
         {
          openFlag && (
            <div   className='flags-wrapper'>
          <div onClick={()=>setOpenFlag(false)} className='flags'>
             <img className='flag-img' src={require('../country/country-img/Property 1=AE.svg').default} alt="flag" />
             <p className='flags-name'>AE</p>
            </div>
            <div onClick={()=>setOpenFlag(false)} className='flags'>
             <img className='flag-img' src={require('../country/country-img/Property 1=AU.svg').default} alt="flag" />
             <p className='flags-name'>AU</p>
            </div>
            <div onClick={()=>setOpenFlag(false)} className='flags'>
             <img className='flag-img' src={require('../country/country-img/Property 1=CN.svg').default} alt="flag" />
             <p className='flags-name'>CN</p>
            </div>
            <div onClick={()=>setOpenFlag(false)} className='flags'>
             <img className='flag-img' src={require('../country/country-img/Property 1=DE.svg').default} alt="flag" />
             <p className='flags-name'>DE</p>
            </div>
            <div onClick={()=>setOpenFlag(false)} className='flags'>
             <img className='flag-img' src={require('../country/country-img/Property 1=DK.svg').default} alt="flag" />
             <p className='flags-name'>DK</p>
            </div>
           
            <div onClick={()=>setOpenFlag(false)} className='flags'>
             <img className='flag-img' src={require('../country/country-img/Property 1=RU.svg').default} alt="flag" />
             <p className='flags-name'>RU</p>
            </div>
          </div>
          )
         }
         
         <div className='line'></div>
       </section>
    )
}
export default Header