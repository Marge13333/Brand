import './cartHeader.css'
import {
    Link
  } from "react-router-dom";

const CartHeader = () =>{
    return(
        <section className='Cart-Header'>
            <div className='Cart-Header-wrapper'>
            <Link to={'/'} >
            <div className="logo">
               <img className='menu-svg' src={require('./cartHeader-img/menu.svg').default} alt="logo" />
               <img className='header-logo' src={require('./cartHeader-img/logo-colored.svg').default} alt="logo" />
            </div>
         
          </Link>
              <div className="menu-wrapper">
                <div className="menu">
                    <div className="menu-list">
                      <img src={require('./cartHeader-img/person.svg').default} alt="profile" />
                      <p className="menu-text">Profile</p>
                    </div>
                    <div className="menu-list">
                      <img src={require('./cartHeader-img/chat.svg').default}  alt="chat"/>
                      <p className="menu-text">Massage</p>
                    </div>
                    <div className="menu-list">
                      <img className='heart' src={require('./cartHeader-img/heart.svg').default} alt="orders" />
                      <p className="menu-text">Orders</p>
                    </div>
                    <Link to={'/Cart'} className="link-style"  >
                    <div className="menu-list">
                      <img style={{marginTop:2}} src={require('./cartHeader-img/chart.svg').default} alt="chart" />
                      <p className="menu-text">My cart</p>
                    </div>
                      </Link>
                </div>
                <div className='mobile-menu-wrapper'>
                   <img src={require('./cartHeader-img/idkshpn.svg').default} alt="chart" />
                   <img src={require('./cartHeader-img/persona.svg').default} alt="chart" />

                </div>
            </div>
            </div>

        </section>
    )
}

export default CartHeader;