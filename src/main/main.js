import Header from "./header/header";
import Intro from "./intro/intro";
import Offers from "./offers/offers";
import Inquiry from "./inquiry/inquiry";
import Recommended from "./Recommended-items/recom"
import Service from "./service/service"
import Country from "./country/country"
import Newslatter from './newsletter/newsletter'
import Footer from "./footer/footer"
import {
    Link
  } from "react-router-dom";


const Main = () =>{
    return(     
        <div>
        <Header/>
        <Intro/>
        <Offers/>
        <Inquiry/>
        <Recommended/>
        <Service/>
        <Country/>
        <Newslatter/>
        <Footer/>
    </div>

    )
}

export default Main;