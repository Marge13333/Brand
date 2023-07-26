import { useState, useRef } from 'react';
import {
    Link
  } from "react-router-dom";
  import "./Breadcrumb.css"

  
const Breadcrumb = () =>{
    return(
        <section className='breadcrumb'>
            <div className='Breadcrumb-wrappper'>
                <div className='Breadcrumb-box'>
                    <p className='Breadcrumb-text'>Home</p>
                    <img className='dropright' src={require('./BreadcrumbIcon/chevron_right.svg').default} alt="dropdown" />
                </div>
                <div className='Breadcrumb-box'>
                    <p className='Breadcrumb-text'>Clothings</p>
                    <img className='dropright' src={require('./BreadcrumbIcon/chevron_right.svg').default} alt="dropdown" />
                </div>
                <div className='Breadcrumb-box'>
                    <p className='Breadcrumb-text'>Men’s wear</p>
                    <img className='dropright' src={require('./BreadcrumbIcon/chevron_right.svg').default} alt="dropdown" />
                </div>
                <div className='Breadcrumb-box'>
                    <p className='Breadcrumb-text'>Summer clothing</p>
                </div>
            </div>
        </section>
    )
}
export default Breadcrumb