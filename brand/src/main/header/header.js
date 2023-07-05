import './header.css'
import {
    Link
  } from "react-router-dom";
const Header = () =>{
    return(
       <section className="header">
         <div className="header-wrapper-first">
            <div className="logo">
               <img src={require('./header-img/logo-colored.svg').default} alt="logo" />
            </div>
            <div className="search">
              <input className='searchInput' type="text" placeholder="Search"  /> 
              <div className="category">
                <p className="categorys-title">ALL category</p>
                <img className='dropdown-img' src={require('./header-img/dropdown.svg').default} alt="dropdown" />
              </div>
              <button className="search-Btn">Search</button>
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
            </div>
         </div>
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
            <div className='value'>
              <p className='value-name'>
                Ship to
              </p>
              <img className='country-img' src={require('./header-img/icon.svg').default} alt="dropdown" />
              <img className='country-dropdown-icon' src={require('./header-img/dropdown.svg').default} alt="dropdown" />
            </div>
          </div>
         </div>
         <div className='line'></div>
       </section>
    )
}
export default Header