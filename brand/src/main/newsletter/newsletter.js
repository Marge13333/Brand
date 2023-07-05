import {
    Link
  } from "react-router-dom";
import "./newsletter.css"

const Newslatter = () =>{
    return(
        <section className="newsllater">
            <div className="newslatter-wrapper">
                <h3 className="newslatter-title">Subscribe on our newsletter</h3>
                <p className="newslatter-text">Get daily news on upcoming offers from many suppliers all over the world</p>
                <div className="newvslatter-input-wrapper">
                   <input className='newslatter-input'  type="text" placeholder="Email"/> 
                   <button className="newslatter-button">Subscribe</button>
                </div>
            </div>

        </section>
    )
}

export default Newslatter