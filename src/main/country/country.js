import {
    Link
  } from "react-router-dom";
import "./country.css"

const Country = () =>{
    return(
        <section className="country">
            <h2 className="suppliers-title">
                Suppliers by region
            </h2>
            <div className="country-box-wrapper">
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=AE.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Arabic Emirates</h4>
                    <p className="counrty-site">Arabic Emirates</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=AU.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Australia</h4>
                    <p className="counrty-site">shopname.ae</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=US.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">United States</h4>
                    <p className="counrty-site">shopname.ae</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=RU.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Russia</h4>
                    <p className="counrty-site">shopname.ru</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=IT.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Italy</h4>
                    <p className="counrty-site">shopname.it</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/icon.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Denmark</h4>
                    <p className="counrty-site">denmark.com.dk</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=AE.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">France</h4>
                    <p className="counrty-site">shopname.com.fr</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=CN.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Denmark</h4>
                    <p className="counrty-site">Arabic Emirates</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/GB@2x.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Arabic Emirates</h4>
                    <p className="counrty-site">Arabic Emirates</p>
                    </div>            
                </div>
                <div className="country-box">
                   <img className='country-img' src={require('./country-img/Property 1=AE.svg').default} alt="items"/>      
                   <div className="region-name-wrapper">
                    <h4 className="country-name">Arabic Emirates</h4>
                    <p className="counrty-site">Arabic Emirates</p>
                    </div>            
                </div>
                

            </div>
        </section>
    )
}
export default Country