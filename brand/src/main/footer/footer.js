import {
    Link
  } from "react-router-dom";
import "./footer.css"

const Footer = () =>{
    return(
        <section className="footer">
          <div className="top-footer">
            <div className="top-footer-wrapper">
                <div className="socials">
                   <img className='main-logo' src={require('./footer-img/logo-colored.svg').default} alt="logo" />
                   <p className="socials-info">Best information about the company gies here but now lorem ipsum is</p>
                   <div className="social-logos-wrapper">
                     <img className='social-logo' src={require('./footer-img/facebook3.svg').default} alt="logo" />
                     <img className='social-logo' src={require('./footer-img/twitter3.svg').default} alt="logo" />
                     <img className='social-logo' src={require('./footer-img/linkedin3.svg').default} alt="logo" />
                     <img className='social-logo' src={require('./footer-img/instagram3.svg').default} alt="logo" />
                     <img className='social-logo' src={require('./footer-img/youtube3.svg').default} alt="logo" />
                   </div>
                 </div>   
             <div className="footer-main-info-wrapper">
                 <div className="footer-main-info">
                    <h4 className="footer-info-title">About</h4>
                    <p className="footer-mini-infos">About us</p>
                    <p className="footer-mini-infos">Find store</p>
                    <p className="footer-mini-infos">Categories</p>
                    <p className="footer-mini-infos">Blogs</p>
                </div>
                <div className="footer-main-info">
                    <h4 className="footer-info-title">Partnership</h4>
                    <p className="footer-mini-infos">About Us</p>
                    <p className="footer-mini-infos">Find store</p>
                    <p className="footer-mini-infos">Categories</p>
                    <p className="footer-mini-infos">Blogs</p>
                </div>  
                <div className="footer-main-info">
                    <h4 className="footer-info-title">Information</h4>
                    <p className="footer-mini-infos">Help Center</p>
                    <p className="footer-mini-infos">Money Refund</p>
                    <p className="footer-mini-infos">Shipping</p>
                    <p className="footer-mini-infos">Contact us</p>
                </div>  
                <div className="footer-main-info " style={{marginLeft:27,}}>
                    <h4 className="footer-info-title" style={{maxWidth:78}}>For users</h4>
                    <p className="footer-mini-infos">Login</p>
                    <p className="footer-mini-infos">Register</p>
                    <p className="footer-mini-infos">Settings</p>
                    <p className="footer-mini-infos">My Orders</p>
                </div>  
              </div>
              <div className="apps">
                <h2 className="getapp">Get app</h2>
                <img className='social-logo' src={require('./footer-img/market-button.svg').default} alt="logo" />
                <img className='social-logo' src={require('./footer-img/fdsdf.svg').default} alt="logo" />
            </div>          
            </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer-wrapper">
                    <p className="bottom-footer-text">© 2023 Ecommerce. </p>
                    <div className="language-wrapper">
                       <img className='language-img' src={require('./footer-img/kkkkkk.svg').default} alt="language" />
                       <p className="language-text">English</p>
                       <img className='dropUp' src={require('./footer-img/expand_less.svg').default} alt="language" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer