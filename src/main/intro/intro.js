import {
    Link
  } from "react-router-dom";
import "./intro.css"

const Intro = () =>{
    return(
        <section className="intro">
            <div className="intro-wrapper">
                <div className="intro-list">
                    <button className="list-btn">Automobiles</button>
                    <button className="list-btn">Clothes and wear</button>
                    <button className="list-btn">Home interiors</button>
                    <button className="list-btn">Computer and tech</button>
                    <button className="list-btn">Tools, equipments</button>
                    <button className="list-btn">Sports and outdoor</button>
                    <button className="list-btn">Animal and pets</button>
                    <button className="list-btn">Machinery tools</button>
                    <button className="list-btn">More category</button>
                </div>
                <div className="intro-slide">
                    <div className="bg-wrapper">
                    <h3 className="intro-first-title">Latest trending</h3>
                    <h3 className="intro-second-titlle">Electronic items</h3>
                    <button className="learn-more-btn">Learn more</button>
                    </div>
                </div>
                <div className="offers">
                    <div className="user">
                        <div className="user-profile">
                           <img className='user-img' src={require('./intro-img/Avatar.svg').default} alt="avatar"/>
                           <div className="user-word">
                            <p className="user-text">Hi,user</p>
                            <p className="user-text">let’s get stated</p>
                           </div>
                        </div>
                        <button className="join-us">Join now</button>
                        <button className="log-in">Log in</button>
                    </div>
                    <div className="mini-offer-one">
                        <h4 className="mini-offer-text">Get US $10 off </h4>
                        <h4 className="mini-offer-text">with a new </h4>
                        <h4 className="offer-text">supplier</h4>
                    </div>
                    <div className="mini-offer-two">
                        <h4 className="mini-offer-text">Send quotes with</h4>
                        <h4 className="mini-offer-text">supplier</h4>
                        <h4 className="mini-offer-text">preferences</h4>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Intro