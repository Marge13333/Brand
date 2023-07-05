import {
    Link
  } from "react-router-dom";
import "./inquiry.css"

const Inquiry = () =>{
    return(
        <section className="inqiry">
            <div className="inqiry-wrapper">
                <div className="inquiry-title">
                    <h2 className="inquiry-main-title">An easy way to send</h2>
                    <h2 className="inquiry-main-title-two">requests to all suppliers</h2>
                    <div className="inquery-mini-text-wraper">
                       <p className="inquiry-para">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                       <p className="inquiry-para">elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="inquey-box">
                    <h2 className="inquery-box-title">Send quote to suppliers</h2>
                    <input className='inquery-input-item' type="text" placeholder="What item you need?"/> 
                    <input className='inquery-input-detals' type="text" placeholder="Type more detals"/>
                    <div className="inquiry-mini-detals">
                        <input className='inquiry-quantity' type="text" placeholder="Quantity"/>
                        <div className="pcs">
                            <p className="pcs-text">Pcs</p>
                            <img className='inquiry-dropdown-img' src={require('../header/header-img/dropdown.svg').default} alt="dropdown" />
                        </div>
                     </div> 
                     <button className="inquiry-btn">Send inquery</button>
                </div>
            </div>
        </section>
    )
}
export default Inquiry