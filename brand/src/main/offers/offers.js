import {
    Link
  } from "react-router-dom";
import "./offers.css"

const Offers = ()=>{
    return(
        <section className="offers-deals">
          <div className="main-deals">
            <div className="deals">
                <div className="deals-wrapper">
                <h4 className="offers-mini-text">Deals and offers</h4>
                <h4 className="offers-mini-text-second">Hygiene equipments</h4>
                <div className="count">
                    <div className="days">
                        <h4 className="count-number">13</h4>
                        <p className="count-para">Hour</p>
                    </div>
                    <div className="days">
                        <h4 className="count-number">04</h4>
                        <p className="count-para">Days</p>
                    </div>
                    <div className="days">
                        <h4 className="count-number">34</h4>
                        <p className="count-para">Min</p>
                    </div>
                    <div className="days">
                        <h4 className="count-number">56</h4>
                        <p className="count-para">Sec</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="main-items">
                <div className="items-box">
                   <img className='items-box-img' style={{ marginTop: 2 }} src={require('./offers-img/watch.svg').default} alt="awatch"/>
                   <h4 className="items-box-name" style={{ marginTop: 20 }}>Smart watches</h4>
                   <p className="offers-price">-25%</p>
                </div>
                <div className="items-box">
                   <img className='items-box-img' style={{ marginTop: 12 }}src={require('./offers-img/leptop.svg').default} alt="awatch"/>
                   <h4 className="items-box-name"style={{ marginTop: 30 }}>Laptops</h4>
                   <p className="offers-price">-15%</p>
                </div>
                <div className="items-box">
                   <img className='items-box-img' style={{ marginTop: 16 }} src={require('./offers-img/camera.svg').default} alt="awatch"/>
                   <h4 className="items-box-name" style={{ marginTop: 37}}>GoPro cameras</h4>
                   <p className="offers-price">-40%</p>
                </div>
                <div className="items-box">
                   <img className='items-box-img'style={{ marginTop: 9 }} src={require('./offers-img/headphones.svg').default} alt="awatch"/>
                   <h4 className="items-box-name" style={{ marginTop: 10}}>Headphones</h4>
                   <p className="offers-price">-25%</p>
                </div>
                <div className="items-box">
                   <img className='items-box-img' style={{ marginTop: 10 }} src={require('./offers-img/phone.svg').default} alt="awatch"/>
                   <h4 className="items-box-name" style={{ marginTop: 13 }}>Canon camreras</h4>
                   <p className="offers-price">-25%</p>
                </div>
            </div>
         </div>

         <div className="home-offres">
            <div className="home-outdoor">
                <div className="home-oudoor-wwrapper">
                   <h2 className="homeOutdoor-title">Home and</h2>
                   <h2 className="homeOutdoor-title">outdoor</h2>
                   <button className="homeOutddor-source">Source now</button>
                </div>
            </div>
            <div className="home-items">
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Soft chairs</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/rasm.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Soft & chair</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/image 94.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Kitchen dishes</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/image 93.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Smart watches</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/image 90.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Kitchen mixer</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 100</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/image 88.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Blenders</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 39</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/image 87.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Home appliance</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/asdasd.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Coffee maker</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 10</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol2/dfgdfg.svg').default} alt="offersimg"/>
                </div>
            </div>
            

         </div>
         <div className="home-offres">
            <div className="home-outdoor-vol2">
                <div className="home-oudoor-wwrapper">
                   <h2 className="homeOutdoor-title">Consumer</h2>
                   <h2 className="homeOutdoor-title">electronics</h2>
                   <h2 className="homeOutdoor-title">and gadgets</h2>
                   <button className="homeOutddor-source">Source now</button>
                </div>
            </div>
            <div className="home-items">
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Smart watches</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 89</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 35.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Cameras</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 28.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Headphones</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 10</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 86.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Smart watches</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 90</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 85.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Gaming set</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 35</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/rewww.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Laptops & PC</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 350</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 34.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Smartphones</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 19</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 32.svg').default} alt="offersimg"/>
                </div>
                <div className="home-offers-box">
                    <div className="home-offers-title">
                        <h3 className="offers-title">Electric kattle</h3>
                        <p className="home-offers-para">From</p>
                        <p className="home-offers-para">USD 240</p>
                    </div>
                    <img className='offers-image' src={require('./offers-img-vol3/image 33.svg').default} alt="offersimg"/>
                </div>
            </div>
            

         </div>
         
        </section>
    )
}
export default Offers