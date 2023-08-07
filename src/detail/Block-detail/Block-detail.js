import './Block-detail.css'

const BlockDetail = () =>{
    return(
        <section className='Block-Detail'>
            <div className='Block-Detail-block'>
             <div className='block-detail-header'>
                <div className='block-detail-header-wrapper'>
                    <p style={{color:"#0D6EFD"}} className='bloct-detail-header-texts'>Description</p>
                    <p className='bloct-detail-header-texts'>Reviews</p>
                    <p className='bloct-detail-header-texts'>Shipping</p>
                    <p className='bloct-detail-header-texts'>About seller</p>
                </div>
            </div>
            <div className='block-detail-main'>
                <p className='block-detail-main-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <img className="block-detail-main-img-d" src={require('./Block-detail-img/Info left.svg').default} alt="main-img" />
                <div className='block-detail-main-details'>
                    <div className='block-detail-main-details-box'>
                       <img className="block-detail-main-img" src={require('./Block-detail-img/idkkkkk.svg').default} alt="main-img" />
                       <p className='block-detail-main-details-texts'>Some great feature name here</p>
                    </div>
                    <div className='block-detail-main-details-box'>
                       <img className="block-detail-main-img" src={require('./Block-detail-img/idkkkkk.svg').default} alt="main-img" />
                       <p className='block-detail-main-details-texts'>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                    <div className='block-detail-main-details-box'>
                       <img className="block-detail-main-img" src={require('./Block-detail-img/idkkkkk.svg').default} alt="main-img" />
                       <p className='block-detail-main-details-texts'>Duis aute irure dolor in reprehenderit</p>
                    </div>
                    <div className='block-detail-main-details-box'>
                       <img className="block-detail-main-img" src={require('./Block-detail-img/idkkkkk.svg').default} alt="main-img" />
                       <p className='block-detail-main-details-texts'>Some great feature name here</p>
                    </div>
                </div>
             </div>
            </div>
            <div className='Block-Detail-may-like'>
                <div className='Block-Detail-may-like-wrapper'>
                    <h3 className='Block-Detail-may-like-title'>You may like</h3>
                    <div className='Block-Detail-may-like-box'>
                       <img className="block-detail-img-may" src={require('./Block-detail-img/Group 558.svg').default} alt="main-img" />
                       <div className='Block-Detail-may-like-box-texts'>
                        <h5 className='Block-Detail-may-like-box-name'>Men Blazers Sets Elegant Formal</h5>
                        <p className='Block-Detail-may-like-box-price'>$7.00 - $99.50</p>
                       </div>
                    </div>
                    <div className='Block-Detail-may-like-box'>
                       <img className="block-detail-img-may" src={require('./Block-detail-img/Group 558 (1).svg').default} alt="main-img" />
                       <div className='Block-Detail-may-like-box-texts'>
                        <h5 className='Block-Detail-may-like-box-name'>Men Shirt Sleeve Polo Contrast</h5>
                        <p className='Block-Detail-may-like-box-price'>$7.00 - $99.50</p>
                       </div>
                    </div>
                    <div className='Block-Detail-may-like-box'>
                       <img className="block-detail-img-may" src={require('./Block-detail-img/Group 558 (2).svg').default} alt="main-img" />
                       <div className='Block-Detail-may-like-box-texts'>
                        <h5 className='Block-Detail-may-like-box-name'>Apple Watch Series Space Gray</h5>
                        <p className='Block-Detail-may-like-box-price'>$7.00 - $99.50</p>
                       </div>
                    </div>
                    <div className='Block-Detail-may-like-box'>
                       <img className="block-detail-img-may" src={require('./Block-detail-img/Group 558 (3).svg').default} alt="main-img" />
                       <div className='Block-Detail-may-like-box-texts'>
                        <h5 className='Block-Detail-may-like-box-name'>Basketball Crew Socks Long Stuff</h5>
                        <p className='Block-Detail-may-like-box-price'>$7.00 - $99.50</p>
                       </div>
                    </div>
                    <div className='Block-Detail-may-like-box'>
                       <img className="block-detail-img-may" src={require('./Block-detail-img/Group 558 (4).svg').default} alt="main-img" />
                       <div className='Block-Detail-may-like-box-texts'>
                        <h5 className='Block-Detail-may-like-box-name'>New Summer Men's  castrol T-Shirts</h5>
                        <p className='Block-Detail-may-like-box-price'>$7.00 - $99.50</p>
                       </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
 export default BlockDetail