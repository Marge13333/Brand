import {
    Link
  } from "react-router-dom";
import "./recom.css"

const Recommended = () =>{
    return(
        <section className="recommended">
            <h2 className="recom-title">Recommended items</h2>
            <div className="items-box-wrapper">
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/1.svg').default} alt="items"/>
                    <p className="items-price">$10.30</p>
                    <p className="items-desc">T-shirts with multiple colors, for men</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/2.svg').default} alt="items"/>
                    <p className="items-price">$12.50</p>
                    <p className="items-desc">Jeans shorts for men blue color</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/3.svg').default} alt="items"/>
                    <p className="items-price">$34.00</p>
                    <p className="items-desc">Brown winter coat medium size</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/4.svg').default} alt="items"/>
                    <p className="items-price">$99.00</p>
                    <p className="items-desc">Jeans bag for travel for men</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/5.svg').default} alt="items"/>
                    <p className="items-price">$9.99</p>
                    <p className="items-desc">Leather wallet</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/6.svg').default} alt="items"/>
                    <p className="items-price">$8.99</p>
                    <p className="items-desc">Canon camera black, 100x zoom</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/5.svg').default} alt="items"/>
                    <p className="items-price">$10.30</p>
                    <p className="items-desc">Headset for gaming with mic</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/7.svg').default} alt="items"/>
                    <p className="items-price">$10.30</p>
                    <p className="items-desc">Smartwatch silver color modern</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/8.svg').default} alt="items"/>
                    <p className="items-price">$80.95</p>
                    <p className="items-desc">Blue wallet for men leather metarfial</p>
                </div>
                <div className="recom-items-box">
                    <img className='recom-items-img' src={require('./recom-img/10.svg').default} alt="items"/>
                    <p className="items-price">$10.30</p>
                    <p className="items-desc">Jeans bag for travel for men</p>
                </div>
            </div>

        </section>
    )
} 
export default Recommended 