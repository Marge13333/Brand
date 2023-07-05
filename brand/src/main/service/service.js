import {
    Link
  } from "react-router-dom";
import "./service.css"

const Service = () => {
    return(
        <section className="service">
            <h3 className="service-title">Our extra services</h3>
            <div className="service-box-wrapper">
                <div className="service-box">
                  <img className='service-img' src={require('./service-img/Mask group (1).svg').default} alt="service"/>
                  <img className='service-mini-img' src={require('./service-img/lop.svg').default} alt="mini-service"/>
                  <div className="service-text-wrapper">
                    <h4 className="service-text">Source from</h4>
                    <h4 className="service-text">Industry Hubs</h4>
                  </div>
                </div>
                <div className="service-box">
                  <img className='service-img' src={require('./service-img/Mask group (2).svg').default} alt="service"/>
                  <img className='service-mini-img' src={require('./service-img/inventory_2.svg').default} alt="mini-service"/>
                  <div className="service-text-wrapper">
                    <h4 className="service-text">Customize Your</h4>
                    <h4 className="service-text">Products</h4>
                  </div>
                </div>
                <div className="service-box">
                  <img className='service-img' src={require('./service-img/Mask group (3).svg').default} alt="service"/>
                  <img className='service-mini-img' src={require('./service-img/send.svg').default} alt="mini-service"/>
                  <div className="service-text-wrapper">
                    <h4 className="service-text">Fast, reliable shipping</h4>
                    <h4 className="service-text">by ocean or air</h4>
                  </div>
                </div>
                <div className="service-box">
                  <img className='service-img' src={require('./service-img/Mask group (4).svg').default} alt="service"/>
                  <img className='service-mini-img' src={require('./service-img/security.svg').default} alt="mini-service"/>
                  <div className="service-text-wrapper">
                    <h4 className="service-text">Source from</h4>
                    <h4 className="service-text">Industry Hubs</h4>
                  </div>
                </div>
            </div>

        </section>

    )
}
export default Service